import React from 'react';
import './styles/Nosotros.css';
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Imagen con animación de entrada */}
      <motion.div
        className="about-us-image"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/path-to-image.jpg" alt="Equipo" />
      </motion.div>

      {/* Contenido con animaciones */}
      <motion.div
        className="about-us-content"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Sobre Nosotros</h2>
        <p>
          Somos un equipo apasionado dedicado a crear soluciones innovadoras.
          Nuestro enfoque está en la excelencia y la creatividad para satisfacer
          las necesidades de nuestros clientes.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="about-us-button"
        >
          Conoce Más
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
