import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

const CulturaCivica__path = require.context("../../assets");

export default class CulturaCivica extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Cultura Cívica" />
        {/* <h2 className="text-center estilos-cintillo">&nbsp;</h2> */}
        <div className="educacion-civica">
          <Link to="/ActividadesLudicas">
            <img
              src={CulturaCivica__path(`./img/imgcivica/act_ludicas.png`)}
              className="img-fluid w-75"
              alt="Actividades Lúdicas"
            />
          </Link>
          <Link to="/EleccionesEscolares">
            <img
              src={CulturaCivica__path(`./img/imgcivica/e_escolares.png`)}
              className="img-fluid w-75"
              alt="Elecciones Escolares"
            />
          </Link>
          <Link to="/ParlamentoInfantil">
            <img
              src={CulturaCivica__path(`./img/imgcivica/p_infantil.png`)}
              className="img-fluid w-75"
              alt="ParlamentoInfantil"
            />
          </Link>
          <Link to="/ParlamentoJuvenil">
            <img
              src={CulturaCivica__path(`./img/imgcivica/p_juvenil.png`)}
              className="img-fluid w-75"
              alt="Parlamento Juvenil"
            />
          </Link>
          <Link to="/ValoresDemocracia">
            <img
              src={CulturaCivica__path(`./img/imgcivica/v_democracia.png`)}
              className="img-fluid w-75"
              alt="Valores de la Democracia"
            />
          </Link>
          <div className="">
            <a
              href={CulturaCivica__path(`./${"pdf/ccivica/2.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CulturaCivica__path(`./img/imgcivica/catalogo_ec.png`)}
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
