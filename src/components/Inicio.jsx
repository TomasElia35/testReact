// src/components/Inicio.js
import React from 'react';
import './styles/Inicio.css';

const Inicio = () => {
  return (
    <section className="inicio" id="inicio">
      <div className="overlay">
        <div className="content">
          <h1 className="title">AXMASHIRTS</h1>
          <p className="slogan">Pasión por el fútbol, calidad en cada camiseta</p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
