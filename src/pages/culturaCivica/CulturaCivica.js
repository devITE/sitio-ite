import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

const CulturaCivica__path = require.context("../../assets");

export default class CulturaCivica extends Component {
  render() {
    return (
      <>
        <TitlePages title="Cultura Cívica" subTitle="" />
        <div className="Grid__three w-100">
          <div>
            <Link to="/ActividadesLudicas">
              <img
                src={CulturaCivica__path(`./img/icons/52.png`)}
                className="img-fluid"
                alt="Actividades Lúdicas"
              />
            </Link>
            <p>Actividades Lúdicas</p>
          </div>
          <div>
            <Link to="/EleccionesEscolares">
              <img
                src={CulturaCivica__path(`./img/icons/53.png`)}
                className="img-fluid"
                alt="Elecciones Escolares"
              />
            </Link>
            <p>Elecciones Escolares</p>
          </div>
          <div>
            <Link to="/ParlamentoInfantil">
              <img
                src={CulturaCivica__path(`./img/icons/54.png`)}
                className="img-fluid"
                alt="Parlamento Infantil"
              />
            </Link>
            <p>Parlamento Infantil</p>
          </div>
          <div>
            <Link to="/ParlamentoJuvenil">
              <img
                src={CulturaCivica__path(`./img/icons/55.png`)}
                className="img-fluid"
                alt="Parlamento Juvenil"
              />
            </Link>
            <p>Parlamento Juvenil</p>
          </div>
          <div>
            <Link to="/ValoresDemocracia">
              <img
                src={CulturaCivica__path(`./img/icons/56.png`)}
                className="img-fluid"
                alt="Valores de la Democracia"
              />
            </Link>
            <p>Valores de la Democracia</p>
          </div>
          <div>
            <a
              href={CulturaCivica__path(`./${"pdf/ccivica/2.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CulturaCivica__path(`./img/icons/53.png`)}
                className="img-fluid"
                alt="Catalogo de Acciones"
              />
            </a>
            <p>Catalogo de Acciones en Educación Cívica</p>
          </div>
        </div>
      </>
    );
  }
}
