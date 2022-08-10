import React, { Component } from "react";
// import Carousel from "./index/carouselIndex/CarouselIndex";
import CarouselIndex from "./index/carouselIndex/CarouselIndex";
import CarouselActividadesRecientes from "./index/carouselActividadesRecientes/CarouselActividadesRecientes";
import CarouselAgenda from "./index/carouselAgenda/CarouselAgenda";
import espacioIteNeria from "../img/espacio-ite-neria.jpg";
import micrositios from "../img/micrositios.png";
import itegenero from "../img/itegenero.png";
import covid from "../img/covid.png";
import participacionciudadana from "../img/participacionciudadana.png";
import REPS from "../img/REPS.png";
import RNPS from "../img/RNPS.png";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <div className="pruebas"> */}
        <CarouselIndex></CarouselIndex>
        {/* </div> */}
        <div className="mt-4 Home__ActAgen">
          <div>
            <h3 className="Home__title">Actividades Recientes</h3>
            <hr className="Home__line-title" />
            <CarouselActividadesRecientes></CarouselActividadesRecientes>
          </div>
          <div>
            <h3 className="Home__title">Agenda</h3>
            <hr className="Home__line-title" />
            <CarouselAgenda></CarouselAgenda>
          </div>
        </div>
        <h3 className="Home__title">Informes</h3>
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
        <div className="Home__ActAgen mt-4">
          <div>
            <h3 className="Home__title">Espacio ITE</h3>
            <hr className="Home__line-title" />
            <img
              className="img-fluid"
              src={espacioIteNeria}
              alt="Espacio ITE"
            />
          </div>
          <div>
            <h3 className="Home__title">Video Podcast</h3>
            <hr className="Home__line-title" />
          </div>
        </div>
        <div className="Home__ActAgen mt-4">
          <div>
            <h3 className="Home__title">Estrados Electrónicos</h3>
            <hr className="Home__line-title" />
          </div>
          <div>
            <h3 className="Home__title">Sesión en Vivo</h3>
            <hr className="Home__line-title" />
          </div>
          <div>
            <h3 className="Home__title">Convocatoria</h3>
            <hr className="Home__line-title" />
          </div>
        </div>
        <img className="mt-4 img-fluid" src={micrositios} alt="micrositios" />
        <div className="Home__ActAgen mt-4">
          <div>
            <img
              className="mt-4 img-fluid"
              src={itegenero}
              alt="Micrositio ITE Género"
            />
          </div>
          <div>
            <img
              className="mt-4 img-fluid"
              src={covid}
              alt="Micrositio COVID-19"
            />
          </div>
          <div>
            <img
              className="mt-4 img-fluid"
              src={participacionciudadana}
              alt="Micrositio PArticipación Ciudadana"
            />
          </div>
        </div>
        <img className="mt-4 img-fluid" src={REPS} alt="REPS" />
        <img className="mt-4 mb-4 img-fluid" src={RNPS} alt="RNPS" />

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
