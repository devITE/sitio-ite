import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../assets/img/imgT");

export default class Articulo67 extends Component {
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
          Tlaxcala.
        </div>
        <h5 className="mt-3 text-center Transparencia__title">
          Artículo 67. del
          <br />
          Instituto Tlaxcalteca de Elecciones.
        </h5>
        <div className="list-group text-center Transparencia__articulo-p-year">
          <Link
            to="/Art672017"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2017)
          </Link>
          <Link
            to="/Art672018"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2018)
          </Link>
          <Link
            to="/Art672019"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2019)
          </Link>
          <Link
            to="/Art672020"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2020)
          </Link>
          <Link
            to="/Art672021"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2021)
          </Link>
          <Link
            to="/Art672022"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2022)
          </Link>
        </div>
      </div>
    );
  }
}
