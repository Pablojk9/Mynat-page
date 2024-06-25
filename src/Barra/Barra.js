import React from 'react';
import { Link } from 'react-router-dom';
import './Barra.css';

function Barra() {
    return (
        <div className="bar">
            <Link to="/"><img className="logo" src={require('./minat.png')} alt="Logo" /></Link>
            <div className="button-container">
                <Link to="/" className="bar-link">Inicio</Link>
                <Link to="/catalogo" className="bar-link">Catálogo</Link>
                <Link to="/sobre-nosotros" className="bar-link">Sobre Nosotros</Link>
                <Link to="/PerfilUsuario" className="bar-link">Perfil</Link>
                <Link to="/usuario" className="bar-link usuario-link">Usuario</Link> {/* Añadir la clase 'usuario-link' */}
            </div>
        </div>
    );
}

export default Barra;