import React, { Component } from "react";
import { dataAvisosPrivacidad } from "../../../assets/data/dataTransparenciaAvisosPrivacidad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../img/imgT");

export default class AvisosPrivacidad extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__header-title">
          Avisos de Privacidad
        </div>
        <div className="mt-3 accordion" id="accordionExample">
          {dataAvisosPrivacidad.map((aviso) => {
            return (
              <div key={aviso.id} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + aviso.idGroup}
                    aria-expanded="false"
                    aria-controls={aviso.idGroup}
                  >
                    {aviso.titleGroup}
                  </button>
                </h2>
                <div
                  id={aviso.idGroup}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ol className="list-group">
                      {aviso.avisoIntegral === "" ? (
                        <span></span>
                      ) : (
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div>
                              <strong>Aviso Integral: </strong>
                              {aviso.avisoIntegral}
                            </div>
                          </div>
                          <a
                            href={aviso.linkAvisoIntegral}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="badge bg-danger">
                              <FontAwesomeIcon icon={faFilePdf} />
                            </span>
                          </a>
                        </li>
                      )}
                      {aviso.avisoSimplificado === "" ? (
                        <span></span>
                      ) : (
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div>
                              <strong>Aviso Simplificado: </strong>
                              {aviso.avisoSimplificado}
                            </div>
                          </div>
                          <a
                            href={aviso.linkAvisoSimplificado}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="badge bg-danger">
                              <FontAwesomeIcon icon={faFilePdf} />
                            </span>
                          </a>
                        </li>
                      )}
                      {aviso.avisoCorto === "" ? (
                        <span></span>
                      ) : (
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div>
                              <strong>Aviso Corto: </strong>
                              {aviso.avisoCorto}
                            </div>
                          </div>
                          <a
                            href={aviso.linkAvisoCorto}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="badge bg-danger">
                              <FontAwesomeIcon icon={faFilePdf} />
                            </span>
                          </a>
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
