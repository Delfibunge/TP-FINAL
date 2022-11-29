var express = require('express');
const session = require('express-session');
const pool = require('../../models/db');
var router = express.Router();
var productosModel = require('../../models/productosModel');
//dependencias para subida de imágenes
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); //subir imagen a la nube
const destroy = util.promisify(cloudinary.uploader.destroy); //eliminar imagen de la nube

/* Para listar productos */

router.get('/', async function (req, res, next) {

  var productos = await productosModel.getProductos();

  productos = productos.map(producto =>{
    if(producto.img_id){
      const imagen = cloudinary.image(producto.img_id, {
        width: 100,
        height: 100,
        crop: 'fill' //pad
      });
      return {
        ...producto,
        imagen
      }
    } else {
        return {
          ...producto,
          imagen: ''
        }
      }
  });

  res.render('admin/productos', { //productos.hbs
    layout: 'admin/layout',     //layout.hbs
    persona: req.session.nombre,
    productos
  });
});//cierra inicial
/*diseño agregar*/
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});
/*insertar producto*/

router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.nombre != "" && req.body.precio != "" && req.body.descripcion != "") {
      await productosModel.insertProducto({
        ...req.body,
        img_id
      });
      res.redirect('/admin/productos')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar el producto'
    })
  }
})

/*eliminar*/
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let producto = await productosModel.getProductoById(id);
  if(producto.img_id) {
    await (destroy(producto.img_id));
  }

  await productosModel.deleteProductoById(id);
  res.redirect('/admin/productos');
}); //cierre get eliminar

/*modificar*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  //console.log(req.params.id);
  var producto = await productosModel.getProductoById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    producto
  })
}); //cierre get modificar

/* Actualización de datos modificados-guardar */

router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_imagen_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_imagen_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0){
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_imagen_vieja = true;
      }
    }
    if (borrar_imagen_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }
    var obj = {
      nombre: req.body.nombre,
      precio: req.body.precio,
      descripcion: req.body.descripcion, 
      img_id
    }
    //console.log(obj)
    await productosModel.modificarProductoById(obj, req.body.id);
    res.redirect('/admin/productos');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar el producto'
    })
  }
})




module.exports = router;
