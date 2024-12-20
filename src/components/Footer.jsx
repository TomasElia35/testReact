import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Tienda Deportiva MDQ</h3>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        <div className="footer-links">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: contacto@tiendamdq.com</p>
          <p>Teléfono: +54 223 123 4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

