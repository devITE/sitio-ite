import React, { useEffect } from "react";
import ModalDownload from "../../layout/Modal/ModalDownload";
import TitlePages from "../../layout/TitlePages";
import { distLocal, intDist, infoRel } from "../../data/dataMapas";
import Breadcrumbs from "../../layout/Breadcrumbs";
import "./Mapas.css";

const MapItem = ({ id, link, title, modalId }) => (
  <div>
    <div className="hover-ite">
      <a
        href="/#"
        rel="noreferrer"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        <img src={link} className="img-fluid w-100 mx-auto" alt={title} />
      </a>
    </div>
    <div className="Mapas__dist-footer bg-ite">{title}</div>
    <ModalDownload
      idModal={modalId}
      linkIMG={link}
      altIMG={title}
      downloadModal={link}
    />
  </div>
);

const Mapas = () => {
  useEffect(() => {
    document.title = `Mapas`;
  }, []);

  return (
    <>
      <Breadcrumbs path={[{ label: "Distritación Local Tlaxcala 2022" }]} />
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
            id="v-pills-intDist-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-intDist"
            type="button"
            role="tab"
            aria-controls="v-pills-intDist"
            aria-selected="false"
          >
            Infografías: Integración de los Distritos Electorales
          </button>
          <button
            className="btn btn-ite"
            id="v-pills-infoRel-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-infoRel"
            type="button"
            role="tab"
            aria-controls="v-pills-infoRel"
            aria-selected="false"
          >
            Infografías: Información relevante
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
            <MapItem
              id="mapaTLX"
              link="https://itetlax.org.mx/assets/img/imgDemA/12.png"
              title="Distritación Local Tlaxcala 2022"
              modalId="mapaTLX"
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
              {distLocal.map((dLocal) => (
                <MapItem
                  key={dLocal.id}
                  id={dLocal.id}
                  link={dLocal.link}
                  title={`Distrito ${dLocal.id}`}
                  modalId={`mapaDLocal${dLocal.id}`}
                />
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-intDist"
            role="tabpanel"
            aria-labelledby="v-pills-intDist-tab"
            tabIndex="0"
          >
            <div className="Grid__three">
              {intDist.map((intDistLocal) => (
                <MapItem
                  key={intDistLocal.id}
                  id={intDistLocal.id}
                  link={intDistLocal.link}
                  title={intDistLocal.title}
                  modalId={`intDistLocInfo${intDistLocal.id}`}
                />
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-infoRel"
            role="tabpanel"
            aria-labelledby="v-pills-infoRel-tab"
            tabIndex="0"
          >
            <div className="Grid__three">
              {infoRel.map((mapa) => (
                <MapItem
                  key={mapa.id}
                  id={mapa.id}
                  link={mapa.link}
                  title={mapa.title}
                  modalId={`mapaDist${mapa.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mapas;
