import '../../styles/components/Layout.css';

const Index = (props) => {
    return (
        <div className="containerguia">
            <h2>Guías útiles para decorar tus ambientes</h2>
            <div className="introguia">
                <div className="textguia">
                    <p>En esta sección te quiero contar todo lo que necesitás saber para empezar a tomar decisiones a la hora de decorar un espacio.</p>
                    <p>Desde como medir una ventana para elegir la cortina hasta como cuidar los textiles. Todas preguntas que me hacen siempre y que me gustaría poder compartirles.</p>
                </div>
                <div className="imgguia">
                    <img src="imagenes/introguia.jpeg" alt="Textiles" />
                </div>
            </div>
        </div>
    );
}
export default Index;
