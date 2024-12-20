import React from 'react';
import './styles/Contacto.css';

const Contacto = () => {
  return (
    <section className="Contacto" id="Contacto">
      <div className="Contacto-info">
        <h2>Sobre Contacto</h2>
        <div className="info">
          <p><strong>Emprendimiento:</strong> Tienda Deportiva MDQ</p>
          <p><strong>Teléfono:</strong> +54 223 123 4567</p>
          <p><strong>Email:</strong> contacto@tiendamdq.com</p>
        </div>
        <div className="ubicacion">
          <h3>Ubicación</h3>
          <iframe
            title="Mapa Mar del Plata"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.601715685833!2d-57.555155!3d-38.005477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4f8e7cbbad%3A0x55ae25b146c51f60!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sar!4v1691789038654!5m2!1sen!2sar"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="Contacto-formulario">
        <h2>Contáctanos</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
