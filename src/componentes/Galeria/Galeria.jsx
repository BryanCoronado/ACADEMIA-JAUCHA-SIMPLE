import React from 'react';
import './galeria.css'; // Asegúrate de tener el archivo CSS correspondiente
import uno from './../../galeria/galeria/1.jpg';
import dos from './../../galeria/galeria/2.jpg';
import tres from './../../galeria/galeria/3.jpg';
import cuatro from './../../galeria/galeria/4.jpg';
import cinco from './../../galeria/galeria/5.jpg';
import seis from './../../galeria/galeria/6.jpg';
import siete from './../../galeria/galeria/7.jpg';
import ocho from './../../galeria/galeria/8.jpg';
import nueve from './../../galeria/galeria/9.jpg';

const Galeria = () => {
  return (
    <div className="titulo">

    <div className="grid-container">

      <div className="grid-item tall" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item wide hide-on-small" style={{ backgroundImage: `url(${dos})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item wide " style={{ backgroundImage: `url(${tres})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${cuatro})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${cinco})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item tall wide hide-on-small" style={{ backgroundImage: `url(${seis})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item tall wide wide hide-on-small" style={{ backgroundImage: `url(${siete})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item wide hide-on-small" style={{ backgroundImage: `url(${ocho})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${nueve})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Galeria;
