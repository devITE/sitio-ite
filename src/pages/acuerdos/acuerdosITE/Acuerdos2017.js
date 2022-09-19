/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { dataAcuerdos2017 } from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "../Acuerdos.css";

const Acuerdos__imgpath = require.context("../../../img/imgA");

let mes = "";
export default class Acuerdos2017 extends Component {
  render() {
    return (
      <div>
        <div className="bottom_title">
          <img
            src={Acuerdos__imgpath(`./h_2017.png`)}
            alt="Acuerdos 2017"
            className="img-fluid w-100 mb-3"
          />
        </div>
        <div className="w-100 AcuerdosITE">
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalene">
              <img
                src={Acuerdos__imgpath(`./ene.png`)}
                alt="Acuerdos 2017 Enero"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalfeb">
              <img
                src={Acuerdos__imgpath(`./feb.png`)}
                alt="Acuerdos 2017 Febrero"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalmar">
              <img
                src={Acuerdos__imgpath(`./mar.png`)}
                alt="Acuerdos 2017 Marzo"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalabr">
              <img
                src={Acuerdos__imgpath(`./abr.png`)}
                alt="Acuerdos 2017 Abril"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalmay">
              <img
                src={Acuerdos__imgpath(`./may.png`)}
                alt="Acuerdos 2017 Mayo"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modaljun">
              <img
                src={Acuerdos__imgpath(`./jun.png`)}
                alt="Acuerdos 2017 Junio"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modaljul">
              <img
                src={Acuerdos__imgpath(`./jul.png`)}
                alt="Acuerdos 2017 Julio"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalago">
              <img
                src={Acuerdos__imgpath(`./ago.png`)}
                alt="Acuerdos 2017 Agosto"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalsep">
              <img
                src={Acuerdos__imgpath(`./sep.png`)}
                alt="Acuerdos 2017 Septiembre"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modaloct">
              <img
                src={Acuerdos__imgpath(`./oct.png`)}
                alt="Acuerdos 2017 Octubre"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalnov">
              <img
                src={Acuerdos__imgpath(`./nov.png`)}
                alt="Acuerdos 2017 Noviembre"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
          <div>
            <a href="#modal" data-toggle="modaldic">
              <img
                src={Acuerdos__imgpath(`./dic.png`)}
                alt="Acuerdos 2017 Diciembre"
                className="img-fluid AcuerdosITE_link"
              />
            </a>
          </div>
        </div>
        <div>
          {dataAcuerdos2017.map((acuerdo) => {
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
                        {dataAcuerdos2017
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
