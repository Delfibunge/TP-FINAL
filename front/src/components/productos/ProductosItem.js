import React from 'react';

const ProductosItem = (props) => {
    const { nombre, precio, imagen, descripcion, body } = props;

    return (
        <div className="productos">
            <h3>{nombre}</h3>
            <div className='columnasProductos'>
                <div className='containerImg'>
                    <img className='imagenProducto' src={imagen} alt="producto" />
                    <div className='precio'>{precio}</div>
                </div>
                <div className='descripcion'>{descripcion}</div>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <hr />
        </div>
    );
}
export default ProductosItem;