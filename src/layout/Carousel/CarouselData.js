// const Carousel__imgpath = require.context("./img");
const Carousel__pdfpath = require.context("../assets/pdf");
const Carousel__wordpath = require.context("../assets/word");

export const imgCarouselIndex = [
  {
    id: 1,
    url: "1.jpg",
    alt: "Agenda de Asambleas",
    link: Carousel__pdfpath(`./${"1.pdf"}`),
  },
  {
    id: 2,
    url: "2.jpg",
    alt: "Verificación de afiliación",
    link: "https://deppp-partidos.ine.mx/afiliadosPartidos/app/publico/consultaAfiliados/nacionales?execution=e1s1",
  },
  {
    id: 3,
    url: "3.png",
    alt: "Quinto concurso nacional",
    link: "https://www.ceenl.mx/2022/cineminuto/",
  },
  {
    id: 4,
    url: "4.png",
    alt: "Concurso Ensayo",
    link: Carousel__pdfpath(`./${"4.pdf"}`),
  },
  {
    id: 5,
    url: "5.jpg",
    alt: "Convocatoria Consejero Presidente(a)",
    link: Carousel__pdfpath(`./${"5.pdf"}`),
  },
  {
    id: 6,
    url: "6.jpg",
    alt: "Formatos de fiscalización editables",
    link: Carousel__wordpath(`./${"6.docx"}`),
  },
  {
    id: 7,
    url: "7.jpg",
    alt: "Guia de actuación",
    link: Carousel__pdfpath(`./${"7.pdf"}`),
  },
  {
    id: 8,
    url: "8.jpg",
    alt: "Manual android",
    link: Carousel__pdfpath(`./${"8.pdf"}`),
  },
  {
    id: 9,
    url: "9.jpg",
    alt: "Manual ios",
    link: Carousel__pdfpath(`./${"9.pdf"}`),
  },
  {
    id: 10,
    url: "10.jpg",
    alt: "Manual web",
    link: Carousel__pdfpath(`./${"10.pdf"}`),
  },
];
