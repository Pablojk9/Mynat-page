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
                    <h4>Topic</h4>
                    <ul>
                        <li><a href="/page1">Contacto:+123456789</a></li>
                        <li><a href="/page2">Page</a></li>
                        <li><a href="/page3">Page</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com" className="social-icon">📘</a>
                <a href="https://www.linkedin.com" className="social-icon">🔗</a>
                <a href="https://www.youtube.com" className="social-icon"><img src={require("./facebook.png")} className="social-icon"></img></a>
                <a href="https://www.instagram.com" className="social-icon"><img src={require("./instagram.png")} className="social-icon"></img></a>
            </div>
        </footer>
    );
};

export default Footer;
