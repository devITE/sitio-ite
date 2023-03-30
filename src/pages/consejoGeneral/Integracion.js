import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import "./Integracion.css";

const Integración = () => {
  useEffect(() => {
    document.title = `Integración`;
  }, []);
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
            <div className="w-100 grid-4">
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/1.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Emmanuel Ávila González"
                    />
                  </div>

                  <div>
                    <p>Consejero Presidente</p>
                    <p>
                      Lic. Emmanuel Ávila <br />
                      González
                    </p>
                  </div>
                </a>
              </div>
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/8.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/2.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Elizabeth Vázquez Alonso"
                    />
                  </div>

                  <div>
                    <p>Secretaria Ejecutiva</p>
                    <p>Mtra. Elizabeth Vázquez Alonso</p>
                  </div>
                </a>
              </div>
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/2.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/3.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Erika Periañez Rodríguez"
                    />
                  </div>

                  <div>
                    <p>Consejera Electoral</p>
                    <p>Lic. Erika Periañez Rodríguez</p>
                  </div>
                </a>
              </div>
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/3.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/4.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Edgar Alfonso Aldave Aguilar"
                    />
                  </div>

                  <div>
                    <p>Consejero Electoral </p>
                    <p>Lic. Edgar Alfonso Aldave Aguilar</p>
                  </div>
                </a>
              </div>
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/4.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/5.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Janet Cervante Ahuatzi"
                    />
                  </div>

                  <div>
                    <p>Consejera Electoral</p>
                    <p>Lic. Janet Cervante Ahuatzi</p>
                  </div>
                </a>
              </div>
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/5.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/6.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Hermenegildo Neria Carreño"
                    />
                  </div>

                  <div>
                    <p>Consejero Electoral</p>
                    <p>Lic. Hermenegildo Neria Carreño</p>
                  </div>
                </a>
              </div>
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/6.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/7.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Yedith Martínez Pinillo"
                    />
                  </div>

                  <div>
                    <p>Consejera Electoral</p>
                    <p>
                      Lic. Yedith Martínez <br />
                      Pinillo
                    </p>
                  </div>
                </a>
              </div>
              <div className="rounded grid-4-item bg-secondary bg-opacity-25">
                <a
                  href="https://itetlax.org.mx/assets/pdf/CG/7.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  <div className="bg-ite">
                    <img
                      src="https://itetlax.org.mx/assets/img/intCG/8.png"
                      className="shadow_img rounded img-fluid w-75"
                      alt="Secretaria Ejecutiva"
                    />
                  </div>

                  <div>
                    <p>Consejero Electoral</p>
                    <p>Mtro. Juan Carlos Minor Marquez</p>
                  </div>
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
                  href="https://www.pantlaxcala.org.mx/"
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
                  href="https://pritlaxcala.org.mx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://itetlax.org.mx/assets/img/intPP/2.png"
                    className="img-fluid hover-ite"
                    alt="pri"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.prd.org.mx/"
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
                  href="http://pttlaxcala.com.mx/"
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
                  href="https://partidoverdetlaxcala.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://itetlax.org.mx/assets/img/intPP/5.png"
                    className="img-fluid hover-ite"
                    alt="verde"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://movimientociudadano.mx/tlaxcala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://itetlax.org.mx/assets/img/intPP/6.png"
                    className="img-fluid hover-ite"
                    alt="movimiento ciudadano"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.partidoalianzaciudadanatlax.com/"
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
                <a href="https://morena.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://itetlax.org.mx/assets/img/intPP/8.png"
                    className="img-fluid hover-ite"
                    alt="morena"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.natlaxcala.mx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://itetlax.org.mx/assets/img/intPP/9.png"
                    className="img-fluid hover-ite"
                    alt="nueva alianza"
                  />
                </a>
              </div>

              <div>
                <a
                  href="https://www.redessocialesprogresistas.org/tlaxcala/"
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
                  href="https://www.fuerzapormexicotlx.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://itetlax.org.mx/assets/img/intPP/11.png"
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
};
export default Integración;
