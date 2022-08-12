import React, { Component } from "react";
import CarouselIndex from "./index/carouselIndex/CarouselIndex";
import CarouselActividadesRecientes from "./index/carouselActividadesRecientes/CarouselActividadesRecientes";
import CarouselAgenda from "./index/carouselAgenda/CarouselAgenda";
import Enlaces from "./index/enlaces/Enlaces";
import "./Home.css";

const Home_imppath = require.context("../img");

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselIndex></CarouselIndex>
        <div className="Home__container-vid-enlaces">
          <div className="Home__container-vid-enlaces-item">
            <h4 className="Home__title">Foro</h4>
            <hr className="Home__line-title" />
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/6zXSa7oqrqM?rel=0"
                title="YouTube video"
              ></iframe>
            </div>
          </div>
          <div className="Home__container-vid-enlaces-item">
            <h4 className="Home__title">Enlaces</h4>
            <hr className="Home__line-title" />
            <Enlaces></Enlaces>
          </div>
        </div>
        <div className="mt-4 Home__ActAgen">
          <div>
            <h4 className="Home__title">Actividades Recientes</h4>
            <hr className="Home__line-title" />
            <CarouselActividadesRecientes></CarouselActividadesRecientes>
          </div>
          <div>
            <h4 className="Home__title">Agenda</h4>
            <hr className="Home__line-title" />
            <CarouselAgenda></CarouselAgenda>
          </div>
        </div>
        <h4 className="Home__title">Informes</h4>
        <hr className="Home__line-title" />
        <div className="w-100">
          <div className="row">
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./estudio_participacion_ciudadana.png`)}
                class="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./in-calidad-ciudadania.jpg`)}
                class="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./inf-tec.jpg`)}
                className="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./diviertete.png`)}
                className="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./inf-anual-20.jpg`)}
                className="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./inf-pelo20-2021.jpg`)}
                className="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./catalogo.jpeg`)}
                className="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3">
              <img
                src={Home_imppath(`./at-ine.jpg`)}
                className="img-fluid rounded-3 shadow-sm"
                alt="..."
              />
            </div>
            <div className="col col-sm-4 col-md-4 col-md-4 ps-5 pe-5 pt-3 pb-3"></div>
          </div>
        </div>

        <div className="Home__ActAgen mt-4 w-100">
          <div className="w-75 border border-primary">
            <h4 className="Home__title">Espacio ITE</h4>
            <hr className="Home__line-title" />
            <img
              className="img-fluid"
              src={Home_imppath(`./espacio-ite-neria.jpg`)}
              alt="Espacio ITE"
            />
          </div>
          <div className="w-25 border border-primary">
            <h4 className="Home__title">Video Podcast</h4>
            <hr className="Home__line-title" />
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/6zXSa7oqrqM?rel=0"
                title="YouTube video"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="Home__ActAgen mt-4">
          <div>
            <h4 className="Home__title">Estrados Electrónicos</h4>
            <hr className="Home__line-title" />
          </div>
          <div>
            <h4 className="Home__title">Sesión en Vivo</h4>
            <hr className="Home__line-title" />
          </div>
          <div>
            <h4 className="Home__title">Convocatoria</h4>
            <hr className="Home__line-title" />
          </div>
        </div>
        <img
          className="mt-4 img-fluid w-100"
          src={Home_imppath(`./micrositios.png`)}
          alt="micrositios"
        />
        <div className="Home__ActAgen mt-4">
          <div>
            <img
              className="mt-4 img-fluid"
              src={Home_imppath(`./itegenero.png`)}
              alt="Micrositio ITE Género"
            />
          </div>
          <div>
            <img
              className="mt-4 img-fluid"
              src={Home_imppath(`./covid.png`)}
              alt="Micrositio COVID-19"
            />
          </div>
          <div>
            <img
              className="mt-4 img-fluid"
              src={Home_imppath(`./participacionciudadana.png`)}
              alt="Micrositio PArticipación Ciudadana"
            />
          </div>
        </div>
        <img
          className="mt-4 img-fluid w-100"
          src={Home_imppath(`./REPS.png`)}
          alt="REPS"
        />
        <img
          className="mt-4 mb-4 img-fluid w-100"
          src={Home_imppath(`./RNPS.png`)}
          alt="RNPS"
        />

        <h3 className="mt-4 Home__title">Videos</h3>
        <hr className="Home__line-title" />

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
      </div>
    );
  }
}
