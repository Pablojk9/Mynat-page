import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Catalogo from './Catalogo/Catalogo.js';
import Barra from './Barra/Barra.js';
import Landing from './Landing/Landing.js';
import Usuario from './usuario/usuario.js'; 
import PerfilUsuario from './Perfil_Usuario/PerfilUsuario.js';
import Historial from './Historial/Historial.js';
import Agenda from './Agenda/Agenda.js'; // Importa el componente Agenda
import Footer from './Footer/Footer.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Barra />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/perfilusuario" element={<PerfilUsuario />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/Agenda" element={<Agenda />} /> {/* Agrega la ruta para Agenda */}
          {/* Redirección predeterminada a la página de aterrizaje */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
