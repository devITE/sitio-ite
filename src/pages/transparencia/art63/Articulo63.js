import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../img/imgT");

export default class Articulo63 extends Component {
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
        <h5 className="mt-3 text-center Transparencia__title">
          Artículo 63. del
          <br />
          Instituto Tlaxcalteca de Elecciones.
        </h5>
        <div class="list-group text-center Transparencia__articulo-p-year">
          <Link
            to="/Articulo63_2017"
            class="list-group-item list-group-item-action"
          >
            Artículo 63 (2017)
          </Link>
          <Link
            to="/Articulo63_2018"
            class="list-group-item list-group-item-action"
          >
            Artículo 63 (2018)
          </Link>
          <Link
            to="/Articulo63_2019"
            class="list-group-item list-group-item-action"
          >
            Artículo 63 (2019)
          </Link>
          <Link
            to="/Articulo63_2020"
            class="list-group-item list-group-item-action"
          >
            Artículo 63 (2020)
          </Link>
          <Link
            to="/Articulo63_2021"
            class="list-group-item list-group-item-action"
          >
            Artículo 63 (2021)
          </Link>
          <Link
            to="/Articulo63_2022"
            class="list-group-item list-group-item-action"
          >
            Artículo 63 (2022)
          </Link>
        </div>
      </div>
    );
  }
}
