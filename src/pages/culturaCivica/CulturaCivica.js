import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagenes from "../../img/imgcivica/cultura_civica.png";
import imagenes1 from "../../img/imgcivica/act_ludicas.png";
import imagenes2 from "../../img/imgcivica/e_escolares.png";
import imagenes3 from "../../img/imgcivica/p_infantil.png";
import imagenes4 from "../../img/imgcivica/p_juvenil.png";
import imagenes5 from "../../img/imgcivica/v_democracia.png";
import imagenes6 from "../../img/imgcivica/catalogo_ec.png";
const pdf_estructura = require.context("../../assets/pdf/ccivica/");

export default class CulturaCivica extends Component {
  render() {
    return (
      <div>
        <img src={imagenes} className="img-fluid w-100" alt="Cultura Cívica" />
        <hr className="borde" />
        <h2 className="text-center estilos-cintillo">&nbsp;</h2>
        <div className="educacion-civica">
          <Link to="/ActividadesLudicas">
            <img
              src={imagenes1}
              className="img-fluid w-75"
              alt="Actividades Lúdicas"
            />
          </Link>
          <Link to="/EleccionesEscolares">
            <img
              src={imagenes2}
              className="img-fluid w-75"
              alt="Elecciones Escolares"
            />
          </Link>
          <Link to="/ParlamentoInfantil">
            <img
              src={imagenes3}
              className="img-fluid w-75"
              alt="ParlamentoInfantil"
            />
          </Link>
          <Link to="/ParlamentoJuvenil">
            <img
              src={imagenes4}
              className="img-fluid w-75"
              alt="Parlamento Juvenil"
            />
          </Link>
          <Link to="/ValoresDemocracia">
            <img
              src={imagenes5}
              className="img-fluid w-75"
              alt="Valores de la Democracia"
            />
          </Link>
          <div className="">
            <a
              href={pdf_estructura(`./${"CatalogoEC.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes6}
                className="img-fluid w-75"
                alt="Catalogo de Acciones"
              />
            </a>
            |
          </div>
        </div>
      </div>
    );
  }
}
