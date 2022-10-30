import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../assets/img/imgT");
const Transparencia_wordpath = require.context(
  "../../../assets/word/transparencia"
);

export default class FormatoSolicitud extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__header-title">
          Formatos de solicitud de información / ARCO
        </div>
        <h3 className="mt-3">Instructivo</h3>
        <ol>
          <li>
            Dar click en la liga para <strong>DESCARGAR</strong> los formatos de
            solicitud de información/derecho ARCO
          </li>
          <li>
            Capturar información en el formato correspondiente y guardar los
            cambios
          </li>
          <li>
            Enviar <strong>FORMATO(s)</strong> a la cuenta de correo:
            transparencia@itetlax.org.mx
          </li>
        </ol>
        <h3>Ligas para descargar</h3>
        <div className="ms-3 mt-2">
          <p>
            Formato de solicitud de información&nbsp;&nbsp;
            <a
              className="btn btn-primary"
              href={Transparencia_wordpath(`./0.docx`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFileWord} />
            </a>
          </p>
          <p>
            Formato de solicitud de ejercicio de Derechos ARCO&nbsp;&nbsp;
            <a
              className="btn btn-primary"
              href={Transparencia_wordpath(`./1.docx`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFileWord} />
            </a>
          </p>
        </div>
      </div>
    );
  }
}
