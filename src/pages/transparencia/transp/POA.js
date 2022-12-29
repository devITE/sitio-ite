import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  dataPOA2018,
  dataPOA2019,
  dataPOA2020,
} from "../../../assets/data/dataTransparenciaPOA";
import "../Transparencia.css";

export default class POA extends Component {
  render() {
    return (
      <>
        <TitlePages
          title="Transparencia"
          subTitle="Programas Operativos Anuales (POA)"
        />
        <div className="mt-3 mb-3 d-flex align-items-start w-100">
          <div
            className="nav flex-column nav-pills me-3 w-25"
            id="vPillsContenidoRegistro"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="btn btn-ite active"
              id="vPillsPOA2018Tab"
              data-bs-toggle="pill"
              data-bs-target="#vPillsPOA2018"
              type="button"
              role="tab"
              aria-controls="vPillsPOA2018"
              aria-selected="true"
            >
              POAS 2018
            </button>
            <button
              className="btn btn-ite"
              id="vPillsPOA2019Tab"
              data-bs-toggle="pill"
              data-bs-target="#vPillsPOA2019"
              type="button"
              role="tab"
              aria-controls="vPillsPOA2019"
              aria-selected="false"
            >
              POAS 2019
            </button>
            <button
              className="btn btn-ite"
              id="vPillsPOA2020Tab"
              data-bs-toggle="pill"
              data-bs-target="#vPillsPOA2020"
              type="button"
              role="tab"
              aria-controls="vPillsPOA2020"
              aria-selected="false"
            >
              POAS 2020
            </button>
          </div>
          <div className="tab-content w-75" id="vPillsPOASContent">
            <div
              className="tab-pane fade show active"
              id="vPillsPOA2018"
              role="tabpanel"
              aria-labelledby="vPillsPOA2018Tab"
            >
              <h2 className="text-center mb-3">
                Programas Operativos Anuales 2018
              </h2>
              <table className="table table-striped table-hover w-100">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {dataPOA2018.map((poa) => {
                    return (
                      <tr key={poa.id}>
                        <th scope="row">{poa.id}</th>
                        <td>{poa.title}</td>
                        <td>
                          <a
                            className="btn btn-danger btn-sm"
                            href={poa.link}
                            target="_blank"
                            role="button"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faFilePdf} />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div
              className="tab-pane fade"
              id="vPillsPOA2019"
              role="tabpanel"
              aria-labelledby="vPillsPOA2019Tab"
            >
              <h2 className="text-center mb-3">
                Programas Operativos Anuales 2019
              </h2>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {dataPOA2019.map((poa) => {
                    return (
                      <tr key={poa.id}>
                        <th scope="row">{poa.id}</th>
                        <td>{poa.title}</td>
                        <td>
                          <a
                            className="btn btn-danger btn-sm"
                            href={poa.link}
                            target="_blank"
                            role="button"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faFilePdf} />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div
              className="tab-pane fade"
              id="vPillsPOA2020"
              role="tabpanel"
              aria-labelledby="vPillsPOA2020Tab"
            >
              <h2 className="text-center mb-3">
                Programas Operativos Anuales 2020
              </h2>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {dataPOA2020.map((poa) => {
                    return (
                      <tr key={poa.id}>
                        <th scope="row">{poa.id}</th>
                        <td>{poa.title}</td>
                        <td>
                          <a
                            className="btn btn-danger btn-sm"
                            href={poa.link}
                            target="_blank"
                            role="button"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faFilePdf} />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
