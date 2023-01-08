import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

const Integracion__path = require.context("../../assets");

export default class Integracion extends Component {
  render() {
    return (
      <>
        <TitlePages title="Integración" subTitle="" />
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="btn btn-ite active"
              id="v-pills-integracion-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-integracion"
              type="button"
              role="tab"
              aria-controls="v-pills-integracion"
              aria-selected="true"
            >
              Integración
            </button>
            <button
              className="btn btn-ite"
              id="v-pills-pp-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-pp"
              type="button"
              role="tab"
              aria-controls="v-pills-pp"
              aria-selected="false"
            >
              Representantes de los Partidos Políticos
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-integracion"
              role="tabpanel"
              aria-labelledby="v-pills-integracion-tab"
              tabIndex="0"
            >
              <div className="w-100 Grid__four">
                <div>
                  <a
                    href={Integracion__path(`./${"pdf/CG/"}${"1.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/1.jpg"
                      className="img-fluid hover-ite"
                      alt="Presidencia"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={Integracion__path(`./${"pdf/CG/"}${"2.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/2.jpg"
                      className="img-fluid hover-ite"
                      alt="Consejera Electoral Erika Periañez Rodríguez"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={Integracion__path(`./${"pdf/CG/"}${"3.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/3.jpg"
                      className="img-fluid hover-ite"
                      alt="Consejero Electoral Edgar Alfonso Aldave Aguilar"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={Integracion__path(`./${"pdf/CG/"}${"4.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/4.jpg"
                      className="img-fluid hover-ite"
                      alt="Consejera Electoral Janet Cervante Ahuatzi"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={Integracion__path(`./${"pdf/CG/"}${"5.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/5.jpg"
                      className="img-fluid hover-ite"
                      alt="Consejero Electoral Hermenegildo Neria Carreño"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={Integracion__path(`./${"pdf/CG/"}${"6.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/6.jpg"
                      className="img-fluid hover-ite"
                      alt="Consejera Electoral Yedith Martínez Pinillo"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={Integracion__path(`./${"pdf/CG/"}${"7.pdf"}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/7.jpg"
                      className="img-fluid hover-ite"
                      alt="Secretaria Ejecutiva"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-pp"
              role="tabpanel"
              aria-labelledby="v-pills-pp-tab"
              tabIndex="0"
            >
              <div className="w-100 Grid__four">
                <div>
                  <a
                    href={"https://www.pantlaxcala.org.mx/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/1.jpg"
                      className="img-fluid hover-ite"
                      alt="pan"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://pritlaxcala.org.mx/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/2.jpg"
                      className="img-fluid hover-ite"
                      alt="pri"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://www.prd.org.mx/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/3.jpg"
                      className="img-fluid hover-ite"
                      alt="prd"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"http://pttlaxcala.com.mx/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/4.jpg"
                      className="img-fluid hover-ite"
                      alt="pt"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://partidoverdetlaxcala.org/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/5.jpg"
                      className="img-fluid hover-ite"
                      alt="verde"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://movimientociudadano.mx/tlaxcala"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/6.jpg"
                      className="img-fluid hover-ite"
                      alt="movimiento ciudadano"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://www.partidoalianzaciudadanatlax.com/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/7.jpg"
                      className="img-fluid hover-ite"
                      alt="pac"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://morena.org/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/8.png"
                      className="img-fluid hover-ite"
                      alt="morena"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://www.natlaxcala.mx/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/9.jpg"
                      className="img-fluid hover-ite"
                      alt="nueva alianza"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href={"https://www.redessocialesprogresistas.org/tlaxcala/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/10.jpg"
                      className="img-fluid hover-ite"
                      alt="rsp"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://www.fuerzapormexicotlx.org/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://itetlax.org.mx/assets/img/intPP/11.jpg"
                      className="img-fluid hover-ite"
                      alt="fuerza x mexico"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
