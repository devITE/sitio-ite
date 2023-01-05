const DESPEN__path = require.context("./");

export const dataCarousel = [
  {
    id: 1,
    url: DESPEN__path(`./${"img/avisos/"}${"1.png"}`),
    alt: "Convocatoria DESPEN 2022",
    itemActive: "active",
    buttonActive: "active",
    ariaCurrent: "true",
    link: "https://www.ine.mx/comunidad-ine/convocatoria-concurso-publico-2022-2023-de-ingreso-sistema-ople/",
  },
  {
    id: 2,
    url: DESPEN__path(`./${"img/avisos/"}${"2.png"}`),
    alt: "Convocatoria DESPEN 2022",
    link: "https://www.ine.mx/wp-content/uploads/2022/11/DESPEN_Pogramacion_exam_con_OPLE_2022_2023.pdf",
  },
  {
    id: 3,
    url: DESPEN__path(`./${"img/avisos/"}${"3.png"}`),
    alt: "Convocatoria DESPEN 2022",
    link: "https://www.ine.mx/wp-content/uploads/2022/11/DESPEN_Guia_Exam_casa_OPLE_2022_2023.pdf",
  },
  {
    id: 4,
    url: DESPEN__path(`./${"img/avisos/"}${"4.png"}`),
    alt: "Convocatoria DESPEN 2022",
    link: "https://www.ine.mx/wp-content/uploads/2022/11/DESPEN_Publicacion_Pers_conv_exam_OPLE_2022_2023.pdf",
  },
  {
    id: 5,
    url: DESPEN__path(`./${"img/avisos/"}${"5.jpg"}`),
    alt: "Convocatoria DESPEN 2022",
    link: DESPEN__path(`./${"img/avisos/"}${"5.jpg"}`),
  },
  {
    id: 6,
    url: DESPEN__path(`./${"img/avisos/"}${"6.jpg"}`),
    alt: "Convocatoria DESPEN 2022",
    link: DESPEN__path(`./${"img/avisos/"}${"6.jpg"}`),
  },
];
