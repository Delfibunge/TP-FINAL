import './App.css';
import '../src/styles/components/Layout.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import SobreMi from './pages/SobreMi';
import Servicios from './pages/Servicios';
import Guias from './pages/Guias';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <div className='HeaderNav'>
      <Header />
        <Nav />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="HomePage" element={<HomePage />} />
          <Route path="SobreMi" element={<SobreMi />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Guias/*" element={<Guias />} />
        </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
