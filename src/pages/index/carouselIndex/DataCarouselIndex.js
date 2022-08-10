import React, { Component } from "react";

const Carousel__imgpath = require.context("./img");

const imgCarouselIndex = [
  {
    id: 1,
    url: "banner-agenda-asambleas.jpg",
    alt: "Agenda de Asambleas",
  },
  {
    id: 2,
    url: "banner_afiliado.jpg",
    alt: "Verificación de afiliación",
  },
  {
    id: 3,
    url: "cineminuto.png",
    alt: "Quinto concurso nacional",
  },
  {
    id: 4,
    url: "concurso-ensayo-ieebc.png",
    alt: "Concurso Ensayo",
  },
  {
    id: 5,
    url: "Convocatoria-Consejero-Presidente.jpg",
    alt: "Convocatoria Consejero Presidente(a)",
  },
  {
    id: 6,
    url: "formatos-fiscalizacion.jpg",
    alt: "Formatos de fiscalización editables",
  },
  {
    id: 7,
    url: "guia-actuacion.jpg",
    alt: "Guia de actuación",
  },
  {
    id: 8,
    url: "Manual-auxiliar-android.jpg",
    alt: "Manual android",
  },
  {
    id: 9,
    url: "Manual-auxiliar-ios.jpg",
    alt: "Manual ios",
  },
  {
    id: 10,
    url: "Manual-portal-web.jpg",
    alt: "Manual web",
  },
];

export default class DataCarouselIndex extends Component {
  render() {
    return (
      <div>
        {imgCarouselIndex.map((imgCarouselIndex) => {
          return (
            <div key={imgCarouselIndex.id} className="carousel-item">
              <img
                src={Carousel__imgpath(`./${imgCarouselIndex.url}`)}
                className="d-block w-100"
                alt={imgCarouselIndex.alt}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
