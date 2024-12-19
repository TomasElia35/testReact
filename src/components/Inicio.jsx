// src/components/Inicio.jsx
import React from 'react';
import './styles/Inicio.css';
import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <section className="inicio">
      {/* Contenido principal */}
      <div className="inicio-contenido">
        <motion.h1
          className="inicio-titulo"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Bienvenido a <span className="destacado">Nuestro Sitio</span>
        </motion.h1>
        <motion.p
          className="inicio-descripcion"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Somos tu mejor opción para soluciones modernas, eficaces y de calidad. 🚀
        </motion.p>
        <motion.button
          className="inicio-boton"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ¡Contáctanos!
        </motion.button>
      </div>

      {/* Imagen destacada */}
      <motion.div
        className="inicio-imagen"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/path-to-image.jpg" alt="Inicio destacado" />
      </motion.div>
    </section>
  );
};

export default Inicio;
