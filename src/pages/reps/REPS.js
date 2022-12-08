import React, { Component } from "react";
import "./REPS.css";
const REPS__path = require.context("../../assets");

export default class REPS extends Component {
  render() {
    return (
      <>
        <img
          src={REPS__path(`./${"img/reps/"}${"1.png"}`)}
          alt="Registro Estatal de Personas Sancionadas en Materia de Violencia Política Contra las Mujeres en Razón de Género"
          className="img-fluid w-100"
        />
        <div className="mt-5 w-100 REPS__header">
          <div>
            <img
              src={REPS__path(`./${"img/reps/"}${"2.png"}`)}
              alt="¿Qué es?"
              className="img-fluid w-100"
            />
          </div>
          <div>
            <h4 className="REPS__title">
              ¿QUÉ ES EL REGISTRO ESTATAL DE PERSONAS SANCIONADAS?
            </h4>
          </div>
        </div>
        <h4 className="REPS__title-dotter">ESTE REGISTRO CONTRIBUYE A:</h4>
        <ul class="REPS__para-que-sirve">
          <li> Inhibir este tipo de violencia.</li>
          <li>
            Concretar la reforma de 2020 sobre violencia política en razón de
            género.
          </li>
          <li>
            Facilitar la cooperación entre instituciones para la generación de
            información.
          </li>
          <li> Consultar la información previo al registro de candidaturas </li>
          <ul>
            <li>
              El Decreto 209 del Congreso del Estado estableció como requisito
              de elegibilidad para todos los cargos de elección popular, no
              estar condenada o condenado por el delito de violencia política
              contra las mujeres en razón de género (Ley de Instituciones y
              Procedimientos Electorales para el Estado de Tlaxcala, Artículo 17
              fracción II).
            </li>
          </ul>
        </ul>
      </>
    );
  }
}
