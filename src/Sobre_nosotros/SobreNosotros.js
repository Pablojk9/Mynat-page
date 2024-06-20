import React from 'react';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text-content">
          <h1>SOBRE NOSOTROS</h1>
          {/* Existe la posibilidad de colocar un subtitulo aca */}
          <p><strong>MYNAT CHILE SPA </strong>es una empresa dedicada a brindar soluciones en el área de Ingeniería Térmica y Mantenimiento de Sistemas Críticos. </p>
          <p>Nos aseguramos de que los equipos operen de manera eficiente para lograr el máximo rendimiento en los procesos de producción y soporte operacional, abarcando líneas de alimentación, producción de calor, agua caliente y vapor. En Mynat, nos destacamos por ofrecer una amplia gama de soluciones para climatización de ambientes y salas con requerimientos especiales de refrigeración. Nuestro personal altamente capacitado y experimentado está comprometido en encontrar soluciones que optimicen la productividad a un costo razonable y conveniente, satisfaciendo las necesidades tanto de nuestros clientes como las propias.</p>
          
        </div>
        <div className="image-content">
          <img className="ImagenSN" src="/SN.png" alt="Technical Tool" />
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
