var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

//carga de productos
router.get('/productos', async function (req, res, next) {

    var productos = await productosModel.getProductos();
  
    productos = productos.map(producto =>{
      if(producto.img_id){
        const imagen = cloudinary.url(producto.img_id, {
          width: 960,
          height: 960,
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
  
    res.json(productos);
    }); //cierra productos

    //envío de formulario mail
router.post('/contacto', async(req, res)=>{
  const mail={
    to:'hola@delfinabungedeco.com.ar',
    subject: 'Contacto web',
    html: `${req.body.nombre} se contactó a través de la web  y quiere más informacióna este correo, ${req.body.email} Además hizo el siguiente comentario, ${req.body.mensaje}<br> Su tel es,${req.body.telefono}`
  }
  const transport= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
    });
    await transport.sendMail(mail)
    res.status(201).json({
      error: false,
      message: 'Mensaje enviado'
    })
  })
//finaliza fomrulario

    

module.exports = router;