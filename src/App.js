import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Inicio />
      <Nosotros />
      <Productos />
      <Contacto />
      <Footer />
      {/* Otras secciones */}
    </div>
  );
};

export default App;

