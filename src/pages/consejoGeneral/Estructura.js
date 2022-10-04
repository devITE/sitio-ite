import React, { Component } from "react";
import imagenes from "./img/estructura.png";

export default class Estructura extends Component {
  render() {
    return (
      <div>
        <img
          src={imagenes}
          className="img-fluid w-100"
          alt="Estructura"
        />
        <hr className="borde" />
      </div>
    );
  }
}
