import '../styles/components/pages/SobreMi.css'
const SobreMi = (props) => {
    return (
    <div className="holder">
        <div className="columnasSobremi">
           <div className="TextoSobreMi">
               <h2>Bio</h2>
               <p>Soy Diseñadora Industrial, estudié en la Universidad de Buenos Aires y desde hace algunos años que decidí empezar a trabajar por mi cuenta.
               Siempre me interesó el mundo creativo, desde chica que me gusta mucho hacer cosas con mis manos, imaginar algo -un dibujo, un objeto- y poder cconcretarlo es una gran satisfacción. 
               Con los años descubrí que el diseño textil me permitiría empezar un proyecto con sello propio.
               Una de mis prioridades a la hora de diseñar y producir es el cuidado del ambiente, por eso utilizo telas 100% algodón y tintas al agua.
               Te invito a que conozcas mi colección y todo lo que me gusta de este Mundo Deco.</p>
           </div>
           <div className="imgcontainer1">
               <div className="Fotosobremi"> <img src="/imagenes/Foto sobre mi.png" alt=""/></div>
           </div>
       </div>
   </div>
        );
    }
    export default SobreMi;