/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Transparencia.css";

const Transparencia_pdfpath = require.context("../../assets/pdf/transparencia");
const Transparencia_imppath = require.context("../../img/imgT");
const icons_imgpath = require.context("../../img/icons");

export default class Transparencia extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Content__grid">
          <div>
            <Link to="/Articulo63">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Art. 63 Obligaciones Comunes"
              />
            </Link>
            <p className="mt-2">Art. 63 Obligaciones Comunes</p>
          </div>
          <div>
            <Link to="/Articulo67">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Art. 67 Obligaciones Específicas"
              />
            </Link>
            <p className="mt-2">Art. 67 Obligaciones Específicas</p>
          </div>
          <div>
            <Link to="/Articulo94">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Art. 94 Obligaciones Específicas"
              />
            </Link>
            <p className="mt-2">Art. 94 Obligaciones Específicas</p>
          </div>
          <div>
            <Link to="/Convenios">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./2.png`)}
                alt="Convenios"
              />
            </Link>
            <p className="mt-2">Convenios</p>
          </div>
          <div>
            <a
              href={Transparencia_pdfpath(`./${"0.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./3.png`)}
                alt="Directorio General"
              />
            </a>
            <p className="mt-2">Directorio General</p>
          </div>
          <div>
            <Link to="/InformesAnuales">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./4.png`)}
                alt="Informes anuales"
              />
            </Link>
            <p className="mt-2">Informes anuales</p>
          </div>
          <div>
            <Link to="/AvisosPrivacidad">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./5.png`)}
                alt="Aviso de privacidad"
              />
            </Link>
            <p className="mt-2">Aviso de privacidad</p>
          </div>
          <div>
            <Link to="/FormatoSolicitud">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./2.png`)}
                alt="Presentar solicitud"
              />
            </Link>
            <p className="mt-2">Presentar solicitud</p>
          </div>
          <div>
            <Link to="/POA">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./6.png`)}
                alt="Programas Operativos Anuales"
              />
            </Link>
            <p className="mt-2">Programas Operativos Anuales</p>
          </div>
          <div>
            <Link to="/InformacionFinanciera">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./7.png`)}
                alt="Información Financiera"
              />
            </Link>
            <p className="mt-2">Información Financiera</p>
          </div>
          <div>
            <Link to="/InformacionContable">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./8.png`)}
                alt="Información Contable"
              />
            </Link>
            <p className="mt-2">Información Contable</p>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalOEFOEL">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Reglamento interior"
              />
            </a>
            <p className="mt-2">Información Jurídica</p>
            <div
              className="modal fade"
              id="modalOEFOEL"
              tabindex="-1"
              aria-labelledby="modalOEFOELLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalOEFOELLabel">
                      Información Jurídica
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ol className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            Organismos Electorales Federales, Organismos
                            Electorales Locales
                          </div>
                        </div>
                        <span className="badge">
                          <a
                            className="btn btn-danger"
                            href={Transparencia_pdfpath(`./2.pdf`)}
                            role="button"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faFilePdf} />
                          </a>
                        </span>
                      </li>
                    </ol>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalReglamentoITE">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./9.png`)}
                alt="Reglamento interior"
              />
            </a>
            <p className="mt-2">Reglamento interior</p>
            <div
              className="modal fade"
              id="modalReglamentoITE"
              tabindex="-1"
              aria-labelledby="modalReglamentoITELabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalReglamentoITELabel">
                      Reglamento interior del ITE
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ol className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            Reglamento Interior del Instituto Tlaxcalteca de
                            Elecciones
                          </div>
                        </div>
                        <span className="badge">
                          <a
                            className="btn btn-danger"
                            href={Transparencia_pdfpath(`./1.pdf`)}
                            role="button"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faFilePdf} />
                          </a>
                        </span>
                      </li>
                    </ol>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./9.png`)}
                alt="Índice de expedientes clasificados como reservados"
              />
            </Link>
            <p className="mt-2">
              Índice de expedientes
              <br />
              clasificados como reservados
            </p>
          </div> */}
        </div>
        <div className="w-100 Transparencia__header mt-5">
          <a
            href="https://www.plataformadetransparencia.org.mx/web/guest/inicio"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-fluid"
              src={Transparencia_imppath(`./pnt.png`)}
              alt="Plataforma Nacional de Transparencia"
            />
          </a>
          <a
            href="http://consultapublicamx.inai.org.mx:8080/vut-web/?idSujetoObigadoParametro=5387&idEntidadParametro=29&idSectorParametro=24"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-fluid"
              src={Transparencia_imppath(`./ot.png`)}
              alt="Obligaciones de Transparencia"
            />
          </a>
        </div>
      </div>
    );
  }
}
