import React from 'react';
import './Catalogo.css';

const products = {
  "Ingeniería térmica": [
    "./CatalogoImg/1.jpg",
    "./CatalogoImg/2.jpeg"
  ],
  "Generadores Eléctricos": [
    "./CatalogoImg/3.jpeg",
    "./CatalogoImg/4.jpeg"
  ],
  "Bombas": [
    "./CatalogoImg/5.jpg",
    "./CatalogoImg/6.jpeg"
  ],
  "Calderas Industriales": [
    "./CatalogoImg/7.jpeg",
    "./CatalogoImg/8.jpeg"
  ],
  "Calderas de Edificios": [
    "./CatalogoImg/1.jpg",
    "./CatalogoImg/2.jpeg"
  ],
  "Calderas Domiciliarias": [
    "./CatalogoImg/3.jpeg",
    "./CatalogoImg/4.jpeg"
  ]
};

function ProductCatalog() {
  return (
    <div className="catalog">
      {Object.entries(products).map(([category, images]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {images.map((image, index) => (
              <img className="ImagenCatalogo" key={index} src={require(`${image}`)} alt={`Imagen de ${category}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;
