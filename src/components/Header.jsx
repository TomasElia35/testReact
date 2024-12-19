import './styles/Header.css';
import React from "react";
import { motion } from "framer-motion";


const Header = () => {
  const navLinks = ["Inicio", "Servicios", "Nosotros", "Contacto"];

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="header-logo">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="/">MiLogo</a>
        </motion.h1>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="nav-item"
              whileHover={{ scale: 1.2, color: "#007bff" }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;

