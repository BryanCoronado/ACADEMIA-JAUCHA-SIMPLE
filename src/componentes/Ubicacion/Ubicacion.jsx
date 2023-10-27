import React from "react";
import "./ubicacion.css"; // Importa el archivo de estilos

const Ubicacion = () => {
  return (
    <div className="titulo">

      <div className="contenedor-general-ubi">
        <div className="contenedor-ubicacion">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3564.8770650743336!2d-75.92767292287691!3d-13.931500744964099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDU1JzUzLjQiUyA3NcKwNTUnMjIuMSJX!5e1!3m2!1ses-419!2spe!4v1693354919688!5m2!1ses-419!2spe"
            width="100%"
            height="300"
            style={{ border: "4px solid white" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
