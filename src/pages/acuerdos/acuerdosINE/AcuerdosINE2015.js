import React, { Component } from "react";
import { dataAcuerdosINE2015 } from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2015 from "../../../img/imgA/INE_2015.png";
import folder from "../../../img/imgA/folder.png";

let idAcuerdoINE = "";

export default class AcuerdosINE2015 extends Component {
  render() {
    return (
      <div>
        <img
          src={top2015}
          alt="Acuerdos 2015"
          className="img-fluid w-100 mb-5"
        />
        <div className="w-100 AcuerdosINE">
          {dataAcuerdosINE2015.map((acuerdo) => {
            return (
              <div key={acuerdo.id}>
                <a data-bs-toggle="modal" data-bs-target={"#" + acuerdo.modal}>
                  <img
                    src={folder}
                    alt={"Acuerdos INE " + acuerdo.year}
                    className="img-fluid AcuerdosAnteriores_link"
                  />
                </a>
                <p className="mt-2">
                  {acuerdo.idAcuerdo} {acuerdo.numberAcuerdo}
                  <br />
                  {acuerdo.nameAcuerdo}
                </p>
              </div>
            );
          })}
        </div>
        {/*  */}
        {dataAcuerdosINE2015.map((acuerdo) => {
          return (
            <div
              key={acuerdo.id}
              id={acuerdo.modal}
              {...(idAcuerdoINE = acuerdo.id)}
              className="modal fade"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header Modal__header">
                    <h5 className="modal-title">
                      <strong>{acuerdo.numberAcuerdo}</strong>
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {dataAcuerdosINE2015
                      .filter((item) => item.id === idAcuerdoINE)
                      .map(
                        ({
                          id,
                          nameAcuerdo,
                          linkAcuerdo,
                          nameOficio,
                          linkOficio,
                        }) => {
                          return (
                            <ol
                              key={id}
                              className="list-group list-group-numbered"
                            >
                              {console.log("id: ", id)}
                              <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                  <div className="fw-bold"> {nameAcuerdo}</div>
                                </div>
                                <a
                                  href={linkAcuerdo}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FontAwesomeIcon
                                    icon={faFilePdf}
                                    className="btn btn-danger ms-3"
                                  />
                                </a>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                  <div className="fw-bold"> {nameOficio}</div>
                                </div>
                                <a
                                  href={linkOficio}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FontAwesomeIcon
                                    icon={faFilePdf}
                                    className="btn btn-danger ms-3"
                                  />
                                </a>
                              </li>
                            </ol>
                          );
                        }
                      )}
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
    );
  }
}
