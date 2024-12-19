import React from "react";
import { motion } from "framer-motion";
import "./styles/Productos.css";

const productos = [
  { id: 1, nombre: "Producto 1", precio: "$10.00", imagen: "/img1.jpg" },
  { id: 2, nombre: "Producto 2", precio: "$15.00", imagen: "/img2.jpg" },
  { id: 3, nombre: "Producto 3", precio: "$20.00", imagen: "/img3.jpg" },
  { id: 4, nombre: "Producto 4", precio: "$25.00", imagen: "/img4.jpg" },
  { id: 5, nombre: "Producto 5", precio: "$30.00", imagen: "/img5.jpg" },
  { id: 6, nombre: "Producto 6", precio: "$35.00", imagen: "/img6.jpg" },
  { id: 7, nombre: "Producto 7", precio: "$40.00", imagen: "/img7.jpg" },
  { id: 8, nombre: "Producto 8", precio: "$45.00", imagen: "/img8.jpg" },
  { id: 9, nombre: "Producto 9", precio: "$50.00", imagen: "/img9.jpg" },
  { id: 10, nombre: "Producto 10", precio: "$55.00", imagen: "/img10.jpg" },
  { id: 11, nombre: "Producto 11", precio: "$60.00", imagen: "/img11.jpg" },
  { id: 12, nombre: "Producto 12", precio: "$65.00", imagen: "/img12.jpg" },
  { id: 13, nombre: "Producto 13", precio: "$70.00", imagen: "/img13.jpg" },
  { id: 14, nombre: "Producto 14", precio: "$75.00", imagen: "/img14.jpg" },
  { id: 15, nombre: "Producto 15", precio: "$80.00", imagen: "/img15.jpg" },
];

const Productos = () => {
  return (
    <section className="productos">
      <motion.h2
        className="productos-titulo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nuestros Productos
      </motion.h2>

      <div className="productos-lista">
        {productos.map((producto) => (
          <motion.div
            key={producto.id}
            className="producto-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="producto-precio">{producto.precio}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="producto-boton"
            >
              Agregar al Carrito
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
