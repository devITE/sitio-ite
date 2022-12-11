import React, { Component } from "react";
import "./REPS.css";

const REPS__path = require.context("../../assets");

export default class REPS extends Component {
  render() {
    return (
      <div className="REPS">
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
        <ul className="REPS__para-que-sirve">
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
        <div className="mt-5 REPS__header">
          <div>
            <h4 className="REPS__title">
              Registro Estatal de Personas Sancionadas en Materia de Violencia
              Política contra las Mujeres en Razón de Género
            </h4>
          </div>
          <div className="REPS__header-reps-text pt-3 pb-3">
            Fecha de actualización: 25/04/2022
          </div>
        </div>
        <div className="mt-5 row mx-auto text-center text-light REPS__datos-publicos">
          <div className=" col-md-4 p-3 rounded-4">
            Total de Registros: <strong>0</strong>
          </div>
          <div className="col-md-1"></div>
          <div className=" col-md-3 p-3 rounded-4">DATOS PÚBLICOS</div>
          <div className="col-md-1"></div>
          <div className=" col-md-3 p-3 rounded-4">
            Personas Sancionadas: <strong>0</strong>
          </div>
        </div>
        <div className="mt-5 table-responsive REPS__table-public-data">
          <table className="mb-0 table table-bordered">
            <thead>
              <tr>
                <th className="align-middle" scope="col">
                  Nombre
                </th>
                <th className="align-middle" scope="col">
                  Sexo
                </th>
                <th className="align-middle" scope="col">
                  Cargo desempeñado al momento de la sanción
                </th>
                <th className="align-middle" scope="col">
                  Ámbito Territorial
                </th>
                <th className="align-middle" scope="col">
                  Datos de identificación de la sentencia
                </th>
                <th className="align-middle" scope="col">
                  No. de Expediente
                </th>
                <th className="align-middle" scope="col">
                  Autoridad que la emite
                </th>
                <th className="align-middle" scope="col">
                  Conducta por la que se ejerció violencia
                </th>
                <th className="align-middle" scope="col">
                  Fecha de sentencia
                </th>
                <th className="align-middle" scope="col">
                  Sanción
                </th>
                <th className="align-middle" scope="col">
                  Permanencia en el registro
                </th>
                <th className="align-middle" scope="col">
                  Reincidencia de la conducta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-0 mb-5 REPS__sentencia"> SENTENCIA </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#disabled-tab-pane"
              type="button"
              role="tab"
              aria-controls="disabled-tab-pane"
              aria-selected="false"
              disabled
            >
              Disabled
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="disabled-tab-pane"
            role="tabpanel"
            aria-labelledby="disabled-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    );
  }
}
