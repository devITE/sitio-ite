import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

export default class FormatoSolicitud extends Component {
  render() {
    return (
      <div>
        <TitlePages
          title="Transparencia"
          subTitle="Formato de solicitud de infomación / ARCO"
        />
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
              href="https://itetlax.org.mx/assets/word/transparencia/1.docx"
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
              href="https://itetlax.org.mx/assets/word/transparencia/2.docx"
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
