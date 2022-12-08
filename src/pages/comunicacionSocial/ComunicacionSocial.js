import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagenes from "../../img/imgcomunicacion/Comunicacion.jpg";
import imagenes1 from "../../img/imgcomunicacion/boletines.png";
import imagenes2 from "../../img/imgcomunicacion/monitoreo.png";
import imagenes3 from "../../img/imgcomunicacion/espacio-ite.jpg";

export default class ComunicacionSocial extends Component {
  render() {
    return (
      <div>
        <img
          src={imagenes}
          className="img-fluid w-100"
          alt="Comunicacion Social"
        />
        <hr className="borde" />

        <div className="text-center comunicacion-social-container">
          <Link to="/Boletines" className="comunicacion-social">
            <img src={imagenes1} className="img-fluid" alt="Boletines" />
            <p className="text-center pink-text"><br/>Boletines</p>
          </Link>

            <Link to="/Monitoreo"className="text-center comunicacion-social">
              <img src={imagenes2} className="img-fluid" alt="Monitoreo" />
              <p className="text-center pink-text"><br/>Monitoreo</p>
            </Link>
        </div>
        <div className="comunicacion-social-container2">
        <Link to="/EspacioIte"className="comunicacion-social">
              <img src={imagenes3} className="img-fluid" alt="Espacio ITE" />
              <p className="text-center pink-text"><br/>Espacio ITE</p>
            </Link>
            </div>
      </div>
    );
  }
}
