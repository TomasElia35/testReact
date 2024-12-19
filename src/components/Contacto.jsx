import React from "react";
import { motion } from "framer-motion";
import './styles/Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto">
      <motion.div
        className="contacto-titulo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Contáctanos</h2>
        <p>Estamos aquí para ayudarte. ¡Envíanos tu mensaje y nos pondremos en contacto contigo pronto!</p>
      </motion.div>

      <motion.form
        className="contacto-formulario"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="form-grupo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="form-grupo">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
          />
        </div>
        <div className="form-grupo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Tu mensaje"
            rows="5"
            required
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="form-boton"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Enviar
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contacto;
