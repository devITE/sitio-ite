import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faList,
  faCopy,
  faChartPie,
  faChartBar,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

const Transparencia_pdfpath = require.context(
  "../../../assets/pdf/transparencia/infFinanciera"
);

export default class InformacionFinanciera extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Información Financiera" />
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faDollar} className="me-3 fs-3" />
          Remuneración Mensual
          <a
            className="btn btn-danger ms-3"
            href={Transparencia_pdfpath(`./1.pdf`)}
            role="button"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faList} className="me-3 fs-3" />
          Padrón de Proveedores
          <a
            className="btn btn-danger ms-3"
            href={Transparencia_pdfpath(`./2.pdf`)}
            role="button"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faCopy} className="me-3 fs-3" />
          Contratos
          {/* <a
            className="btn btn-danger m-3"
            href={Transparencia_pdfpath(`./1.pdf`)}
            role="button"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a> */}
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faChartPie} className="me-3 fs-3" />
          Presupuesto de egresos aprobado
          <div clasName="InformacionFinanciera__content-item">
            Presupuesto Firmado 2016
            <a
              className="btn btn-danger ms-3 mt-2"
              href={Transparencia_pdfpath(`./3.pdf`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
          <div clasName="InformacionFinanciera__content-item">
            Acuerdo Adecuación Presupuesto ITE-CG 03-2016 20-Enero-2016
            <a
              className="btn btn-danger ms-3 mt-2"
              href={Transparencia_pdfpath(`./4.pdf`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
          <div clasName="InformacionFinanciera__content-item">
            Acuerdo de Presupuesto de Egresos 2016 ITE-CG 08-2015
            30-Septiembre-2016
            <a
              className="btn btn-danger ms-3 mt-2"
              href={Transparencia_pdfpath(`./5.pdf`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
          <div clasName="InformacionFinanciera__content-item">
            Acuerdo de Presupuesto de Egresos 2016 ITE-CG 08-2015
            30-Septiembre-2016
            <a
              className="btn btn-danger ms-3 mt-2"
              href={Transparencia_pdfpath(`./6.pdf`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faChartBar} className="me-3 fs-3" />
          Balance general, estado de ingresos y egresos
          <div clasName="InformacionFinanciera__content-item">
            Balance General
            <a
              className="btn btn-danger ms-3 mt-2"
              href={Transparencia_pdfpath(`./7.pdf`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
          <div clasName="InformacionFinanciera__content-item">
            Estado de Egresos e Ingresos
            <a
              className="btn btn-danger ms-3 mt-2"
              href={Transparencia_pdfpath(`./8.pdf`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
