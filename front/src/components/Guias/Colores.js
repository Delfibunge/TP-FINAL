import '../../styles/components/pages/Guias.css'

const Colores = (props) => {
    return (
        <div className="containerguia">
            <h2>¿Qué es el color?</h2>
            <div className="contcolores">
                <p>El color es uno de los principales elementos de la decoración. Tiene la capacidad de influir en la decoración y las personas, afectar las proporciones aparentes del espacio y el estado de ánimo, y es utilizado para crear climas y estilos.</p>
                <p>En la decoración de interiores es fundamental encontrar un esquema de colores que funcione adecuadamente. Para ello necesitamos entender cómo funcionan los colores, tanto individualmente como en armonía o contraste con otros. Qué es el color, cómo se forman los colores y cómo combinar los colores en la decoración.</p>
                <p>Para explicar la teoría del color y poder entender cómo se relacionan los colores entre sí y de qué manera los percibimos, se utilizan diferentes modelos. El modelo utilizado en la fabricación de pinturas, pigmentos y colorantes químicos es el modelo del círculo cromático tradicional.</p>
                <div className="imgcolores">
                    <img src="/imagenes/circulo_cromatico.png" alt="" />
                </div>
                <h3>Teoría del color</h3>
                <p>Hablar de colores no es algo nuevo en el mundo de la ciencia, al contrario, hay una cantidad considerable de estudios que confirmar que los colores tienen muchas implicaciones tanto en ambientes como en las personas.</p>
                <p>De hecho, existe la teoría del color que se ha encargado en colocar los pilares para sustentar que lo cromático puede hacernos sentir más alegres o melancólicos, motivarnos a consumir algo o rechazarlo de inmediato; esto en cuanto a las personas. Pero también en los ambientes tiene efectos, en lugares fuertes y agresivos como las cárceles, un tono rosa o azul hará que la atmósfera mitigue su rudeza.</p>
                <p>Cuando hablamos de alterar las dimensiones, nos referimos a poder generar los siguientes cambios agregando un color:</p>
                <div className="imgcolores">
                    <img src="/imagenes/color_espacios.png" alt="" />
                </div>
            </div>

        </div>

    );
}
export default Colores;