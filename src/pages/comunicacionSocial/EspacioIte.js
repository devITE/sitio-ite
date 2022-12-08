import React, { Component } from "react";
import imagenes from "../../img/imgcomunicacion/Comunicacion.jpg";
import imagenes1 from "../../img/imgcomunicacion/presidenta.jpg";
import imagenes2 from "../../img/imgcomunicacion/erika.jpg";
import imagenes3 from "../../img/imgcomunicacion/aldave.jpg";
const pdf_estructura = require.context("../../assets/pdf/comunicacion/");
const pdf_estructura1 = require.context("../../assets/pdf/comunicacion/");
const pdf_estructura2 = require.context("../../assets/pdf/comunicacion/");

export default class EspacioIte extends Component {
  render() {
    return (
      <div>
        <img
          src={imagenes}
          className="img-fluid w-100"
          alt="Comunicacion Social"
        />
        <hr className="borde" />
        <h2 className="text-center estilos-cintillo">Epacio ITE.</h2>

        <div className="w-100 espacio-ite">
          <div className="">
            <a
              href={pdf_estructura(`./${"presidenta.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes1}
                className="img-fluid Integracion__item"
                alt="presidenta"
              />
            </a>
          </div>
          <div className="">
              <a
                href={pdf_estructura1(`./${"erika.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={imagenes2}
                  className="img-fluid Integracion__item"
                  alt="presidenta"
                />
              </a>
            </div>
            <div className="">
              <a
                href={pdf_estructura2(`./${"aldave.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={imagenes3}
                  className="img-fluid Integracion__item"
                  alt="presidenta"
                />
              </a>
            </div>
          </div>
        </div>
    );
  }
}
