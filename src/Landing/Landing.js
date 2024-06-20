// src/components/HeroAndProducts.js
import React from 'react';
import './Landing.css';

const Landing = () => {
  const products = [
    { imgSrc: './1.jpg', price: 'PRECIO' },
    { imgSrc: './1.jpg', price: 'PRECIO' },
    { imgSrc: './1.jpg', price: 'PRECIO' },
    { imgSrc: './1.jpg', price: 'PRECIO' },
  ];

  return (
    <section className="hero-and-products">
      <div className="hero">
        <div className="hero-content">
          <img className="landingimg" src="/SN.png" alt="Hero" />
          <h1>CONSULTA POR TU COTIZACIÓN DE MANERA GRATUITA</h1>
          
        </div>
      </div>
      <div className="product-section">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={require(`${product.imgSrc}`)} alt={`Producto ${index + 1}`} />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Landing;
