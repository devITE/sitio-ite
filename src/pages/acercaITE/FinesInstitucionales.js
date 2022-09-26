import React, { Component } from "react";
import "./FinesInstitucionales.css";
import imagenes from "./img/fines.jpg";
export default class FinesInstitucionales extends Component {
  render() {
    return (
      <div>
        <img
          src={imagenes}
          className="img-fluid w-100"
          alt="Fines Institucionales"
        />
        <hr className="borde" />
        <h6 className="text-justify">
          La Ley de Instituciones y Procedimientos Electorales para el Estado de
          Tlaxcala establece como fines institucionales los siguientes:
        </h6>

        <ol type="I" start="1">
          <li>
            <div className="text-justify">
              Contribuir al desarrollo de la vida democrática de los ciudadanos
              residentes en el Estado.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Promover, fomentar y preservar el fortalecimiento democrático del
              sistema de partidos políticos y la participación electoral de los
              candidatos independientes.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Promover, fomentar y preservar el ejercicio de los derechos
              político-electorales y la vigilancia en el cumplimiento de sus
              obligaciones.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Velar por la autenticidad y efectividad del sufragio.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Garantizar la celebración libre, auténtica y periódica de las
              elecciones para renovar los poderes Legislativo y Ejecutivo, así
              como los ayuntamientos y las presidencias de comunidad.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Velar por la libertad, autenticidad y efectividad del sufragio y
              el voto popular.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Llevar a cabo la promoción del sufragio y el voto.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Difundir la cultura política democrática y la educación cívica.
            </div>
          </li>
          <li>
            <div className="text-justify">
              Difundir, planear, desarrollar y realizar los procesos de consulta
              ciudadana de acuerdo con lo que prescriben la Constitución Local y
              las leyes aplicables.
            </div>
          </li>
        </ol>
      </div>
    );
  }
}
