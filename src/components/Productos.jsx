import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/Productos.css';

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Camiseta Argentina 2022',
      precio: '$12,000',
      imagen: 'https://source.unsplash.com/200x200/?soccer,shirt,argentina',
    },
    {
      id: 2,
      nombre: 'Camiseta Brasil 2022',
      precio: '$11,000',
      imagen: 'https://source.unsplash.com/200x200/?soccer,shirt,brazil',
    },
    {
      id: 3,
      nombre: 'Camiseta España 2022',
      precio: '$13,000',
      imagen: 'https://source.unsplash.com/200x200/?soccer,shirt,spain',
    },
    {
      id: 4,
      nombre: 'Camiseta Alemania 2022',
      precio: '$14,000',
      imagen: 'https://source.unsplash.com/200x200/?soccer,shirt,germany',
    },
  ];

  return (
    <section className="productos" id="productos">
      <h2>Nuestros Productos</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="productos-carousel"
      >
        {productos.map((producto) => (
          <SwiperSlide key={producto.id}>
            <div className="producto-card">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p className="precio">{producto.precio}</p>
              <button className="btn-detalle">Ver Detalles</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Productos;


