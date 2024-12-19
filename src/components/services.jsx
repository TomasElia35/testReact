import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/services.css";

const servicios = [
  {
    id: 1,
    titulo: "Diseño Web",
    descripcion: "Creamos sitios web modernos y responsivos para destacar tu marca.",
    icono: "🌐",
  },
  {
    id: 2,
    titulo: "Desarrollo de Apps",
    descripcion: "Desarrollamos aplicaciones móviles funcionales y de alto rendimiento.",
    icono: "📱",
  },
  {
    id: 3,
    titulo: "Marketing Digital",
    descripcion: "Estrategias innovadoras para aumentar tu presencia en línea.",
    icono: "📈",
  },
];

const Servicios = () => {
  const navigate = useNavigate(); // Hook para navegar a otra ruta

  const handleVerProductos = () => {
    navigate("/productos");
  };

  return (
    <section className="servicios">
      <motion.h2
        className="servicios-titulo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nuestros Servicios
      </motion.h2>
      
      <div className="servicios-lista">
        {servicios.map((servicio) => (
          <motion.div
            key={servicio.id}
            className="servicio-item"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="servicio-icono">{servicio.icono}</div>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </motion.div>
        ))}
      </div>

      {/* Botón "Ver productos" */}
      <motion.button
        className="servicios-boton"
        onClick={handleVerProductos}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Ver productos
      </motion.button>
    </section>
  );
};

export default Servicios;
