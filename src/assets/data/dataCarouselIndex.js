const Carousel__imgpath = require.context("../../assets/img");
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
    link: Carousel__pdfpath(`./${"carousel/"}${"0.pdf"}`),
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
    link: Carousel__pdfpath(`./${"carousel/"}${"3.pdf"}`),
  },
  {
    id: 4,
    url: Carousel__imgpath(`./${"imgC_I/"}${"4.jpg"}`),
    alt: "Convocatoria Consejero Presidente(a)",
    link: Carousel__pdfpath(`./${"carousel/"}${"4.pdf"}`),
  },
  {
    id: 5,
    url: Carousel__imgpath(`./${"imgC_I/"}${"5.jpg"}`),
    alt: "Formatos de fiscalización editables",
    link: Carousel__wordpath(`./${"carousel/"}${"5.docx"}`),
  },
  {
    id: 6,
    url: Carousel__imgpath(`./${"imgC_I/"}${"6.jpg"}`),
    alt: "Guia de actuación",
    link: Carousel__pdfpath(`./${"carousel/"}${"6.pdf"}`),
  },
  {
    id: 7,
    url: Carousel__imgpath(`./${"imgC_I/"}${"7.jpg"}`),
    alt: "Manual android",
    link: Carousel__pdfpath(`./${"carousel/"}${"7.pdf"}`),
  },
  {
    id: 8,
    url: Carousel__imgpath(`./${"imgC_I/"}${"8.jpg"}`),
    alt: "Manual ios",
    link: Carousel__pdfpath(`./${"carousel/"}${"8.pdf"}`),
  },
  {
    id: 9,
    url: Carousel__imgpath(`./${"imgC_I/"}${"9.jpg"}`),
    alt: "Manual web",
    link: Carousel__pdfpath(`./${"carousel/"}${"9.pdf"}`),
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
    link: "https://www.observatoriomujerestlaxcala.mx/contents/",
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
    link: Carousel__pdfpath(`./${"carousel/"}${"0.pdf"}`),
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
    link: Carousel__pdfpath(`./${"carousel/"}${"10.pdf"}`),
  },
  {
    id: 4,
    url: Carousel__imgpath(`./${"imgC_A/"}${"4.jpg"}`),
    alt: "Educación Cívica",
    link: Carousel__imgpath(`./${"imgC_A/"}${"4.jpg"}`),
  },
];

export const imgCarouselConvocatorias = [
  {
    id: 0,
    url: Carousel__imgpath(`./${"imgC_C/"}${"0.jpeg"}`),
    alt: "Convocatoria OPPMT",
    itemActive: "active",
    buttonActive: "active",
    ariaCurrent: "true",
    link: Carousel__pdfpath(`./${"carousel/"}${"11.pdf"}`),
  },
  {
    id: 1,
    url: Carousel__imgpath(`./${"imgC_C/"}${"1.jpeg"}`),
    alt: "Resultados del XI Parlamento Juvenil",
    link: Carousel__imgpath(`./${"imgC_C/"}${"1.jpeg"}`),
  },
  {
    id: 2,
    url: Carousel__imgpath(`./${"imgC_C/"}${"2.jpg"}`),
    alt: "Concursos Nacionales. Urna electrónica y vía remota",
    link: "https://www.ceenl.mx/VE2022/",
  },
  {
    id: 3,
    url: Carousel__imgpath(`./${"imgC_C/"}${"3.jpg"}`),
    alt: "Concursos Nacionales. Urna electrónica y vía remota",
    link: "https://www.ceenl.mx/VE2022/",
  },
  {
    id: 4,
    url: Carousel__imgpath(`./${"imgC_C/"}${"4.jpg"}`),
    alt: "Concursos Nacionales. Urna electrónica y vía remota",
    link: "https://www.ceenl.mx/VE2022/",
  },
  {
    id: 5,
    url: Carousel__imgpath(`./${"imgC_C/"}${"5.jpg"}`),
    alt: "Convocatoria Derecho Procesal Electoral",
    link: Carousel__pdfpath(`./${"carousel/"}${"12.pdf"}`),
  },
  {
    id: 6,
    url: Carousel__imgpath(`./${"imgC_C/"}${"6.jpg"}`),
    alt: "Maestría en Derecho Electoral",
    link: Carousel__pdfpath(`./${"carousel/"}${"13.pdf"}`),
  },
  {
    id: 7,
    url: Carousel__imgpath(`./${"imgC_C/"}${"7.jpg"}`),
    alt: "XXV Certamen de investigación y ensayo político",
    link: Carousel__pdfpath(`./${"carousel/"}${"14.pdf"}`),
  },
  {
    id: 8,
    url: Carousel__imgpath(`./${"imgC_C/"}${"8.png"}`),
    alt: "Quinto concurso nacional #PAridadEnCorto",
    link: "https://www.ceenl.mx/2022/cineminuto/",
  },
  {
    id: 9,
    url: Carousel__imgpath(`./${"imgC_C/"}${"9.png"}`),
    alt: "",
    link: "https://www.ceenl.mx/2022/cineminuto/",
  },
  {
    id: 10,
    url: Carousel__imgpath(`./${"imgC_C/"}${"10.jpg"}`),
    alt: "2do concurso nacional",
    link: "https://www.ceenl.mx/2022/historietas/",
  },
  {
    id: 11,
    url: Carousel__imgpath(`./${"imgC_C/"}${"11.jpg"}`),
    alt: "2do concurso nacional",
    link: "https://www.ceenl.mx/2022/historietas/",
  },
  {
    id: 12,
    url: Carousel__imgpath(`./${"imgC_C/"}${"12.jpg"}`),
    alt: "2do concurso nacional",
    link: "https://www.ceenl.mx/2022/historietas/",
  },
  {
    id: 13,
    url: Carousel__imgpath(`./${"imgC_C/"}${"13.jpg"}`),
    alt: "Consulta madres, padres y personas cuidadoras OpinNNAAn sobre crianza y cuidado",
    link: "https://ee.humanitarianresponse.info/x/aDfDnwx7",
  },
  {
    id: 14,
    url: Carousel__imgpath(`./${"imgC_C/"}${"14.jpg"}`),
    alt: "Cuarto Concurso Nacional de Estudios Políticos y Sociales",
    link: Carousel__imgpath(`./${"imgC_C/"}${"14.jpg"}`),
  },
  {
    id: 15,
    url: Carousel__imgpath(`./${"imgC_C/"}${"15.jpg"}`),
    alt: "Cuarto Concurso Nacional de Estudios Políticos y Sociales",
    link: Carousel__imgpath(`./${"imgC_C/"}${"15.jpg"}`),
  },
  {
    id: 16,
    url: Carousel__imgpath(`./${"imgC_C/"}${"16.jpg"}`),
    alt: "Diplomado de actualización en materia de juicio de amparo",
    link: Carousel__imgpath(`./${"imgC_C/"}${"16.jpg"}`),
  },
  {
    id: 17,
    url: Carousel__imgpath(`./${"imgC_C/"}${"17.png"}`),
    alt: "Primer concurso nacional de ensayo",
    link: Carousel__pdfpath(`./${"carousel/"}${"15.pdf"}`),
  },
];
