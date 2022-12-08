import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import { Link } from "react-router-dom";

export default class Articulo94 extends Component {
  render() {
    return (
      <>
        <TitlePages
          title="Transparencia"
          subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
        />
        <h5 className="mt-3 text-center Transparencia__title">
          Artículo 94. del
          <br />
          Instituto Tlaxcalteca de Elecciones.
        </h5>
        <div className="list-group text-center w-50 mx-auto">
          <Link
            to="/Art942020"
            className="list-group-item list-group-item-action"
          >
            Artículo 94 (2020)
          </Link>
          <Link
            to="/Art942021"
            className="list-group-item list-group-item-action"
          >
            Artículo 94 (2021)
          </Link>
          <Link
            to="/Art942022"
            className="list-group-item list-group-item-action"
          >
            Artículo 94 (2022)
          </Link>
        </div>
      </>
    );
  }
}
