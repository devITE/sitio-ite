import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import { dataInformesAnuales } from "../../../assets/data/dataTransparencia";
import "../Transparencia.css";

const icons_imgpath = require.context("../../../assets/img/icons");

export default class InformesAnuales extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Transparencia" subTitle="Informes Anuales" />
        <div className="w-100 mt-3 Content__grid">
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
