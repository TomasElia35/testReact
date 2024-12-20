import React, { useState } from 'react';
import './styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#inicio">AXMASHIRTS</a>
      </div>
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#Contacto">Contacto</a></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;

