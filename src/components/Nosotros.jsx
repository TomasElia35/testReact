// src/components/Nosotros.js
import React from 'react';
import './styles/Nosotros.css';
import nosotrosImage from './img/Nosotros.jpg';


const Nosotros = () => {
  return (
    <section className="nosotros" id="nosotros">
      <div className="nosotros-content">
        <div className="nosotros-text">
          <h2>Sobre Nosotros</h2>
          <p>
            AXMASHIRTS nació de la pasión de dos amigos por el fútbol y el deseo
            de brindar acceso a camisetas originales a precios increíbles. Nuestro
            objetivo es compartir esta pasión con todos los fanáticos del deporte.
            ¡Somos más que una tienda, somos un equipo!
          </p>
        </div>
        <div className="nosotros-image">
          <img
            src={nosotrosImage}
            alt="Nosotros"
          />

        </div>
      </div>
    </section>
  );
};

export default Nosotros;


