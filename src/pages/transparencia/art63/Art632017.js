import React, { Component } from "react";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../img/imgT");

export default class Art632017 extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__header-title">
          Ley de Transparencia y Acceso a la Información Pública del Estado de
          Tlaxcala. 2016.
        </div>
        <h5 className="mt-3 Transparencia__title">
          Artículo 63. (2022) Obligaciones Comunes
        </h5>
      </div>
    );
  }
}
