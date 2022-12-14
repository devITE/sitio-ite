import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";
import { Link } from "react-router-dom";
import imagenes2 from "./img/comisiones2.jpg";

export default class Comisiones extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Comisiones y Comités Permanentes" subTitle="" />

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
