import React, { Component } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div>
          <p>
            Ubicación: Ex-Fábrica San Manuel S/N, Barrio Nuevo, 90640 San Miguel
            Contla, Tlax.
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faCopyright} /> Todos los derechos
            reservados.
          </p>
        </div>
        <div>
          <p>Teléfono: (246)4650340 ext. 111</p>
          <p>Correo Electrónico: transparencia@itetlax.org.mx</p>
        </div>
      </div>
    );
  }
}
