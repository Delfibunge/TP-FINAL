import '../../styles/components/Layout.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
    return (
        <footer>
           <div>Creado por Delfina Bunge @delfinabungedeco</div>
           <div className='icono' >
                <a href="https://www.instagram.com/delfinabungedeco/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>{"     "}
                <a href="https://www.facebook.com/profile.php?id=100074041243311" target="blank"><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
            </footer>
    );
}
export default Footer;