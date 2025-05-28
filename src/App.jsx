import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registro from './componentes/registro/registro';
import Sesion from './componentes/Sesion/Sesion';
import Inicio from './componentes/Inicio/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navmenu">
        <img src="#" alt="logo"/>
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/registro">Registrate</Link>
        <Link className="nav-link" to="/sesion">Iniciar Sesión</Link>
        <Link className="nav-link" to="/catalogo">Catálogo de Mascotas</Link>
        <div className='buscador'>
          <input type="text" placeholder='Buscar' />
          <button>Buscar</button>
        </div>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sesion" element={<Sesion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


