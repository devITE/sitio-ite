import React, { Component } from "react";
import imagenes from "./img/estructura.png";

export default class Estructura extends Component {
  render() {
    return (
      <div>
        <img src={imagenes} className="img-fluid w-100" alt="Estructura" />
        <hr className="borde" />
        <div className="estilo text-justify">
          Para el ejercicio de sus funciones, el Instituto contará con órganos
          directivos, ejecutivos y de vigilancia, así como con órganos y áreas
          técnicas, y con el personal necesario e idóneo para el cumplimiento de
          sus atribuciones y fines.
        </div>
        <br />
        <div className="morado estilo ms-4">
          Los órganos directivos del Instituto son:
        </div>
        <ol type="I" start="1" className="ms-5">
          <li>
            <div className="style_romano">El Consejo General</div>
          </li>
          <li>
            <div className="style_romano">
              Los Consejos Distritales Electorales;
            </div>
          </li>
          <li>
            <div className="style_romano">
              Los Consejos Municipales Electorales;
            </div>
          </li>
          <li>
            <div className="style_romano">Las Mesas Directivas de Casilla.</div>
          </li>
        </ol>
        <div className="morado estilo ms-4">
          Los órganos ejecutivos del Instituto son:
        </div>
        <ol type="I" start="1" className="ms-5">
          <li>
            <div className="style_romano">
              La Presidencia del Consejo General;
            </div>
          </li>
          <li>
            <div className="style_romano">La Junta General Ejecutiva;</div>
          </li>
          <li>
            <div className="style_romano">La Secretaría Ejecutiva;</div>
          </li>
          <li>
            <div className="style_romano">
              La Dirección de Organización Electoral, Capacitación y Educación
              Cívica;
            </div>
          </li>
          <li>
            <div className="style_romano">
              La Dirección de Prerrogativas, Administración y Fiscalización;
            </div>
          </li>
          <li>
            <div className="style_romano">
              La Dirección de Asuntos Jurídicos;
            </div>
          </li>
          <li>
            <div className="style_romano">La Contraloría General.</div>
          </li>
        </ol>
        <div className="morado estilo ms-4">
          Los órganos de vigilancia del Instituto son:
        </div>
        <ol type="I" start="1" className="ms-5">
          <li>
            <div className="style_romano">
              La Comisión de Prerrogativas, Partidos Políticos, Administración y
              Fiscalización;
            </div>
          </li>
          <li>
            <div className="style_romano">
              La Comisión de Vigilancia del Registro de Electores;
            </div>
          </li>
          <li>
            <div className="style_romano">La Comisión de Gobierno Interno;</div>
          </li>
          <li>
            <div className="style_romano">
              Las demás que acuerde el Consejo General.
            </div>
          </li>
        </ol>
        <div className="morado estilo ms-4">
          Las áreas técnicas del Instituto son:
        </div>
        <ol type="I" start="1" className="ms-5">
          <li>
            <div className="style_romano">De Informática;</div>
          </li>
          <li>
            <div className="style_romano">De Comunicación Social y Prensa;</div>
          </li>
          <li>
            <div className="style_romano">De Consulta Ciudadana;</div>
          </li>
          <li>
            <div className="style_romano">
              De Transparencia y Acceso a la Información.
            </div>
          </li>
        </ol>
      </div>
    );
  }
}