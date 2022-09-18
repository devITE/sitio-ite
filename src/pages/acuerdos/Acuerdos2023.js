import React, { Component } from "react";
import { dataAcuerdos2023 } from "../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2023 from "../../img/imgA_A/h_2023.png";
import ene from "../../img/imgA_A/ene.png";
import feb from "../../img/imgA_A/feb.png";
import mar from "../../img/imgA_A/mar.png";
import abr from "../../img/imgA_A/abr.png";
import may from "../../img/imgA_A/may.png";
import jun from "../../img/imgA_A/jun.png";
import jul from "../../img/imgA_A/jul.png";
import ago from "../../img/imgA_A/ago.png";
import sep from "../../img/imgA_A/sep.png";
import oct from "../../img/imgA_A/oct.png";
import nov from "../../img/imgA_A/nov.png";
import dic from "../../img/imgA_A/dic.png";
import "./Acuerdos.css";

let mes = "";
export default class Acuerdos2023 extends Component {
  render() {
    return (
      <div>
        <div className="bottom_title">
          <img
            src={top2023}
            alt="Acuerdos 2023"
            className="img-fluid w-100 mb-3"
          />
        </div>
        <div className="w-100 AcuerdosAnteriores">
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalene">
              <img
                src={ene}
                alt="Acuerdos 2023 Enero"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalfeb">
              <img
                src={feb}
                alt="Acuerdos 2023 Febrero"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalmar">
              <img
                src={mar}
                alt="Acuerdos 2023 Marzo"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalabr">
              <img
                src={abr}
                alt="Acuerdos 2023 Abril"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalmay">
              <img
                src={may}
                alt="Acuerdos 2023 Mayo"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modaljun">
              <img
                src={jun}
                alt="Acuerdos 2023 Junio"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modaljul">
              <img
                src={jul}
                alt="Acuerdos 2023 Julio"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalago">
              <img
                src={ago}
                alt="Acuerdos 2023 Agosto"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalsep">
              <img
                src={sep}
                alt="Acuerdos 2023 Septiembre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modaloct">
              <img
                src={oct}
                alt="Acuerdos 2023 Octubre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalnov">
              <img
                src={nov}
                alt="Acuerdos 2023 Noviembre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modal" data-toggle="modaldic">
              <img
                src={dic}
                alt="Acuerdos 2023 Diciembre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
        </div>
        <div>
          {dataAcuerdos2023.map((acuerdo) => {
            return (
              <div
                key={acuerdo.id}
                id={"modal" + acuerdo.month.toLowerCase().substring(0, 3)}
                // {...console.log("aaaa:-", (mes = acuerdo.month))}
                {...(mes = acuerdo.month)}
                className="modal fade"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header Modal__header">
                      <h5 className="modal-title">
                        <strong>{acuerdo.month}</strong>
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <ol className="list-group list-group-numbered">
                        {dataAcuerdos2023
                          .filter((item) => item.month === mes)
                          .map(({ id, name, link }) => {
                            return (
                              <li
                                key={id}
                                className="list-group-item d-flex justify-content-between align-items-start"
                              >
                                <div className="ms-2 me-auto">
                                  <div className="fw-bold"> {name}</div>
                                </div>
                                <a href={link} target="_blank" rel="noreferrer">
                                  <FontAwesomeIcon
                                    icon={faFilePdf}
                                    className="btn btn-danger ms-3"
                                  />
                                </a>
                              </li>
                            );
                          })}
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
            );
          })}
        </div>
      </div>
    );
  }
}
