const Carousel__imgpath = require.context("../../img");
const Carousel__pdfpath = require.context("../pdf");
const Carousel__wordpath = require.context("../word");

export const imgCarouselIndexTop = [
  {
    id: 0,
    url: Carousel__imgpath(`./${"imgC_I/"}${"0.jpg"}`),
    alt: "Agenda de Asambleas",
    itemActive: "active",
    buttonActive: "active",
    ariaCurrent: "true",
    link: Carousel__pdfpath(`./${"0.pdf"}`),
  },
  {
    id: 1,
    url: Carousel__imgpath(`./${"imgC_I/"}${"1.jpg"}`),
    alt: "Verificación de afiliación",
    link: "https://deppp-partidos.ine.mx/afiliadosPartidos/app/publico/consultaAfiliados/nacionales?execution=e1s1",
  },
  {
    id: 2,
    url: Carousel__imgpath(`./${"imgC_I/"}${"2.png"}`),
    alt: "Quinto concurso nacional",
    link: "https://www.ceenl.mx/2022/cineminuto/",
  },
  {
    id: 3,
    url: Carousel__imgpath(`./${"imgC_I/"}${"3.png"}`),
    alt: "Concurso Ensayo",
    link: Carousel__pdfpath(`./${"3.pdf"}`),
  },
  {
    id: 4,
    url: Carousel__imgpath(`./${"imgC_I/"}${"4.jpg"}`),
    alt: "Convocatoria Consejero Presidente(a)",
    link: Carousel__pdfpath(`./${"4.pdf"}`),
  },
  {
    id: 5,
    url: Carousel__imgpath(`./${"imgC_I/"}${"5.jpg"}`),
    alt: "Formatos de fiscalización editables",
    link: Carousel__wordpath(`./${"5.docx"}`),
  },
  {
    id: 6,
    url: Carousel__imgpath(`./${"imgC_I/"}${"6.jpg"}`),
    alt: "Guia de actuación",
    link: Carousel__pdfpath(`./${"6.pdf"}`),
  },
  {
    id: 7,
    url: Carousel__imgpath(`./${"imgC_I/"}${"7.jpg"}`),
    alt: "Manual android",
    link: Carousel__pdfpath(`./${"7.pdf"}`),
  },
  {
    id: 8,
    url: Carousel__imgpath(`./${"imgC_I/"}${"8.jpg"}`),
    alt: "Manual ios",
    link: Carousel__pdfpath(`./${"8.pdf"}`),
  },
  {
    id: 9,
    url: Carousel__imgpath(`./${"imgC_I/"}${"9.jpg"}`),
    alt: "Manual web",
    link: Carousel__pdfpath(`./${"9.pdf"}`),
  },
];

export const imgCarouselActividadesRecientes = [
  {
    id: 0,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"0.png"}`),
    alt: "Agenda Asambleas",
    itemActive: "active",
    buttonActive: "active",
    ariaCurrent: "true",
    link: Carousel__pdfpath(`./${"0.pdf"}`),
  },
  {
    id: 1,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"1.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"1.png"}`),
  },
  {
    id: 2,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"2.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"2.png"}`),
  },
  {
    id: 3,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"3.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"3.png"}`),
  },
  {
    id: 4,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"4.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"4.png"}`),
  },
  {
    id: 5,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"5.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"5.png"}`),
  },
  {
    id: 6,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"6.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"6.png"}`),
  },
  {
    id: 7,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"7.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"7.png"}`),
  },
  {
    id: 8,
    url: Carousel__imgpath(`./${"imgC_AR/"}${"8.png"}`),
    alt: "Consulta Infantil y Juvenil 2021",
    link: Carousel__imgpath(`./${"imgC_AR/"}${"8.png"}`),
  },
];

export const imgCarouselAgenda = [
  {
    id: 0,
    url: Carousel__imgpath(`./${"imgC_A/"}${"0.jpg"}`),
    alt: "Agenda Asambleas",
    itemActive: "active",
    buttonActive: "active",
    ariaCurrent: "true",
    link: Carousel__pdfpath(`./${"0.pdf"}`),
  },
  {
    id: 1,
    url: Carousel__imgpath(`./${"imgC_A/"}${"1.jpeg"}`),
    alt: "Participación política de las mujeres tlaxcaltecas en el Proceso Electoral Local Ordinario 2020-2021",
    link: Carousel__imgpath(`./${"imgC_A/"}${"1.jpeg"}`),
  },
  {
    id: 2,
    url: Carousel__imgpath(`./${"imgC_A/"}${"2.jpeg"}`),
    alt: "Proceso Local 2021",
    link: Carousel__imgpath(`./${"imgC_A/"}${"2.jpeg"}`),
  },
  {
    id: 3,
    url: Carousel__imgpath(`./${"imgC_A/"}${"3.jpg"}`),
    alt: "Foro Voto Electrócnico",
    link: Carousel__pdfpath(`./${"10.pdf"}`),
  },
  {
    id: 4,
    url: Carousel__imgpath(`./${"imgC_A/"}${"4.jpg"}`),
    alt: "Educación Cívica",
    link: Carousel__imgpath(`./${"imgC_A/"}${"4.jpg"}`),
  },
];
