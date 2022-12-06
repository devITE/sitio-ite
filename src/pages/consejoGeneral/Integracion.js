import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

const pdf_estructura = require.context("../../assets/pdf/CG/");
const Integracion__path = require.context("../../assets");
export default class Integracion extends Component {
  render() {
    return (
      <>
        <TitlePages title="Integración" subTitle="" />
        <div className="mt-3 mb-3 d-flex align-items-start w-100">
          <div
            className="nav flex-column nav-pills me-3 w-25"
            id="vPillsContenidoRegistro"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="btn btn-ite"
              id="vPillsRegistroCandidaturas2010Tab"
              data-bs-toggle="pill"
              data-bs-target="#vPillsRegistroCandidaturas2010"
              type="button"
              role="tab"
              aria-controls="vPillsRegistroCandidaturas2010"
              aria-selected="true"
            >
              Integración
            </button>
            <button
              className="btn btn-ite"
              id="vPillsRegistroCandidaturas2013Tab"
              data-bs-toggle="pill"
              data-bs-target="#vPillsRegistroCandidaturas2013"
              type="button"
              role="tab"
              aria-controls="vPillsRegistroCandidaturas2013"
              aria-selected="false"
            >
              Representantes de los Partidos Politicos
            </button>
          </div>
          <div className="tab-content w-75" id="vPillsContenidoRegistroContent">
            <div
              className="tab-pane fade show active"
              id="vPillsRegistroCandidaturas2010"
              role="tabpanel"
              aria-labelledby="vPillsRegistroCandidaturas2010Tab"
            >
              <div className="w-100 PRUEBA">
                <div>
                  <a
                    href={pdf_estructura(`./${"8.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"8.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="presidenta"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={pdf_estructura(`./${"5.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"5.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="erika"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={pdf_estructura(`./${"4.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"4.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="aldave"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={pdf_estructura(`./${"6.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"6.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="juan carlos"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href={pdf_estructura(`./${"7.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"7.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="secretario"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href={pdf_estructura(`./${"1.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"1.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="janet"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href={pdf_estructura(`./${"2.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"2.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="yedith"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href={pdf_estructura(`./${"3.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intCG/"}${"3.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="neria"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="vPillsRegistroCandidaturas2013"
              role="tabpanel"
              aria-labelledby="vPillsRegistroCandidaturas2013Tab"
            >
              <div className="w-100 PRUEBA">
                <div>
                  <a
                    href={"https://www.pantlaxcala.org.mx/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Integracion__path(`./${"img/intPP/"}${"1.jpg"}`)}
                      className="img-fluid Integracion__item"
                      alt="pan"
                    />
                  </a>
                </div>

                <a
                  href={"https://pritlaxcala.org.mx/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"2.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="pri"
                  />
                </a>

                <a
                  href={"https://www.prd.org.mx/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"3.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="prd"
                  />
                </a>

                <a
                  href={"http://pttlaxcala.com.mx/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"4.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="pt"
                  />
                </a>

                <a
                  href={"https://partidoverdetlaxcala.org/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"5.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="verde"
                  />
                </a>

                <a
                  href={"https://movimientociudadano.mx/tlaxcala"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"6.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="movimiento ciudadano"
                  />
                </a>
                <a
                  href={"https://www.partidoalianzaciudadanatlax.com/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"7.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="pac"
                  />
                </a>
                <a
                  href={"https://morena.org/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"8.png"}`)}
                    className="img-fluid Integracion__item"
                    alt="morena"
                  />
                </a>
                <a
                  href={"https://www.natlaxcala.mx/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"9.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="nueva alianza"
                  />
                </a>
                <a
                  href={"https://www.redessocialesprogresistas.org/tlaxcala/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"10.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="rsp"
                  />
                </a>
                <a
                  href={"https://www.fuerzapormexicotlx.org/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Integracion__path(`./${"img/intPP/"}${"11.jpg"}`)}
                    className="img-fluid Integracion__item"
                    alt="fuerza x mexico"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
