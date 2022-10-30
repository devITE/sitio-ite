import React, { Component } from "react";
import Enlaces from "./enlaces/Enlaces";
import "./Home.css";
import Carousel from "../../layout/Carousel/Carousel";
import {
  imgCarouselIndexTop,
  imgCarouselActividadesRecientes,
  imgCarouselAgenda,
  imgCarouselConvocatorias,
} from "../../assets/data/dataCarouselIndex";
import Estrados from "./estrados/Estrados";
import { dataEstrados } from "../../assets/data/dataEstrados";

import Informes from "./informes/Informes";
import { dataInformes } from "../../assets/data/dataInformes";

import Videoteca from "./videoteca/Videoteca";
import { dataVideoteca } from "../../assets/data/dataVideoteca";

const Home_imppath = require.context("../../assets/img/imgHome");
const EspacioITE_path = require.context("../../assets/pdf/");

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel slides={imgCarouselIndexTop} slidesID={"carouselTopIndex"} />
        <div className="mt-4 Home__AR-A">
          <div>
            <h2 className="bottom_title">Foro</h2>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                id="video1"
                src="https://www.youtube.com/embed/6zXSa7oqrqM?rel=0"
                title="Foro en conmemoración"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="bottom_title">Enlaces</h2>
            <div className="">
              <Enlaces></Enlaces>
            </div>
          </div>
        </div>
        <div className="mt-4 Home__AR-A">
          <div>
            <h2 className="bottom_title">Actividades Recientes</h2>
            <div className="ps-5 pe-5">
              <Carousel
                slides={imgCarouselActividadesRecientes}
                slidesID={"carouselActividadesRecientes"}
              />
            </div>
          </div>
          <div>
            <h2 className="bottom_title">Agenda</h2>
            <div className="ps-5 pe-5">
              <Carousel
                slides={imgCarouselAgenda}
                slidesID={"carouselAgenda"}
              />
            </div>
          </div>
        </div>
        <h2 className="mt-4 bottom_title">Informes</h2>
        <Informes items={dataInformes} itemsID={"itemsInformes"} />
        <div className="Home__EspITEVidPod mt-4 w-100">
          <div>
            <h2 className="bottom_title">Espacio ITE</h2>
            <a
              href={EspacioITE_path(`./${"0.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src={Home_imppath(`./espacio-ite-neria.jpg`)}
                alt="Espacio ITE"
              />
            </a>
          </div>
          <div>
            <h2 className="bottom_title">Video Podcast</h2>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/6zXSa7oqrqM?rel=0"
                title="Video Podcast"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="Home__boxesTriple mt-4">
          <div>
            <h2 className="bottom_title">Estrados Electrónicos</h2>
            <div className="">
              <Estrados
                items={dataEstrados}
                itemsID={"listEstradosElectronicos"}
              />
            </div>
          </div>
          <div>
            <h2 className="bottom_title">Sesión en Vivo</h2>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/1PRYCbDhkoQ?rel=0"
                title="Video Podcast"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="bottom_title">Convocatoria</h2>
            <div className="ps-2 pe-2">
              <Carousel
                slides={imgCarouselConvocatorias}
                slidesID={"carouselConvocatorias"}
              />
            </div>
          </div>
        </div>
        <img
          className="mt-4 img-fluid w-100"
          src={Home_imppath(`./micrositios.png`)}
          alt="micrositios"
        />
        <div className="Home__micrositios">
          <div>
            <img
              className="mt-2 img-fluid"
              src={Home_imppath(`./itegenero.png`)}
              alt="Micrositio ITE Género"
            />
          </div>
          <div>
            <img
              className="mt-2 img-fluid"
              src={Home_imppath(`./covid.png`)}
              alt="Micrositio COVID-19"
            />
          </div>
          <div>
            <img
              className="mt-2 img-fluid"
              src={Home_imppath(`./participacionciudadana.png`)}
              alt="Micrositio PArticipación Ciudadana"
            />
          </div>
        </div>
        <img
          className="mt-2 img-fluid w-100"
          src={Home_imppath(`./REPS.png`)}
          alt="REPS"
        />
        <a
          href="https://www.ine.mx/actores-politicos/registro-nacional-de-personas-sancionadas/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mt-2 mb-2 img-fluid w-100"
            src={Home_imppath(`./RNPS.png`)}
            alt="RNPS"
          />
        </a>
        <h3 className="mt-4 bottom_title">Videos</h3>
        <Videoteca items={dataVideoteca} itemsID={"videoteca"} />

        <div className="Home__pages">
          <div>
            <a target="_blank" href="https://ine.mx" rel="noreferrer">
              <img
                className="mt-2 img-fluid"
                src={Home_imppath(`./ine.png`)}
                alt="INE"
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="http://www.fepade.gob.mx/"
              rel="noreferrer"
            >
              <img
                className="mt-2 img-fluid"
                src={Home_imppath(`./fepade.png`)}
                alt="FEPADE"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.te.gob.mx/" rel="noreferrer">
              <img
                className="mt-2 img-fluid"
                src={Home_imppath(`./tet.png`)}
                alt="TEPJF"
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.observatoriomujerestlaxcala.mx/contents/"
              rel="noreferrer"
            >
              <img
                className="mt-2 img-fluid"
                src={Home_imppath(`./oppmt.png`)}
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.tetlax.org.mx/"
              rel="noreferrer"
            >
              <img
                className="mt-2 img-fluid"
                src={Home_imppath(`./tet2.png`)}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
