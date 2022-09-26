import React, { Component } from "react";
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

const Transparencia_imppath = require.context("../../../img/imgT");
const Transparencia_pdfpath = require.context(
  "../../../assets/pdf/transparencia/infContable"
);
export default class InformacionFinanciera extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__header-title">
          Información Financiera
        </div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
