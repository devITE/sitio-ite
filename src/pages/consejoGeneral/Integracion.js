import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import "./Integracion.css";

const Integración = () => {
  useEffect(() => {
    document.title = `ITE - Integración`;
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
            <div className="w-100 Grid__four">
              {/* PRESIDENTE */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className="p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/Emmanuel.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Emmanuel Ávila González"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Consejero Presidente</p>
                    <p className="text__Nombre">
                      Lic. Emmanuel Ávila <br />
                      González
                    </p>
                  </div>
                </div>
              </a>
              {/* SECRETARIA */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/8.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className=" p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/Elizabeth.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Elizabeth Vázquez Alonso"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Secretaria Ejecutiva</p>
                    <p className="text__Nombre">
                      Mtra. Elizabeth Vázquez Alonso
                    </p>
                  </div>
                </div>
              </a>
              {/* ERIKA */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className=" p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/Erika.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Erika Periañez Rodríguez"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Consejera Electoral</p>
                    <p className="text__Nombre">
                      Lic. Erika Periañez Rodríguez
                    </p>
                  </div>
                </div>
              </a>
              {/* ALDAVE */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/3.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className=" p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/Aldave.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Edgar Alfonso Aldave Aguilar"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Consejero Electoral </p>
                    <p className="text__Nombre">
                      Lic. Edgar Alfonso Aldave Aguilar
                    </p>
                  </div>
                </div>
              </a>
              {/* JANET */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/4.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className=" p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/Janet.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Janet Cervante Ahuatzi"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Consejera Electoral</p>
                    <p className="text__Nombre">Lic. Janet Cervante Ahuatzi</p>
                  </div>
                </div>
              </a>
              {/* HERMENEGILDO */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/5.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className=" p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/Neria.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Hermenegildo Neria Carreño"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Consejero Electoral</p>
                    <p className="text__Nombre">
                      Lic. Hermenegildo Neria Carreño
                    </p>
                  </div>
                </div>
              </a>
              {/* YEDITH */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/6.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className=" p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/Yedith.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Yedith Martínez Pinillo"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Consejera Electoral</p>
                    <p className="text__Nombre">
                      Lic. Yedith Martínez <br />
                      Pinillo
                    </p>
                  </div>
                </div>
              </a>
              {/* JUAN */}
              <a
                href="https://itetlax.org.mx/assets/pdf/CG/7.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card hover-ite shadow_card">
                  <div className=" p-auto card-body background_Body rounded_Sup">
                    <img
                      src="https://itetlax.org.mx/assets/img/consejeros/JuanCarlos.png"
                      className="shadow_img rounded img-fluid shadow_img"
                      alt="Secretaria Ejecutiva"
                    />
                  </div>
                  <div className="card-footer background_Foot">
                    <p className="text__Cargo">Consejero Electoral</p>
                    <p className="text__Nombre">
                      Mtro. Juan Carlos Minor Marquez
                    </p>
                  </div>
                </div>
              </a>
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
