import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";

const OIC__imgpath = require.context("../../../assets");
// import moduleName from '../../../assets/video/OIC';
export default class DeclaracionPatrimonial extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title mb-3">
          Órgano Interno de Control - Declaración Patrimonial
        </div>
        <p className="text-justify">
          Para poder presentar la Declaración de Situación Patrimonial es
          necesario ingresar a la liga
        </p>
        <a
          className="btn btn-outline-danger"
          href="https://pdetlax.ddns.net/"
          target="_blank"
        >
          Sistema Anticorrupción
        </a>
        <p className="text-justify">
          Si tiene alguna duda sobre como realizar la Declaración de Situación
          Patrimonial, a continuación dejamos un video tutorial explicando el
          paso a paso del procedimiento.
        </p>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            src={OIC__imgpath(`./${"vide/OIC"}${"1.mp4"}`)}
          ></iframe>
        </div>
        <p>Existen diferentes tipos de Declaraciones de Situación Patrimonial, si quiere saber más al respecto, dejamos una infografía con información de utilidad</p>
        <img className="img-fluid w-75 mx-auto" src={OIC__imgpath(`./${"img/OIC"}${"1.mp4"}`)} alt="Tipos de Declaraciones de Situación Patrimonial" />

      </div>
    );
  }
}
