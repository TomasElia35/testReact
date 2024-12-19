import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="servicios">
      <div className="content">
        <h2 className="titulo-servicios">Nuestros Servicios</h2>
        <p className="descripcion-servicios">
          Ofrecemos una variedad de servicios diseñados para satisfacer las necesidades de nuestros clientes.
        </p>
        <Slider {...settings} className="lista-servicios">
          <div className="servicio">
            <span className="icono">💻</span>
            <h3 className="servicio-titulo">Desarrollo Web</h3>
            <p className="servicio-descripcion">
              Creamos sitios web modernos, responsivos y personalizados.
            </p>
          </div>
          <div className="servicio">
            <span className="icono">📱</span>
            <h3 className="servicio-titulo">Apps Móviles</h3>
            <p className="servicio-descripcion">
              Diseñamos aplicaciones intuitivas para Android e iOS.
            </p>
          </div>
          <div className="servicio">
            <span className="icono">☁️</span>
            <h3 className="servicio-titulo">Soluciones en la Nube</h3>
            <p className="servicio-descripcion">
              Optimizamos tus operaciones con tecnología cloud.
            </p>
          </div>
          <div className="servicio">
            <span className="icono">🔒</span>
            <h3 className="servicio-titulo">Ciberseguridad</h3>
            <p className="servicio-descripcion">
              Protegemos tus datos con estrategias avanzadas de seguridad.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
