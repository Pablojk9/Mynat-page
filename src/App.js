import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Catalogo from './Catalogo/Catalogo.js';
import Barra from './Barra/Barra.js';
// import SobreNosotros from './Sobre_nosotros/SobreNosotros.js';
import Landing from './Landing/Landing.js';
import Usuario from './usuario/usuario.js'; 
import PerfilUsuario from './Perfil_Usuario/PerfilUsuario.js';
import Historial from './Historial/Historial.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Barra />
        <Routes>
          
          
          <Route path="/" element={<Landing />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/Historial" element={<Historial />} />
          <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
          <Route path="/usuario" element={<Usuario />} /> {/* Nueva ruta para Usuario , ultra necesario que este en mayuscula*/}
          {/* Redirección predeterminada a la página de aterrizaje */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;