import '../styles/components/pages/Servicios.css'
const Servicios = (props) => {
    return (
       <div className="holder">
       <div className="servicios">
        <h2>Servicios</h2>
            <div className="columnasprodlistos">
                <div className="textoservicios">
                    <h3>Productos listos para llevar</h3>
                    <p>
                        Dentro del catálogo y en la tienda online podés encontrar almohadones, mantas y pequeños productos listos para retirar. Son diseños propios, exclusivos y hay para todos los gustos! Si tu estilo es cláscio y buscás diseños con colores neutros y texturas naturales o si te gustan los estampados y los colores llamativos, todo lo vas a encontrar en la tienda online. Junto con pequeños productos ideales para hacer un regalo.
                    </p>
                </div>
                <div className="imgprodlistos">
                    <img src="imagenes/Individuales.jpg" alt="individuales"/>
                </div>
            </div>
            <div className="columnasprodamedida">
                <div className="textoservicios">
                    <h3>Productos a medida</h3>
                    <p>
                        Además de los productos del catálogo tenés la posibilidad de encargar productos a medida. Dentro del catálogo vas a encontrar un montón de diseños de estampados, si te gusta alguno pero los colores no se adaptan a tu estilo podés encargarlo en el color que quieras! Me mandás una foto del espacio que tengas que decorar y juntas elegimos la mejor opción.
                    </p>
                </div>
                <div className="imgprodamedida">
                    <img src="/imagenes/introguia.jpeg" alt="Textiles estampados"/>
                </div>
            </div>
            
       </div>
    </div>
        );
    }
    export default Servicios;