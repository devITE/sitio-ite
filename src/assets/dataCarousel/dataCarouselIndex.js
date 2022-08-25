const Carousel__imgpath = require.context("../../img/imgC_I");
const Carousel__pdfpath = require.context("../pdf");
const Carousel__wordpath = require.context("../word");

export const imgCarouselIndexTop = [
  {
    id: 0,
    url: Carousel__imgpath(`./${"0.jpg"}`),
    alt: "Agenda de Asambleas",
    itemActive: "active",
    buttonActive: "active",
    ariaCurrent: "true",
    link: Carousel__pdfpath(`./${"0.pdf"}`),
  },
  {
    id: 1,
    url: Carousel__imgpath(`./${"1.jpg"}`),
    alt: "Verificación de afiliación",
    link: "https://deppp-partidos.ine.mx/afiliadosPartidos/app/publico/consultaAfiliados/nacionales?execution=e1s1",
  },
  {
    id: 2,
    url: Carousel__imgpath(`./${"2.png"}`),
    alt: "Quinto concurso nacional",
    link: "https://www.ceenl.mx/2022/cineminuto/",
  },
  {
    id: 3,
    url: Carousel__imgpath(`./${"3.png"}`),
    alt: "Concurso Ensayo",
    link: Carousel__pdfpath(`./${"3.pdf"}`),
  },
  {
    id: 4,
    url: Carousel__imgpath(`./${"4.jpg"}`),
    alt: "Convocatoria Consejero Presidente(a)",
    link: Carousel__pdfpath(`./${"4.pdf"}`),
  },
  {
    id: 5,
    url: Carousel__imgpath(`./${"5.jpg"}`),
    alt: "Formatos de fiscalización editables",
    link: Carousel__wordpath(`./${"5.docx"}`),
  },
  {
    id: 6,
    url: Carousel__imgpath(`./${"6.jpg"}`),
    alt: "Guia de actuación",
    link: Carousel__pdfpath(`./${"6.pdf"}`),
  },
  {
    id: 7,
    url: Carousel__imgpath(`./${"7.jpg"}`),
    alt: "Manual android",
    link: Carousel__pdfpath(`./${"7.pdf"}`),
  },
  {
    id: 8,
    url: Carousel__imgpath(`./${"8.jpg"}`),
    alt: "Manual ios",
    link: Carousel__pdfpath(`./${"8.pdf"}`),
  },
  {
    id: 9,
    url: Carousel__imgpath(`./${"9.jpg"}`),
    alt: "Manual web",
    link: Carousel__pdfpath(`./${"9.pdf"}`),
  },
];
