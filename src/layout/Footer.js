import React, { Component } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div>
          Ubicación: Ex-Fábrica San Manuel S/N, Barrio Nuevo, 90640 San Miguel
          Contla, Tlax.
        </div>
        <div>
          <FontAwesomeIcon icon={faCopyright} /> Todos los derechos reservados.
        </div>
        <div>
          Teléfono: (246)4650340 ext. 111
          <br />
          Correo Electrónico: transparencia@itetlax.org.mx
        </div>
      </div>
    );
  }
}
