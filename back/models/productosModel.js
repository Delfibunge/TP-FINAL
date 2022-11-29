var pool = require('./db');

/*levantar productos de base de datos */
async function getProductos() {
    var query ='select * from productos';
    var rows = await pool.query(query);
    return rows;
}

/*agregar producto */
async function insertProducto(obj){
    try{
        var query = "insert into productos set ?";
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw (error);
    }
}
/*eliminar producto*/
async function deleteProductoById(id){
        var query = "delete from productos where id = ?";
        var rows = await pool.query(query, [id]);
        return rows;
    }

/* traiga novedad por id para modificarla */
async function getProductoById(id){
    var query = "select * from productos where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/* actualización de datos modificados - guardar */
async function modificarProductoById(obj, id){
    try{
        var query = "update productos set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw (error);
    }
}
module.exports = {getProductos, insertProducto, deleteProductoById, getProductoById, modificarProductoById}