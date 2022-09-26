import React, { Component } from "react";
import { dataConvenios } from "../../assets/data/dataTransparenciaConvenios";

import "./Transparencia.css";

const Transparencia_imppath = require.context("../../img/imgT");
const icons_imgpath = require.context("../../img/icons");

// import second from '../../img/icons'

export default class Convenios extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__header-title">Convenios</div>
        <div className="w-100 mt-3 Transparencia__contenido">
          {dataConvenios.map((convenio) => {
            return (
              <div key={convenio.id}>
                <a href={convenio.url} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid "
                    src={icons_imgpath(`./2.png`)}
                    alt={"Convenio con " + convenio.title}
                  />
                </a>
                <p className="mt-2">Convenio con {convenio.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
