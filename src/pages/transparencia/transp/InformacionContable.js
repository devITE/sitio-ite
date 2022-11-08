import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faClipboardCheck,
  faBriefcase,
  faBook,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

const Transparencia_pdfpath = require.context(
  "../../../assets/pdf/transparencia/infContable"
);

export default class InformacionContable extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Transparencia" subTitle="Información Contable" />
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faClipboard} className="me-3 fs-3" />
          Inventario de Bienes Muebles e Inmuebles
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
          <FontAwesomeIcon icon={faClipboardCheck} className="me-3 fs-3" />
          Condiciones de permisos, Concesiones o Licencias
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
          Lista de Viáticos, Gastos de Representación
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
          {/* <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
          Cuenta Pública
          <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2014
            <a
              className="btn btn-danger ms-3"
              href={Transparencia_pdfpath(`./${"cuentaPub/"}${"1.pdf"}`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
          <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2015
            <a
              className="btn btn-danger ms-3"
              href={Transparencia_pdfpath(`./${"cuentaPub/"}${"2.pdf"}`)}
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div> */}
          {/* <div className="InformacionFinanciera__content ms-5"> */}
          {/* <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2016
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2016 1er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2016/"}${"1.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2016 2do. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2016/"}${"2.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2016 3er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2016/"}${"3.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2016 4to. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2016/"}${"4.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div> */}
          {/* </div> */}
          {/* <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2017
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2017 1er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2017/"}${"1.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2017 2do. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2017/"}${"2.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2017 3er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2017/"}${"3.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2017 4to. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2017/"}${"4.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div> */}
          <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2018
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2018 1er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2018/"}${"1.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2018 2do. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2018/"}${"2.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2018 3er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2018/"}${"3.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2018 4to. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2018/"}${"4.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
          <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2019
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2019 1er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2019/"}${"1.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2019 2do. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2019/"}${"2.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2019 3er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2019/"}${"3.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2019 4to. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2019/"}${"4.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
          <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2020
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2020 1er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2020/"}${"1.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2020 2do. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2020/"}${"2.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2020 3er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2020/"}${"3.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2020 4to. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2020/"}${"4.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
          <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2021
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2021 1er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2021/"}${"1.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2021 2do. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2021/"}${"2.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2021 3er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2021/"}${"3.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2021 4to. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2021/"}${"4.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
          <div className="InformacionFinanciera__content ms-5">
            <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
            Cuenta Pública 2022
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2022 1er. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2022/"}${"1.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
            <div className="InformacionFinanciera__content ms-5">
              <FontAwesomeIcon icon={faBriefcase} className="me-3 fs-3" />
              Cuenta Pública 2022 2do. Trimestre
              <a
                className="btn btn-danger ms-3"
                href={Transparencia_pdfpath(`./${"cuentaPub2022/"}${"2.pdf"}`)}
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faBook} className="me-3 fs-3" />
          Manuales de Organización
          <a
            className="btn btn-danger ms-3"
            href={Transparencia_pdfpath(`./3.pdf`)}
            role="button"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faBook} className="me-3 fs-3" />
          Planes y Programas
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faBook} className="me-3 fs-3" />
          Montos pagados por ayudas y subsidios 2019
          <a
            className="btn btn-danger ms-3"
            href={Transparencia_pdfpath(`./4.pdf`)}
            role="button"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
        <div className="InformacionFinanciera__content">
          <FontAwesomeIcon icon={faClipboardCheck} className="me-3 fs-3" />
          Montos pagados
          <a
            className="btn btn-danger ms-3"
            href={Transparencia_pdfpath(`./5.pdf`)}
            role="button"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
      </div>
    );
  }
}
