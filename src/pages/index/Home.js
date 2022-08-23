import Carousel from "../../layout/Carousel/Carousel";

import React, { Component } from "react";
//import CarouselIndex from "./carouselIndex/CarouselIndex";
// import CarouselActividadesRecientes from "./carouselActividadesRecientes/CarouselActividadesRecientes";
// import CarouselAgenda from "./carouselAgenda/CarouselAgenda";
//import Enlaces from "./enlaces/Enlaces";
//import "./Home.css";

// const Home_imppath = require.context("../../img");
//const Home_imppath = require.context("./img");

// const slides = [
//   "https://picsum.photos/id/1033/900/400",
//   "https://picsum.photos/id/1032/900/400",
//   "https://picsum.photos/id/1037/900/400",
//   "https://picsum.photos/id/1035/900/400",
//   "https://picsum.photos/id/1036/900/400",
// ];

const slidesDos = [
  {
    id: 1,
    url: "https://picsum.photos/id/1037/900/400",
    alt: "sssss1",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/1038/900/400",
    alt: "2",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/1039/900/400",
    alt: "3",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/1040/900/400",
    alt: "4",
  },
  {
    id: 5,
    url: "https://picsum.photos/id/1041/900/400",
    alt: "5",
  },
];

const slideID = ["uno", "dos"];

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel slides={slidesDos} slidesID={"uno"} />
        <br />
        <br />
        <br />
        <h1>--------------------------</h1>
        {/* <Carousel slides={slidesDos} /> */}
        {/* <CarouselIndex></CarouselIndex>
        <div className="Home__boxesDouble">
          <div className="Home__boxesDouble-item">
            <h4 className="Home__title">Foro</h4>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/6zXSa7oqrqM?rel=0"
                title="Foro en conmemoración"
              ></iframe>
            </div>
          </div>
          <div className="Home__boxesDouble-item">
            <h4 className="Home__title">Enlaces</h4>
            <div className="">
              <Enlaces></Enlaces>
            </div>
          </div>
        </div>
        <div className="mt-4 Home__boxesDouble">
          <div>
            <h4 className="Home__title">Actividades Recientes</h4>
            <CarouselActividadesRecientes></CarouselActividadesRecientes>
          </div>
          <div>
            <h4 className="Home__title">Agenda</h4>
            <CarouselAgenda></CarouselAgenda>
          </div>
        </div>
        <h4 className="Home__title">Informes</h4>
        <div className="w-100 Home__informes">
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./estudio_participacion_ciudadana.png`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./in-calidad-ciudadania.jpg`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./inf-tec.jpg`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./diviertete.png`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./inf-anual-20.jpg`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./inf-pelo20-2021.jpg`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./catalogo.jpeg`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
          <div className="HOLAHOLA">
            <img
              src={Home_imppath(`./at-ine.jpg`)}
              className="img-fluid rounded-3 shadow-sm"
              alt="..."
            />
          </div>
        </div>

        <div className="Home__EspITEVidPod mt-4 w-100">
          <div>
            <h4 className="Home__title">Espacio ITE</h4>
            <img
              className="img-fluid"
              src={Home_imppath(`./espacio-ite-neria.jpg`)}
              alt="Espacio ITE"
            />
          </div>
          <div>
            <h4 className="Home__title">Video Podcast</h4>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/6zXSa7oqrqM?rel=0"
                title="Video Podcast"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="Home__boxesTriple border border-primary mt-4">
          <div>
            <h4 className="Home__title">Estrados Electrónicos</h4>
            <div className="">sdfsdfsdf</div>
          </div>
          <div>
            <h4 className="Home__title">Sesión en Vivo</h4>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/1PRYCbDhkoQ?rel=0"
                title="Video Podcast"
              ></iframe>
            </div>
          </div>
          <div>
            <h4 className="Home__title">Convocatoria</h4>
            <div className="">sdfsdfsdf</div>
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
        <img
          className="mt-2 mb-2 img-fluid w-100"
          src={Home_imppath(`./RNPS.png`)}
          alt="RNPS"
        />

        <h3 className="mt-4 Home__title">Videos</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolore suscipit nulla optio qui explicabo ratione, fugit rem sunt
          numquam cumque consectetur sit voluptates architecto nobis et quod
          fuga aliquam expedita eos quis iure quibusdam. Est blanditiis
          asperiores suscipit voluptatem harum inventore natus dolor eum
          accusamus, saepe sit pariatur molestiae at illum laudantium quam atque
          assumenda rerum quos obcaecati aut voluptates recusandae illo. Esse,
          nostrum? Et at, voluptatem nulla quam eum voluptatibus qui sunt sequi
          iure, consectetur, vero tempora? Aperiam, dicta. Explicabo sapiente
          sequi voluptatum necessitatibus praesentium fugit iure atque quasi
          excepturi alias eligendi commodi illo, eum incidunt quas accusantium.
        </p>
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
        </div> */}
      </div>
    );
  }
}
