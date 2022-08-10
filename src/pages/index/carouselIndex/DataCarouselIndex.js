import React, { Component } from "react";

const Carousel__imgpath = require.context("./img");
const Carousel__pdfpath = require.context("../../../assets/pdf");
const Carousel__wordpath = require.context("../../../assets/word");

const imgCarouselIndex = [
  {
    id: 1,
    url: "banner-agenda-asambleas.jpg",
    alt: "Agenda de Asambleas",
    link: Carousel__pdfpath(`./${"AgendaDeAsambleas.pdf"}`),
  },
  {
    id: 2,
    url: "banner_afiliado.jpg",
    alt: "Verificación de afiliación",
    link: "https://deppp-partidos.ine.mx/afiliadosPartidos/app/publico/consultaAfiliados/nacionales?execution=e1s1",
  },
  {
    id: 3,
    url: "cineminuto.png",
    alt: "Quinto concurso nacional",
    link: "https://www.ceenl.mx/2022/cineminuto/",
  },
  {
    id: 4,
    url: "concurso-ensayo-ieebc.png",
    alt: "Concurso Ensayo",
    link: Carousel__pdfpath(`./${"primerconcursonacionaldeensayo2022.pdf"}`),
  },
  {
    id: 5,
    url: "Convocatoria-Consejero-Presidente.jpg",
    alt: "Convocatoria Consejero Presidente(a)",
    link: Carousel__pdfpath(`./${"ConvocatoriaConsejeroPresidente.pdf"}`),
  },
  {
    id: 6,
    url: "formatos-fiscalizacion.jpg",
    alt: "Formatos de fiscalización editables",
    link: Carousel__wordpath(`./${"anexolineamientosfiscales.docx"}`),
  },
  {
    id: 7,
    url: "guia-actuacion.jpg",
    alt: "Guia de actuación",
    link: Carousel__pdfpath(`./${"guiaactuacion.pdf"}`),
  },
  {
    id: 8,
    url: "Manual-auxiliar-android.jpg",
    alt: "Manual android",
    link: Carousel__pdfpath(
      `./${"manual-android-registro-partidos-politicos-locales.pdf"}`
    ),
  },
  {
    id: 9,
    url: "Manual-auxiliar-ios.jpg",
    alt: "Manual ios",
    link: Carousel__pdfpath(
      `./${"manual-ios-registro-partidos-politicos-locales.pdf"}`
    ),
  },
  {
    id: 10,
    url: "Manual-portal-web.jpg",
    alt: "Manual web",
    link: Carousel__pdfpath(
      `./${"manual-portalweb-registro-partidos-politicos-locales.pdf"}`
    ),
  },
];

export default class DataCarouselIndex extends Component {
  render() {
    return (
      <div>
        {imgCarouselIndex.map((imgCarouselIndex) => {
          return (
            <div key={imgCarouselIndex.id} className="carousel-item">
              {/* <Link to={imgCarouselIndex.link}> */}
              <a
                target="_blank"
                href={imgCarouselIndex.link}
                rel="noreferrer"
                // download="nombre_pretendido_del archivo.pdf"
              >
                <img
                  src={Carousel__imgpath(`./${imgCarouselIndex.url}`)}
                  className="d-block w-100"
                  alt={imgCarouselIndex.alt}
                />
              </a>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    );
  }
}
