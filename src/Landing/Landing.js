// src/components/HeroAndProducts.js
import React from 'react';
import './Landing.css';

const Landing = () => {
  const products = [
    { imgSrc: 'path/to/image1.jpg', price: 'PRECIO' },
    { imgSrc: 'path/to/image2.jpg', price: 'PRECIO' },
    { imgSrc: 'path/to/image3.jpg', price: 'PRECIO' },
    { imgSrc: 'path/to/image4.jpg', price: 'PRECIO' },
  ];

  return (
    <section className="hero-and-products">
      <div className="hero">
        <div className="hero-content">
          <h1>CONSULTA POR TU COTIZACIÓN DE MANERA GRATUITA</h1>
        </div>
      </div>
      <div className="product-section">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imgSrc} alt={`Producto ${index + 1}`} />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Landing;
