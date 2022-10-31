import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";

export default class Normatividad extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title mb-3">Normatividad</div>
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="btn btn-ite active"
              id="v-pills-lFederales-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-lFederales"
              type="button"
              role="tab"
              aria-controls="v-pills-lFederales"
              aria-selected="true"
            >
              Leyes Federales
            </button>
            <button
              className="btn btn-ite"
              id="v-pills-lEstatales-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-lEstatales"
              type="button"
              role="tab"
              aria-controls="v-pills-lEstatales"
              aria-selected="false"
            >
              Leyes Estatales
            </button>
            <button
              className="btn btn-ite"
              id="v-pills-reglamentos-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-reglamentos"
              type="button"
              role="tab"
              aria-controls="v-pills-reglamentos"
              aria-selected="false"
            >
              Reglamentos
            </button>
            <button
              className="btn btn-ite"
              id="v-pills-compendio-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-compendio"
              type="button"
              role="tab"
              aria-controls="v-pills-compendio"
              aria-selected="false"
            >
              Compendio Legislativo Electoral
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-lFederales"
              role="tabpanel"
              aria-labelledby="v-pills-lFederales-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-lEstatales"
              role="tabpanel"
              aria-labelledby="v-pills-lEstatales-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-reglamentos"
              role="tabpanel"
              aria-labelledby="v-pills-reglamentos-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-compendio"
              role="tabpanel"
              aria-labelledby="v-pills-compendio-tab"
              tabIndex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    );
  }
}
