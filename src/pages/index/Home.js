import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Enlaces from "./enlaces/Enlaces";
import { dataCIndex, dataCAR, dataCA } from "../../data/dataCarouselIndex";
import Convocatorias from "../../layout/Index/Convocatorias";
import TablePDF from "../../layout/Index/Estrados";
import {
  dataEstrados,
  dataConvocatorias,
} from "../../data/dataEstradosConvocatorias";

import Informes from "./informes/Informes";
import { dataInformes } from "../../data/dataInformes";

import Videoteca from "../../layout/videoteca/Videoteca";
import { dataVideoteca } from "../../data/dataVideoteca";
import "./Home.css";

import Carousel from "../../layout/Carousel/Carousel/Carousel";
import CarouselItemIMG from "../../layout/Carousel/Carousel/CarouselItemIMG";
import { dataVideoPodCast } from "../../data/dataVideoPodCast";
import { dataITEConecta } from "../../data/dataITEConecta";

import ModalInit from "../../layout/Modal/ModalInit";
import "./Home.css";

const ITE = () => {
  useEffect(() => {
    document.title = `ITE`;
  }, []);
  return (
    <>
      { <ModalInit
        imgLink="https://itetlax.org.mx/assets/img/imgC_A/22.png"
        url="https://portalanterior.ieepcnl.mx/2023/cepxxiv/"
        linkToo=""
      /> } 
        {/* { <ModalInit
        imgLink="https://itetlax.org.mx/assets/img/imgC_I/sesion.jpg"
        url="https://itetlax.org.mx/assets/img/imgC_I/sesion.jpg"
        linkToo=""
      /> } */}

      <Carousel idCarousel="carouselTopIndex">
        {dataCIndex.map((cIndex) => (
          <CarouselItemIMG
            key={cIndex.id}
            imgUrl={cIndex.imgUrl}
            alt={cIndex.alt}
            itemActive={cIndex.itemActive}
            url={cIndex.url}
            linkToo={cIndex.linkToo}
          />
        ))}
      </Carousel>
      <div className="mt-5 Home__AR-A">
        <div>
          <h2 className="bottom_title">
          Clausura / Develación del Mural Ganador "Imagen de la Democracia"
          </h2>
          <div className="Home__video-embed ratio ratio-16x9 w-100">
            <iframe
              id="9QQCf_emFwo"
              src="https://www.youtube-nocookie.com/embed/QR91RtD3OjM?rel=0"
              title="2da. Semana de Educación Cívica. Inauguración"
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
      <div className="mt-5 Home__AR-A">
        <div>
          <h2 className="bottom_title">Actividades Recientes</h2>
          <div className="ps-5 pe-5">
            <Carousel idCarousel="carouselActividadesRecientes">
              {dataCAR.map((cAR) => (
                <CarouselItemIMG
                  key={cAR.id}
                  imgUrl={cAR.imgUrl}
                  alt={cAR.alt}
                  itemActive={cAR.itemActive}
                  url={cAR.url}
                  linkToo={cAR.linkToo}
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
                  imgUrl={cA.imgUrl}
                  alt={cA.alt}
                  itemActive={cA.itemActive}
                  url={cA.url}
                  linkToo={cA.linkToo}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <h2 className="bottom_title mt-5">ITE Conecta</h2>
      <Videoteca items={dataITEConecta} itemsID={"ITEConecta"} />
      <h2 className="mt-5 bottom_title">Informes</h2>
      <Informes items={dataInformes} itemsID={"itemsInformes"} />
      <h2 className="bottom_title mt-5">Video Podcast</h2>
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
              src="https://www.youtube-nocookie.com/embed/iTBHitwF2MI?rel=0"
              title="Sesión En Vivo del CG"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="mt-3 text-center">
          Sesión Presencial Ordinaria del CG 30/06/2023{" "}
          </h5>
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
        className="mt-5 img-fluid w-100"
        src="https://itetlax.org.mx/assets/img/imgHome/micrositios.png"
        alt="micrositios"
      />
      <div className="Home__micrositios">
        <div>
          <a
            href="https://ite-genero.itetlax.org.mx"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgHome/itegenero.png"
              alt="Micrositio ITE Género"
            />
          </a>
        </div>
        <div>
          <a
            href="https://covid19.itetlax.org.mx"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgHome/covid.png"
              alt="Micrositio COVID-19"
            />
          </a>
        </div>
        <div>
          <a
            href="https://participacion-ciudadana.itetlax.org.mx"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgHome/participacionciudadana.png"
              alt="Micrositio Participación Ciudadana"
            />
          </a>
        </div>
      </div>
      <a
        href="https://ite-comunidades.itetlax.org.mx"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="mt-3 mb-3 img-fluid w-100"
          src="https://itetlax.org.mx/assets/img/imgHome/iteComunidades.jpg"
          alt="Micrositio ITE Comunidades"
        />
      </a>
      <Link to="REPS">
        <img
          className="mt-2 img-fluid w-100"
          src="https://itetlax.org.mx/assets/img/reps/1.png"
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
          src="https://itetlax.org.mx/assets/img/imgHome/RNPS.png"
          alt="RNPS"
        />
      </a>
      <h3 className="mt-5 bottom_title">Videos</h3>
      <Videoteca items={dataVideoteca} itemsID={"videoteca"} />

      <div className="Home__pages">
        <div>
          <a target="_blank" href="https://ine.mx" rel="noreferrer">
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgHome/ine.png"
              alt="INE"
            />
          </a>
        </div>
        <div>
          <a target="_blank" href="http://www.fepade.gob.mx/" rel="noreferrer">
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgHome/fepade.png"
              alt="FEPADE"
            />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.te.gob.mx/" rel="noreferrer">
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgHome/tet.png"
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
              src="https://itetlax.org.mx/assets/img/imgHome/oppmt.png"
              alt="Observatorio de Particiáción Política de las Mujeres en Tlaxcala"
            />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.tetlax.org.mx/" rel="noreferrer">
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgHome/tet2.png"
              alt="Tribunal Electoral de Tlaxcala"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default ITE;
