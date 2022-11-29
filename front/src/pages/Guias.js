import { NavLink,Routes,Route } from 'react-router-dom';
import Almohadones from '../components/Guias/Almohadones';
import Colores from '../components/Guias/Colores';
import Cortinas from '../components/Guias/Cortinas';
import Cuidados from '../components/Guias/Cuidados';
import Index from '../components/Guias/Index';
import '../styles/components/pages/Guias.css';

function Guias(props) {
    return (
        <div className="holder">
            <div className="columnasguia">
                <div className="menuguia">
                    <nav className="navguia">
                        <ul>
                            <li><NavLink to="Cortinas" className={({ isActive }) => isActive ? "activo1" : undefined}>Cortinas</NavLink></li>
                            <li><NavLink to="Almohadones" className={({ isActive }) => isActive ? "activo1" : undefined}>Almohadones</NavLink></li>
                            <li><NavLink to="Colores" className={({ isActive }) => isActive ? "activo1" : undefined}>Uso del color</NavLink></li>
                            <li><NavLink to="Cuidados" className={({ isActive }) => isActive ? "activo1" : undefined}>Cuidados</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="" element={<Index />} />
                    <Route path="Cuidados" element={<Cuidados />} />
                    <Route path="Almohadones" element={<Almohadones />} />
                    <Route path="Colores" element={<Colores />} />
                    <Route path="Cortinas" element={<Cortinas />} />
                </Routes>
            </div>

        </div>
    );
}
export default Guias;