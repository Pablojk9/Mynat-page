// src/components/HeroAndProducts.js
import React from 'react';
import './Landing.css';

const Landing = () => {
  const products = [
    { imgSrc: './LandingImg/1.jpg', price: 'PRECIO' },
    { imgSrc: './LandingImg/2.jpeg', price: 'PRECIO' },
    { imgSrc: './LandingImg/3.jpeg', price: 'PRECIO' },
    { imgSrc: './LandingImg/4.jpeg', price: 'PRECIO' },
  ];

  return (
    <section className="hero-and-products">
      <div className="hero">
        <div className="hero-content">
          <img className="landingimg" src={require("./LandingImg/LP1.png")} alt="Hero" />
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
      
      
{/*Aquí va el  la sección de Sobre Nosotros    */}
      
      
      <div className="container_1"> 
       <div className="content_1">
         <div className="text-content_1">

           <h1>SOBRE NOSOTROS</h1>
           <p>Nuestra empresa se dedica a dar múltiples soluciones en el Área de Ingeniería Térmica y Mantenimiento de Sistemas Críticos, asegurando la operatividad de sus equipos para obtener el mayor desempeño en sus procesos de producción y de soporte operacional, en cuanto a líneas de alimentación y producción de calor, agua caliente y vapor se refieren. </p> <p>Nos destacamos por contar con una amplia gama de soluciones en sus necesidades de climatización de ambientes y de salas con requerimientos especiales de refrigeración.
           </p><p>Todo nuestro personal sedestaca en su preparación y experiencia, las que están puestas a su disposición para generar en conjunto soluciones que permitan alcanzar el máximo de su rendimiento productivo, a un costo razonable y conveniente que satisfaga en tiempo y oportunidad sus necesidades y las de sus clientes.</p>
         </div>

          <div className="image-conten_1">
            <img className="ImagenSN_1" src={require("./SN.png")} alt="Technical Tool" />
         </div>
       </div>
      </div>

{/*Olvide cerrar la seccion del otro tema y termie ocupando la misma seccion */}

{/*
  Notas de desarrollo:
  - Sección de contacto

    - No existe accion en el formulario
    - Basicamente todo el contenido es estatico y 'de adorno'
    - Es necesario agregarle funcionalidad

*/}
<div className="contact_form">

  {/*ULtima imagen (acompaña a contacto) */}
  <div className="image-conten_2">
            <img className="ImagenSN_2" src={require("./SN2.png")} alt="Technical Tool" />
  </div>

	
  <div className="formulario">			
		<h1>Contacto</h1>
		<h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>
		<form action="submeter-formulario.php" method="post">				
			<p>
				<label htmlFor="nombre" className="colocar_nombre">Nombre
					<span className="obligatorio">*</span>
				</label>
				<input className='inputLanding' type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre" />
			</p>
			<p>
				<label htmlFor="email" className="colocar_email">Email
					<span className="obligatorio">*</span>
				</label>
				<input className='inputLanding' type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" />
			</p>
			<p>
				<label htmlFor="telefone" className="colocar_telefono">Teléfono
				</label>
				<input className='inputLanding' type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
			</p>		
			

			<p>
				<label htmlFor="mensaje" className="colocar_mensaje">Mensaje
					<span className="obligatorio">*</span>
				</label>                     
				<textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
			</p>	  								
			<button className="botonLanding" type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
			<p className="aviso">
				<span className="obligatorio"> * </span>los campos son obligatorios.
			</p>					
		</form>
	</div>	

  
  


</div>
        
















      </section>
  );
};

export default Landing;
