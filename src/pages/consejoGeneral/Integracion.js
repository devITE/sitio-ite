import React, { Component } from "react";
import imagenes from "./img/integracion.jpg";
import imagenes1 from "./img/presi.jpg";
import imagenes2 from "./img/erika.jpg";
import imagenes3 from "./img/aldave.jpg";
import imagenes4 from "./img/jc.jpg";
import imagenes5 from "./img/secretario.jpg";
import imagenes6 from "./img/janet.jpg";
import imagenes7 from "./img/yedith.jpg";
import imagenes8 from "./img/neria.jpg";
import imagenes9 from "./img/PAN.jpg";
import imagenes10 from "./img/PRI.jpg";
import imagenes11 from "./img/PRD.jpg";
import imagenes12 from "./img/PT.jpg";
import imagenes13 from "./img/VERDE.jpg";
import imagenes14 from "./img/MOVIMIENTO CIUDADANO.jpg";
import imagenes15 from "./img/PAC.jpg";
import imagenes16 from "./img/morena.png";
import imagenes17 from "./img/NUEVA ALIANZA.jpg";
import imagenes18 from "./img/RSP.jpg";
import imagenes19 from "./img/FXM.jpg";
const pdf_estructura = require.context("../../assets/pdf/CG/");
const pdf_estructura1 = require.context("../../assets/pdf/CG/");
const pdf_estructura2 = require.context("../../assets/pdf/CG/");
const pdf_estructura3 = require.context("../../assets/pdf/CG/");
const pdf_estructura4 = require.context("../../assets/pdf/CG/");
const pdf_estructura5 = require.context("../../assets/pdf/CG/");
const pdf_estructura6 = require.context("../../assets/pdf/CG/");
const pdf_estructura7 = require.context("../../assets/pdf/CG/");
export default class Integracion extends Component {
  render() {
    return (
      <div>
        <img
          src={imagenes}
          className="img-fluid w-100 mx-auto"
          alt="Integración"
        />
        <div className="mt-3 mb-3 d-flex align-items-start w-100">
          <div
            className="nav flex-column nav-pills me-3"
            id="vPillsContenidoRegistro"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
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
              className="nav-link"
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
          <div className="tab-content" id="vPillsContenidoRegistroContent">
            <div
              className="tab-pane fade show active"
              id="vPillsRegistroCandidaturas2010"
              role="tabpanel"
              aria-labelledby="vPillsRegistroCandidaturas2010Tab"
            >
              <div className="w-100 PRUEBA">
                <div className="">
                  <a
                    href={pdf_estructura(`./${"CV_PRESIDENTA_CONSEJERA.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes1}
                      className="img-fluid Integracion__item"
                      alt="presidenta"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    href={pdf_estructura1(`./${"CV_ C ERIKA.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes2}
                      className="img-fluid Integracion__item"
                      alt="erika"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    href={pdf_estructura2(`./${"CV_ C ALDAVE.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes3}
                      className="img-fluid Integracion__item"
                      alt="aldave"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    href={pdf_estructura3(`./${"CV_ C JUAN CARLOS.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes4}
                      className="img-fluid Integracion__item"
                      alt="juan carlos"
                    />
                  </a>
                </div>

                <div className="">
                  <a
                    href={pdf_estructura4(`./${"CV_ SECRETARIO.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes5}
                      className="img-fluid Integracion__item"
                      alt="secretario"
                    />
                  </a>
                </div>

                <div className="">
                  <a
                    href={pdf_estructura5(`./${"01_ CV_ C JANET.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes6}
                      className="img-fluid Integracion__item"
                      alt="janet"
                    />
                  </a>
                </div>

                <div className="">
                  <a
                    href={pdf_estructura6(`./${"02_ CV_ C YEDITH.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes7}
                      className="img-fluid Integracion__item"
                      alt="yedith"
                    />
                  </a>
                </div>

                <div className="">
                  <a
                    href={pdf_estructura7(`./${"03_ CV_ C HERMENEGILDO.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes8}
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
                <div className="">
                  <a
                    href={"https://www.pantlaxcala.org.mx/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={imagenes9}
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
                    src={imagenes10}
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
                    src={imagenes11}
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
                    src={imagenes12}
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
                    src={imagenes13}
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
                    src={imagenes14}
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
                    src={imagenes15}
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
                    src={imagenes16}
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
                    src={imagenes17}
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
                    src={imagenes18}
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
                    src={imagenes19}
                    className="img-fluid Integracion__item"
                    alt="fuerza x mexico"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
