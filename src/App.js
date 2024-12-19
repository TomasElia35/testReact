// App.jsx
import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Services from './components/services';


const App = () => {
  return (
    <div>
      <Header />
      <Inicio />
      <Nosotros />
      <Services /> 
      {/* Agrega más secciones aquí */}
    </div>
  );
};

export default App;