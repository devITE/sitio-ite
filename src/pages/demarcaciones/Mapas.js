import React, { Component } from "react";
import ModalDownload from "../../layout/Modal/ModalDownload";
import TitlePages from "../../layout/TitlePages";
import { distLocal, infografias } from "../../data/dataMapas";
import "./Mapas.css";

export default class Mapas extends Component {
  render() {
    return (
      <>
        <TitlePages
          title="Demarcaciones"
          subTitle="Distritación Local Tlaxcala 2022"
        />
        <div className="d-flex align-items-start w-100">
          <div
            className="nav flex-column nav-pills me-3 w-10"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="btn btn-ite active"
              id="v-pills-mapaTLX-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-mapaTLX"
              type="button"
              role="tab"
              aria-controls="v-pills-mapaTLX"
              aria-selected="true"
            >
              Mapa de Tlaxcala
            </button>
            <button
              className="btn btn-ite"
              id="v-pills-mapaXDistLoc-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-mapaXDistLoc"
              type="button"
              role="tab"
              aria-controls="v-pills-mapaXDistLoc"
              aria-selected="false"
            >
              Mapas por Distrito Local
            </button>
            <button
              className="btn btn-ite"
              id="v-pills-infografias-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-infografias"
              type="button"
              role="tab"
              aria-controls="v-pills-infografias"
              aria-selected="false"
            >
              Infografías
            </button>
          </div>
          <div className="tab-content w-90" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-mapaTLX"
              role="tabpanel"
              aria-labelledby="v-pills-mapaTLX-tab"
              tabIndex="0"
            >
              <div className="hover-ite">
                <a
                  href="/#"
                  rel="noreferrer"
                  data-bs-toggle="modal"
                  data-bs-target="#mapaTLX"
                >
                  <img
                    src="https://itetlax.org.mx/assets/img/imgDemA/12.png"
                    className="img-fluid w-100 mx-auto"
                    alt="Distritación Local Tlaxcala 2022"
                  />
                </a>
                <div className="Mapas__dist-footer bg-ite">
                  Distritación Local Tlaxcala 2022
                </div>
              </div>
              <ModalDownload
                idModal="mapaTLX"
                linkIMG="https://itetlax.org.mx/assets/img/imgDemA/12.png"
                altIMG="Distritación Local Tlaxcala 2022"
                downloadModal="https://itetlax.org.mx/assets/img/imgDemA/12.png"
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-mapaXDistLoc"
              role="tabpanel"
              aria-labelledby="v-pills-mapaXDistLoc-tab"
              tabIndex="0"
            >
              <div className="Grid__three">
                {distLocal.map((mapa) => (
                  <div key={mapa.id} className="hover-ite">
                    <div>
                      <a
                        href="/#"
                        rel="noreferrer"
                        data-bs-toggle="modal"
                        data-bs-target={"#mapaDist" + mapa.id}
                      >
                        <img
                          src={mapa.link}
                          className="img-fluid w-100 mx-auto"
                          alt={mapa.title}
                        />
                      </a>
                    </div>
                    <div className="Mapas__dist-footer bg-ite">
                      Distrito {mapa.id}
                    </div>
                    <ModalDownload
                      idModal={"mapaDist" + mapa.id}
                      linkIMG={mapa.link}
                      altIMG={mapa.title}
                      downloadModal={mapa.link}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-infografias"
              role="tabpanel"
              aria-labelledby="v-pills-infografias-tab"
              tabIndex="0"
            >
              <div className="Grid__three">
                {infografias.map((mapa) => (
                  <div key={mapa.id} className="hover-ite">
                    <div>
                      <a
                        href="/#"
                        rel="noreferrer"
                        data-bs-toggle="modal"
                        data-bs-target={"#mapaDist" + mapa.id}
                      >
                        <img
                          src={mapa.link}
                          className="img-fluid w-100 mx-auto"
                          alt={mapa.title}
                        />
                      </a>
                    </div>
                    <div className="Mapas__dist-footer bg-ite">
                      Distrito {mapa.id}
                    </div>
                    <ModalDownload
                      idModal={"mapaDist" + mapa.id}
                      linkIMG={mapa.link}
                      altIMG={mapa.title}
                      downloadModal={mapa.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
