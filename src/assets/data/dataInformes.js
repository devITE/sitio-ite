const Informes__imgpath = require.context("../../img");
const Informes__pdfpath = require.context("../pdf");

export const dataInformes = [
  {
    id: 0,
    url: Informes__imgpath(`./${"img_In/"}${"0.png"}`),
    alt: "Estudio muestral sobre la participación ciudadana en el Proceso Electoral Ordinario 2015-2016",
    link: Informes__pdfpath(`./${"informes/"}${"0.pdf"}`),
  },
  {
    id: 1,
    url: Informes__imgpath(`./${"img_In/"}${"1.jpg"}`),
    alt: "Informe país sobre la calidad de la ciudadanía en México",
    link: Informes__pdfpath(`./${"informes/"}${"1.pdf"}`),
  },
  {
    id: 2,
    url: Informes__imgpath(`./${"img_In/"}${"2.jpg"}`),
    alt: "Informe de Desempeño de la Operación del Sistema Informático del ITE",
    link: Informes__pdfpath(`./${"informes/"}${"2.pdf"}`),
  },
  {
    id: 3,
    url: Informes__imgpath(`./${"img_In/"}${"3.png"}`),
    alt: "Diviertete",
    link: Informes__imgpath(`./${"img_In/"}${"3.png"}`),
  },
  {
    id: 4,
    url: Informes__imgpath(`./${"img_In/"}${"4.jpg"}`),
    alt: "Informe Anual de Actividades 2020",
    link: Informes__pdfpath(`./${"informes/"}${"4.pdf"}`),
  },
  {
    id: 5,
    url: Informes__imgpath(`./${"img_In/"}${"5.jpeg"}`),
    alt: "Informes mensuales de encuestas",
    link: Informes__imgpath(`./${"img_In/"}${"5.jpeg"}`),
  },
  {
    id: 6,
    url: Informes__imgpath(`./${"img_In/"}${"6.jpg"}`),
    alt: "Catálogo de Presidencias de Comunidad",
    link: Informes__pdfpath(`./${"informes/"}${"6.pdf"}`),
  },
  {
    id: 7,
    url: Informes__imgpath(`./${"img_In/"}${"7.jpg"}`),
    alt: "",
    link: Informes__imgpath(`./${"img_In/"}${"7.jpg"}`),
  },
];
