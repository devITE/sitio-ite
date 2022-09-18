import React, { Component } from "react";
import { dataAcuerdos2016 } from "../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2016 from "../../img/imgA_A/h_2016.png";
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

export default class Acuerdos2016 extends Component {
  render() {
    return (
      <div>
        <div className="bottom_title">
          <img
            src={top2016}
            alt="Acuerdos 2016"
            className="img-fluid w-100 mb-3"
          />
        </div>
        <div className="w-100 AcuerdosAnteriores">
          <div>
            <a data-bs-toggle="modal" data-bs-target="#modalene">
              <img
                src={ene}
                alt="Acuerdos 2016 Enero"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modalfeb" data-toggle="modal">
              <img
                src={feb}
                alt="Acuerdos 2016 Febrero"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modalmar" data-toggle="modal">
              <img
                src={mar}
                alt="Acuerdos 2016 Marzo"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modalabr" data-toggle="modal">
              <img
                src={abr}
                alt="Acuerdos 2016 Abril"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modalmay" data-toggle="modal">
              <img
                src={may}
                alt="Acuerdos 2016 Mayo"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modaljun" data-toggle="modal">
              <img
                src={jun}
                alt="Acuerdos 2016 Junio"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modaljul" data-toggle="modal">
              <img
                src={jul}
                alt="Acuerdos 2016 Julio"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modalago" data-toggle="modal">
              <img
                src={ago}
                alt="Acuerdos 2016 Agosto"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modalsep" data-toggle="modal">
              <img
                src={sep}
                alt="Acuerdos 2016 Septiembre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modaloct" data-toggle="modal">
              <img
                src={oct}
                alt="Acuerdos 2016 Octubre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modalnov" data-toggle="modal">
              <img
                src={nov}
                alt="Acuerdos 2016 Noviembre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
          <div>
            <a href="#modaldic" data-toggle="modal">
              <img
                src={dic}
                alt="Acuerdos 2016 Diciembre"
                className="img-fluid AcuerdosAnteriores_link"
              />
            </a>
          </div>
        </div>
        <div>
          {dataAcuerdos2016.map((acuerdo) => {
            return (
              // <div key={acuerdo.id}>
              //   {"modal" + acuerdo.month.toLowerCase().substring(0, 3)}
              // </div>
              <div
                key={acuerdo.id}
                id={"modal" + acuerdo.month.toLowerCase().substring(0, 3)}
                className="modal fade"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{acuerdo.month}</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <table className="table table-hover table-responsive align-middle">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Acuerdo</th>
                            <th scope="col">File</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">{acuerdo.id}</th>
                            <td>{acuerdo.month}</td>
                            <td>{acuerdo.name}</td>
                            <td>
                              <a
                                className="btn btn-danger"
                                href={acuerdo.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FontAwesomeIcon icon={faFilePdf} />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Close
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
