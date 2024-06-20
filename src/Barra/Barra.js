import React from 'react';
import { Link } from 'react-router-dom';
import './Barra.css';

function Barra() {
    return (
        <div className="bar">
            <img className="logo" src={require('./minat.png')} alt="Logo" />
            <div className="button-container">
                <Link to="/" className="bar-link">Inicio</Link>
                <Link to="/catalogo" className="bar-link">Catálogo</Link>
                <Link to="/sobre-nosotros" className="bar-link">Sobre Nosotros</Link>
                <Link to="/contacto" className="bar-link">Contacto</Link>
            </div>
        </div>
    );
}

export default Barra;