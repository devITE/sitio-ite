import React, { Component } from "react";
import { Link } from "react-router-dom";
import Enlaces from "./enlaces/Enlaces";
import {
  dataCIndex,
  dataCAR,
  dataCA,
} from "../../assets/data/dataCarouselIndex";
import Convocatorias from "../../layout/Index/Convocatorias";
import TablePDF from "../../layout/Index/Estrados";
import {
  dataEstrados,
  dataConvocatorias,
} from "../../assets/data/dataEstradosConvocatorias";

import Informes from "./informes/Informes";
import { dataInformes } from "../../assets/data/dataInformes";

import Videoteca from "../../layout/videoteca/Videoteca";
import { dataVideoteca } from "../../assets/data/dataVideoteca";
import "./Home.css";

import Carousel from "../../layout/Carousel/Carousel/Carousel";
import CarouselItemIMG from "../../layout/Carousel/CarouselItems/CarouselItemIMG";
import { dataVideoPodCast } from "../../assets/data/dataVideoPodCast";
import ModalInit from "../../assets/popupIndex/ModalInit";
import "./Home.css";

const Home__path = require.context("../../assets");

export default class Home extends Component {
  render() {
    return (
      <>
        <ModalInit url="" pdf="1" />
        <Carousel idCarousel="carouselTopIndex">
          {dataCIndex.map((cIndex) => (
            <CarouselItemIMG
              key={cIndex.id}
              imgUrl={cIndex.url}
              alt={cIndex.alt}
              itemActive={cIndex.itemActive}
              link={cIndex.link}
            />
          ))}
        </Carousel>
        <div className="mt-4 Home__AR-A">
          <div>
            <h2 className="bottom_title">Foro</h2>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                id="SKyFNPOmv3s"
                src="https://www.youtube-nocookie.com/embed/SKyFNPOmv3s?rel=0"
                title="Foro en conmemoración"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="bottom_title">Enlaces</h2>
            <div>
              <Enlaces />
            </div>
          </div>
        </div>
        <div className="mt-4 Home__AR-A">
          <div>
            <h2 className="bottom_title">Actividades Recientes</h2>
            <div className="ps-5 pe-5">
              <Carousel idCarousel="carouselActividadesRecientes">
                {dataCAR.map((cAR) => (
                  <CarouselItemIMG
                    key={cAR.id}
                    imgUrl={cAR.url}
                    alt={cAR.alt}
                    itemActive={cAR.itemActive}
                    link={cAR.link}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div>
            <h2 className="bottom_title">Agenda</h2>
            <div className="ps-5 pe-5">
              <Carousel idCarousel="carouselAgenda">
                {dataCA.map((cA) => (
                  <CarouselItemIMG
                    key={cA.id}
                    imgUrl={cA.url}
                    alt={cA.alt}
                    itemActive={cA.itemActive}
                    link={cA.link}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <h2 className="mt-4 bottom_title">Informes</h2>
        <Informes items={dataInformes} itemsID={"itemsInformes"} />
        <h2 className="bottom_title">Video Podcast</h2>
        <Videoteca items={dataVideoPodCast} itemsID={"videoPodcast"} />
        <div className="Home__boxesTriple mt-4">
          <div>
            <h2 className="bottom_title">Estrados Electrónicos</h2>
            <div>
              <TablePDF
                items={dataEstrados}
                itemsID={"listEstradosElectronicos"}
              />
            </div>
          </div>
          <div>
            <h2 className="bottom_title">Sesión en Vivo</h2>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube-nocookie.com/embed/MRj4qC4NVWo?rel=0"
                title="Sesión En Vivo del CG"
                allowFullScreen
              ></iframe>
            </div>
            <h5 className="mt-3 text-center">Sesión Especial 01/12/22</h5>
          </div>
          <div>
            <h2 className="bottom_title">Convocatorias</h2>
            <div>
              <Convocatorias
                items={dataConvocatorias}
                itemsID={"listConvocatorias"}
              />
            </div>
          </div>
        </div>
        <img
          className="mt-4 img-fluid w-100"
          src={Home__path(`./${"img/imgHome/"}${"micrositios.png"}`)}
          alt="micrositios"
        />
        <div className="Home__micrositios">
          <div>
            <img
              className="mt-2 img-fluid"
              src={Home__path(`./${"img/imgHome/"}${"itegenero.png"}`)}
              alt="Micrositio ITE Género"
            />
          </div>
          <div>
            <img
              className="mt-2 img-fluid"
              src={Home__path(`./${"img/imgHome/"}${"covid.png"}`)}
              alt="Micrositio COVID-19"
            />
          </div>
          <div>
            <img
              className="mt-2 img-fluid"
              src={Home__path(
                `./${"img/imgHome/"}${"participacionciudadana.png"}`
              )}
              alt="Micrositio PArticipación Ciudadana"
            />
          </div>
        </div>
        <Link to="REPS">
          <img
            className="mt-2 img-fluid w-100"
            src={Home__path(`./${"img/reps/"}${"1.png"}`)}
            alt="REPS"
          />
        </Link>
        <a
          href="https://www.ine.mx/actores-politicos/registro-nacional-de-personas-sancionadas/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mt-2 mb-2 img-fluid w-100"
            src={Home__path(`./${"img/imgHome/"}${"RNPS.png"}`)}
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
                src={Home__path(`./${"img/imgHome/"}${"ine.png"}`)}
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
                src={Home__path(`./${"img/imgHome/"}${"fepade.png"}`)}
                alt="FEPADE"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.te.gob.mx/" rel="noreferrer">
              <img
                className="mt-2 img-fluid"
                src={Home__path(`./${"img/imgHome/"}${"tet.png"}`)}
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
                src={Home__path(`./${"img/imgHome/"}${"oppmt.png"}`)}
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
                src={Home__path(`./${"img/imgHome/"}${"tet2.png"}`)}
                alt=""
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}
