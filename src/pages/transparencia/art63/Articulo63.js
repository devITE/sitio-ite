import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

export default class Articulo63 extends Component {
  render() {
    return (
      <>
        <TitlePages
          title="Transparencia"
          subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
        />
        <h5 className="text-center text-strong">
          Artículo 63. del
          <br />
          Instituto Tlaxcalteca de Elecciones.
        </h5>
        <div className="list-group text-center w-50 mx-auto">
          <Link
            to="/Art632017"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2017)
          </Link>
          <Link
            to="/Art632018"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2018)
          </Link>
          <Link
            to="/Art632019"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2019)
          </Link>
          <Link
            to="/Art632020"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2020)
          </Link>
          <Link
            to="/Art632021"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2021)
          </Link>
          <Link
            to="/Art632022"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2022)
          </Link>
        </div>
      </>
    );
  }
}
