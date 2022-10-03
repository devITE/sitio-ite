import React, { Component } from "react";
import imagenes from "./img/comisiones.png";
import imagenes2 from "./img/comisiones2.jpg";
import { Link } from "react-router-dom";

export default class Comisiones extends Component {
  render() {
    return (
      <div>
        <img
          src={imagenes}
          className="img-fluid w-100 mx-auto"
          alt="Comisiones"
        />
        <Link to={imagenes2} target="_blank">
          <img
            src={imagenes2}
            className="img-fluid w-100 mx-auto"
            alt="Comisiones Permanentes"
          />
        </Link>
      </div>
    );
  }
}