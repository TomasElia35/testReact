// src/components/Inicio.jsx
import React from 'react';
import './styles/Inicio.css';

const Inicio = () => {
  return (
<section id="home" className="inicio">
  <div className="content">
    <h1 className="nombre-empresa">MinimalCorp</h1>
    <p className="tagline">Innovación Simplificada</p>
    <button className="btn-explorar">Explorar Más</button>
  </div>
</section>
  );
};

export default Inicio;