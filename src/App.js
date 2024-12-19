import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importamos React Router
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Services from "./components/services";
import Contact from "./components/Contacto";
import Footer from "./components/Footer";
import Productos from "./components/Productos"; // Importamos la página de Productos

const App = () => {
  return (
    <Router>
      <Header /> {/* Mantén el Header fuera de las rutas para que esté presente en todas las páginas */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route
          path="/"
          element={
            <>
              <section id="inicio">
                <Inicio />
              </section>
              <section id="nosotros">
                <Nosotros />
              </section>
              <section id="servicios">
                <Services />
              </section>
              <section id="contacto">
                <Contact />
              </section>

              <Footer />
            </>
          }
        />

        {/* Ruta para la página de productos */}
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
};

export default App;
