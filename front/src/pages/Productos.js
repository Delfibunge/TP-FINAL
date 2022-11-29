import { useState, useEffect } from "react";
import axios from 'axios';
import ProductosItem from "../components/productos/ProductosItem";
import '../styles/components/pages/Productos.css';


const Productos = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            // const response = await axios.get('${process.env.REACT_APP_API_URL}/api/productos');
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);

    return (
        <section className="holder">
            <h2>Catálogo de productos</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    productos.map(item => <ProductosItem key={item.id}
                        nombre={item.nombre} precio={item.precio}
                        imagen={item.imagen} body={item.descripcion} />)
                )
            }

        </section>
    );
};    
    export default Productos;
