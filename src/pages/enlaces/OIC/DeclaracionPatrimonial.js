// eslint-disable-next-line
import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";

const OIC__imgpath = require.context("../../../assets");

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
          rel="noreferrer"
        >
          Sistema Anticorrupción
        </a>
        <p className="text-justify mt-5">
          Si tiene alguna duda sobre como realizar la Declaración de Situación
          Patrimonial, a continuación dejamos un video tutorial explicando el
          paso a paso del procedimiento.
        </p>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            id="videoOIC"
            src={OIC__imgpath(`./${"video/OIC/"}${"1.mp4"}`)}
            title="Declaraciones Patrimoniales"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-justify mt-5">
          Existen diferentes tipos de Declaraciones de Situación Patrimonial, si
          quiere saber más al respecto, dejamos una infografía con información
          de utilidad
        </p>
        <div className="w-100">
          <img
            className="img-fluid w-50"
            src={OIC__imgpath(`./${"img/OIC/"}${"2.jpg"}`)}
            alt="Tipos de Declaraciones de Situación Patrimonial"
          />
        </div>
      </div>
    );
  }
}
