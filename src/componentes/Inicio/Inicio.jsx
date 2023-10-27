import React from 'react';
import './inicio.css';
import videoPortada from '../../galeria/videoPortada.mp4';

const Inicio = () => {
  return (
    <div>
      <header>
        <video src={videoPortada} className="vid-bg" autoPlay loop muted></video>

        

        <div className="welcome-text">
          <h2>ACADEMIA FORMATIVA  DE FUTBOL</h2>
          <h1>JAUCHA YANCE</h1>
          <p>h¿lo</p>
          <p>DICIPLINA - RESPETO - HUMILDAD</p>
          <button className="btn">CONATACTANOS</button>
        </div>
      </header>
      
    </div>
    
  );
};

export default Inicio;
