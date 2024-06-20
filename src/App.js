import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogo from './Catalogo/Catalogo.js';
import Barra from './Barra/Barra.js';
import SobreNosotros from './Sobre_nosotros/SobreNosotros.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Barra />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          {/* Puedes agregar más rutas aquí si es necesario */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
