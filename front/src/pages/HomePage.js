import React from 'react'
import Banner from '../components/Banner';
import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
    return (
        <div className="banner">
            <Banner></Banner>
            <div className="holder">
                
                <div className="columnas">
                    <div className="Hola">
                        <h1>Hola!</h1>
                        <p>En este espacio quiero contarte como hacer para que tu casa se convierta en tu hogar. Que puedas encontrar tu estilo y puedas decorar cada ambiente con onda y en armonía. Hoy en día es fácil marearse con tanta información disponible, pór eso en este espacio vas a encontrar tips para que sepas qué elegir y como organizar los objetos.</p>
                        <p>Además quiero compartir con vos mi trabajo! Para mi es muy importante el cuidado del ambiente, por eso elijo trabajar con telas 100% algodón, realizadas a mano y estampadas con tintas al agua, no tóxicas.</p>
                    </div>
                    <div className="imgcontainer">
                        <div className="fotoinicio">
                            <img src="/imagenes/Foto inicio.png" alt="Foto de perfil" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;