import React, { Component } from "react";
import { dataInformesAnuales } from "../../../assets/data/dataTransparenciaInformes";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../assets/img/imgT");
const icons_imgpath = require.context("../../../assets/img/icons");

export default class InformesAnuales extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__header-title">
          Informe Anual de Actividades
        </div>
        <div className="w-100 mt-3 Transparencia__contenido">
          {dataInformesAnuales.map((informe) => {
            return (
              <div key={informe.id}>
                <a href={informe.url} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid "
                    src={icons_imgpath(`./2.png`)}
                    alt={"Informe anual de actividades " + informe.title}
                  />
                </a>
                <p className="mt-2">
                  Informe anual de actividades
                  <br />
                  {informe.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
