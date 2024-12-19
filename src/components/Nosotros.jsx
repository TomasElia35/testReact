import React from 'react';
import './styles/Nosotros.css';

const Nosotros = () => {
  return (
    <section className="nosotros">
      <div className="content">
        <h2 className="titulo-nosotros">Sobre Nosotros</h2>
        <p className="descripcion-nosotros">
          En <strong>MinimalCorp</strong>, creemos en la simplicidad como motor de la innovación. 
          Nuestro equipo combina diseño moderno con tecnología avanzada para ofrecer soluciones 
          que transforman ideas en realidad.
        </p>
        <div className="valores">
          <div className="valor">
            <span className="icono">🌟</span>
            <h3 className="valor-titulo">Innovación</h3>
            <p className="valor-descripcion">Buscamos siempre nuevas maneras de mejorar.</p>
          </div>
          <div className="valor">
            <span className="icono">🤝</span>
            <h3 className="valor-titulo">Confianza</h3>
            <p className="valor-descripcion">Construimos relaciones sólidas con nuestros clientes.</p>
          </div>
          <div className="valor">
            <span className="icono">🚀</span>
            <h3 className="valor-titulo">Excelencia</h3>
            <p className="valor-descripcion">Nos esforzamos por entregar resultados de alta calidad.</p>
          </div>
          <div className="valor">
            <span className="icono">🌍</span>
            <h3 className="valor-titulo">Sostenibilidad</h3>
            <p className="valor-descripcion">Nos comprometemos con el cuidado del medio ambiente.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
