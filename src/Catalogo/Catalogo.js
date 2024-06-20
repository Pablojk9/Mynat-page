import React from 'react';
import './Catalogo.css';

const products = {
  "Ingeniería térmica": [
    "/1.jpg",
    "/2.jpeg"
  ],
  "Generadores Eléctricos": [
    "/3.jpeg",
    "/4.jpeg"
  ],
  "Bombas": [
    "/5.jpg",
    "/6.jpeg"
  ],
  "Calderas Industriales": [
    "/7.jpeg",
    "/8.jpeg"
  ],
  "Calderas de Edificios": [
    "/2.jpeg",
    "/2.jpeg"
  ],
  "Calderas Domiciliarias": [
    "ruta/a/imagen11.jpg",
    "ruta/a/imagen12.jpg"
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
              <img key={index} src={image} alt={`Imagen de ${category}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;