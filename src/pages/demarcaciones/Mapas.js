import React, { Component } from "react";
import imagenes from "./img/iconomapatlx.png";
import imagenes2 from "./img/mapatlx.png";
import TitlePages from "../../layout/TitlePages";

export default class Mapas extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Mapas" subTitle="Mapa de Tlaxcala" />

        <br />
        <div className="mt-3 mb-3 d-flex align-items-start w-100">
          <div
            className="nav flex-column nav-pills me-3 w-50"
            id="vPillsContenidoRegistro"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className=" active btn-lg btn btn-ite"
              id="vPillsRegistroCandidaturas2010Tab"
              data-bs-toggle="pill"
              data-bs-target="#vPillsRegistroCandidaturas2010"
              type="button"
              role="tab"
              aria-controls="vPillsRegistroCandidaturas2010"
              aria-selected="true"
            >
              <img src={imagenes} className="img-fluid w-100" alt="Mapas" />
            </button>
          </div>
          <div className="tab-content" id="vPillsContenidoRegistroContent">
            <div
              className="tab-pane fade show active"
              id="vPillsRegistroCandidaturas2010"
              role="tabpanel"
              aria-labelledby="vPillsRegistroCandidaturas2010Tab"
            >
              <div
                className="mapas"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={imagenes2}
                  className="img-fluid w-100 mx-auto"
                  alt="Estructura Organica"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Mapa Tlaxcala
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img src={imagenes2} className="img-fluid w-100" alt="Mapas" />
              </div>
              <div className="modal-footer">
                <a href={imagenes2} download={imagenes2}>
                  <button type="button" className="btn btn-primary">
                    Descargar
                  </button>
                </a>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
