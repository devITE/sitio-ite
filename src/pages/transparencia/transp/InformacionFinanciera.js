import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import Accordion from "../../../layout/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faList,
  faCopy,
  faChartPie,
  faChartBar,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import {
  dataInfFinanciera,
  dataInfo2016,
} from "../../../assets/data/dataTransparencia";
import "../Transparencia.css";

import AccordionV1 from "../../../layout/AccordionV1";
import AccordionV1Item from "../../../layout/AccordionV1Item";

const Transparencia_pdfpath = require.context(
  "../../../assets/pdf/transparencia/infFinanciera"
);

export default class InformacionFinanciera extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Transparencia" subTitle="Información Financiera" />
        <ListBadge ifNumbered={""} listsBadgeItem={dataInfFinanciera} />
        <br />
        <br />
        <AccordionV1 idAccordion="accordionFlushExample">
          <AccordionV1Item
            flushID="uno"
            titleItem="Accordion ITEM #1"
            contentItem="Content Accordion ITEM #1"
          />
          <AccordionV1Item
            flushID="dos"
            titleItem="Accordion ITEM #2"
            contentItem="Content Accordion ITEM #2"
          />
        </AccordionV1>
        <br />
        <br />
        {/*  */}
        <Accordion
          idAccordion="informacion2016"
          accordionData={dataInfo2016}
          contentAccordion={dataInfo2016.map((info2016) => (
            <ListBadge
              key={info2016.id}
              ifNumbered={""}
              listsBadgeItem={info2016.children}
            />
          ))}
        />
        {/*  */}
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faChartPie} className="me-3 fs-3" />
          Presupuesto de egresos aprobado
          <div className="InformacionFinanciera__content-item">
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
          <div className="InformacionFinanciera__content-item">
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
          <div className="InformacionFinanciera__content-item">
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
          <div className="InformacionFinanciera__content-item">
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
          <div className="InformacionFinanciera__content-item">
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
          <div className="InformacionFinanciera__content-item">
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
