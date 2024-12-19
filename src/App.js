// App.jsx
import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Services from './components/services';
import Contact from './components/Contacto';

const App = () => {
  return (
    <div>
      <Header />
      <Inicio />
      <Nosotros />
      <Services /> 
      <Contact /> 
      {/* Agrega más secciones aquí */}
    </div>
  );
};

export default App;