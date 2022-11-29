import '../../styles/components/pages/Guias.css';

const Cortinas = (props) => {
    return (
        <div className="containerguia">
                    <h2>Cortinas</h2>
                    <div className="contcortinas">
                        <p>
                            Las cortinas en la decoración constituyen un elemento tanto funcional como decorativo. Sirven para filtrar la luz natural, crear intimidad o acompañar el estilo de la decoración. También pueden utilizarse para realzar la vista al exterior o disimular un defecto de construcción.
                        </p>
                        <p>
                            Por su variedad y su influencia en la decoración, el uso de cortinas debe ser analizado previamente a su elección. Se debe considerar el propósito de la cortina, el estilo decorativo del ambiente y el tamaño de la ventana. Con estos datos podemos definir el tipo de cortina a utilizar, el tamaño, la tela y el color o diseño.
                        </p>
                        <h3>Como elegir la cortina adecuada</h3>
                        <p>Cuando se trata de elegir una cortina las opciones pueden ser muchas. Lo primero que debemos pensar es para  que queremos la cortina.</p>
                        <ul>
                            <li>Si es para restringir la luz: lo mejor será un terciopelo, pana o brocado. Lo más moderno en este sentido son los blackout, telas cuya composición, con un lado vinílico, impiden el paso de la luz.</li>
                            <li>Si buscamos proteger nuestra privacidad: las mejores telas a utilizar son el algodón muy ligero, el lino y la gasa.</li>
                            <li>Una combinación interesante es utilizar una cortina liviana detrás de otra con más cuerpo, para disponer alternativamente de una u otra dependiendo de la necesidad de oscuridad o luz, pero siempre resguardando la privacidad.</li>
                        </ul>
                        <h3>Como medir la ventana</h3>
                        <p>A la hora de encargar una cortina las medidas que se le pasan al proveedor son las de la ventana y el riel, no se le pasa la medida que creemos que tiene que tener la cortina. Luego, dependiendo de lo que el cliente elija se le dará arrastre, vuelo, etc. </p>
                        <p>Si hubiese un riel o barral instalado la medida del ancho a pasar es la del riel o barral, y si todavía no hay y debe comprar uno la medida de este debe exceder a la ventana entre 10cmy 15 cm de cada lado. Eso es para que la cortina pueda retirarse del todo hacia los lados y quede la ventana despejada.</p>
                        <p>El largo es desde arriba del riel/barral (10cm a 15cm sobre la ventana) hasta que termina la ventana o hasta el piso.</p>
                        <div className="imgventana">
                            <img src="/imagenes/ventana.png" alt="gráfico ventana" />
                        </div>
                    </div>
                </div>

        );
}
export default Cortinas;