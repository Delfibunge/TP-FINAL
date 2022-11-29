import { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contacto = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
    axios.post('http://localhost:3000/api/Contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    return (
        <div className="holder">
            <div className="contacto">
                <div className="info">
                    <h2>Te espero!</h2>
                    <div>
                        <p>
                            Paunero 2765, Palermo, Buenos Aires
                        </p>
                        <p>
                            Whatsapp: (11)7368-2988
                        </p>
                        <p>
                            info:hola@delfinabungedeco.com
                        </p>
                        <p className='iconoContacto'>
                            <FontAwesomeIcon icon={faInstagram} /><a href="https://www.instagram.com/delfinabungedeco/" target="blank">Instagram</a>
                        </p>
                        <p className='iconoContacto'>
                            <FontAwesomeIcon icon={faFacebook} /><a href="https://www.facebook.com/profile.php?id=100074041243311" target="blank">Facebook</a>
                        </p>
                    </div>
                </div>
                <div className="formcontainer">
                    <h2>Contacto</h2>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label>Nombre:</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Email:</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Teléfono:</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Mensaje:</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <p className="acciones"><input type="submit" value="Enviar" className="boton" /></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contacto;