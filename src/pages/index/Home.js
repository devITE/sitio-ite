import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Enlaces from "./enlaces/Enlaces";
import { dataCIndex, dataCAR, dataCA } from "../../data/2024/dataCarouselIndex";
import Convocatorias from "../../layout/Index/Convocatorias";
import { dataConvocatorias } from "../../data/2024/dataEstradosConvocatorias";

import Informes from "./informes/Informes";
import { dataInformes } from "../../data/dataInformes";

import Videoteca from "../../layout/videoteca/Videoteca";

import Carousel from "../../layout/Carousel/Carousel/Carousel";
import CarouselItemIMG from "../../layout/Carousel/Carousel/CarouselItemIMG";
import { dataITEConecta } from "../../data/dataITEConecta";

// import ModalInit from "../../layout/Modal/ModalInit";
import "./Home.css";

const ITE = () => {
  useEffect(() => {
    document.title = `ITE`;
  }, []);

  return (
    <>
      {/* <ModalInit
        imgLink="https://itetlax.org.mx/assets/img/sesionesCG/sesionA.jpg"
        url="https://itetlax.org.mx/assets/img/sesionesCG/sesionA.jpg"
        linkToo=""
      /> */}

      {/* <ModalInit
        imgLink="https://itetlax.org.mx/assets/img/imgPopup/resultados_parlamento.jpeg"
        url="https://itetlax.org.mx/assets/img/imgPopup/resultados_parlamento.jpeg"
        linkToo=""
      />*/}

      {/* <ModalInit
        imgLink="https://itetlax.org.mx/assets/img/imgPopup/consultaconvo.jpg"
        url=""
        linkToo="/ConvocatoriasApartado"
      />  */}
      <Carousel idCarousel="carouselTopIndex">
        {dataCIndex.map((cIndex) => (
          <CarouselItemIMG
            key={cIndex.id}
            imgUrl={"https://itetlax.org.mx/assets/img/imgC_I/" + cIndex.imgUrl}
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
            Conversatorio Universitario "Mecanismos de Participación Ciudadana"
          </h2>
          <div className="Home__video-embed ratio ratio-16x9 w-100">
            <iframe
              id="9QQCf_emFwo"
              src="https://www.youtube-nocookie.com/embed/2mMrjubl1Ow?si=ZebMgVqaPuyG0x4S"
              title='Foro "Protocolo de personas con discapacidad en el Proceso Electoral Concurrente 2023-2024"'
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
          <h2 className="bottom_title">Actividades de Interes</h2>
          <div className="ps-5 pe-5">
            <Carousel idCarousel="carouselActividadesRecientes">
              {dataCAR.map((cAR) => (
                <CarouselItemIMG
                  key={cAR.id}
                  imgUrl={
                    "https://itetlax.org.mx/assets/img/imgC_AR/" + cAR.imgUrl
                  }
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
                  imgUrl={
                    "https://itetlax.org.mx/assets/img/imgC_A/" + cA.imgUrl
                  }
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
      <div className="Home__boxesTriple mt-4">
        <div>
          <h2 className="bottom_title">Estrados Electrónicos</h2>
          <div className=" h-100 d-flex justify-content-center align-items-center">
            <Link to="EstradosElectronicos" className="btn btn-ite fs-2">
              Consulta aquí los
              <br />
              <b>Estrados Electrónicos</b>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="bottom_title">Sesión en Vivo</h2>
          <div className="Home__video-embed ratio ratio-16x9 w-100">
            <iframe
              src="https://www.youtube-nocookie.com/embed/nN1VdgLPX6w?si=e7gpI_KuMHOXTz3w"
              title="Sesión Presencial Permanente del CG 09/06/2024"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="mt-3 text-center">
            Sesión Presencial Especial del CG 09/04/2024{" "}
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

      <h3 className="mt-5 bottom_title">Micrositios</h3>
      <div className="row">
        <div className="col-12 col-md-3">
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
        <div className="col-12 col-md-3">
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
        <div className="col-12 col-md-3">
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
        <div className="col-12 col-md-3">
          <a
            href="https://ite-consulta-pcd.itetlax.org.mx/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mt-2 img-fluid"
              src="https://itetlax.org.mx/assets/img/imgC_I/acciones afirmativas.png"
              alt="Acciones Afirmativas"
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
      <div className="row">
        <div className="col-md-6">
          <Link to="REPS">
            <img
              className="mt-2 img-fluid w-100"
              src="https://itetlax.org.mx/assets/img/reps/1.png"
              alt="REPS"
            />
          </Link>
        </div>
        <div className="col-md-6">
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
        </div>
      </div>

      {/* <h3 className="mt-5 bottom_title">Videos</h3>
      <Videoteca items={dataVideoteca} itemsID={"videoteca"} /> */}

      <div className="mt-5 container">
        <h3 className="mt-1 bottom_title">Videos INE</h3>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube-nocookie.com/embed/jvOZFERXuiM"
                title="SCápsula en Náhuatl"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://youtu.be/jvOZFERXuiM"
              target="_blank"
              rel="noreferrer"
            >
              <h5 className="mt-3 text-center">Cápsula en Náhuatl</h5>
            </a>
          </div>
          <div className="col-md-4">
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube-nocookie.com/embed/EEHZkyv-sTE"
                title="Cápsula en Yuhmú (variante del Otomí)"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://youtu.be/jvOZFERXuiM"
              target="_blank"
              rel="noreferrer"
            >
              <h5 className="mt-3 text-center">
                Cápsula en Yuhmú (variante del Otomí)
              </h5>
            </a>
          </div>

          <div className="col-md-4">
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube-nocookie.com/embed/SvfEVaA6jF8"
                title="Votación de Personas con Discapacidad"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://youtu.be/SvfEVaA6jF8"
              target="_blank"
              rel="noreferrer"
            >
              <h5 className="mt-3 text-center">
                Votación de Personas con Discapacidad
              </h5>
            </a>
          </div>

          <div className="col-md-4">
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube-nocookie.com/embed/7sg3kvUYxRY"
                title="Voto de Personas con Discapacidad Trans, No Binarias"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://youtu.be/7sg3kvUYxRY"
              target="_blank"
              rel="noreferrer"
            >
              <h5 className="mt-3 text-center">
                Voto de Personas con Discapacidad Trans, No Binarias
              </h5>
            </a>
          </div>

          <div className="col-md-4">
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dizDZWMNJxE"
                title="Proceso de Votación de las Personas con Discapacidad"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://youtu.be/dizDZWMNJxE"
              target="_blank"
              rel="noreferrer"
            >
              <h5 className="mt-3 text-center">
                Proceso de Votación de las Personas con Discapacidad
              </h5>
            </a>
          </div>
        </div>
      </div>

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
