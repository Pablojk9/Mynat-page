import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={require('./minat.png')} alt="MYNAT Chile" />
            </div>
            <div className="footer-topics">
                <div className="topic">
                    <h4>Contacto</h4>
                    <ul>
                        <li>+569 3436 6313</li>
                        <li> mvargas@mynatchile.cl</li>
                        
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                {/* 
                AGREGAR ENLACES REALES
                    Agregar enlaces a redes sociales de MYNAT Chile SPA:
                        - Facebook
                        - YouTube
                */}
                <a href="https://www.facebook.com" className="social-icon"><img src={require("./facebook.png")} className="social-icon"></img></a>
                <a href="https://cl.linkedin.com/in/mynat-chile-spa-4b6575215" className="social-icon"><img src={require("./linkedin.png")} className="social-icon"></img></a>
                <a href="https://www.youtube.com" className="social-icon"><img src={require("./youtube.png")} className="social-icon"></img></a>
                <a href="https://www.instagram.com/mynat_chile_spa/?hl=es-la" className="social-icon"><img src={require("./instagram.png")} className="social-icon"></img></a>
            </div>
        </footer>
    );
};

export default Footer;
