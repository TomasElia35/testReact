import React from "react";
import { motion } from "framer-motion";
import "./styles/Footer.css";

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: "🌐", href: "https://example.com", label: "Website" },
    { id: 2, icon: "🐦", href: "https://twitter.com", label: "Twitter" },
    { id: 3, icon: "📘", href: "https://facebook.com", label: "Facebook" },
    { id: 4, icon: "📷", href: "https://instagram.com", label: "Instagram" },
  ];

  const navLinks = ["Inicio", "Servicios", "Nosotros", "Contacto"];

  return (
    <footer className="footer">
      <motion.div
        className="footer-contenido"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="footer-enlaces-sociales">
          <h3>Síguenos</h3>
          <ul>
            {socialLinks.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="footer-navegacion">
          <h3>Enlaces</h3>
          <ul>
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 10, color: "#007bff" }}
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="footer-derechos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
