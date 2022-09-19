const Estrados__pdfpath = require.context("../pdf/estrados");

export const dataEstrados = [
  {
    id: 0,
    nameCedula: "CÉDULA DE PUBLICITACIÓN",
    linkCedula: Estrados__pdfpath(`./${"0.pdf"}`),
    nameFolio: "FOLIO 2511-FOLIO 2500-2022",
    linkFolio: Estrados__pdfpath(`./${"0.pdf"}`),
  },
  {
    id: 1,
    nameCedula: "CÉDULA DE PUBLICITACIÓN SANTIAGO SESÍN MALDONADO",
    linkCedula: Estrados__pdfpath(`./${"1.pdf"}`),
    nameFolio: "FOLIO 2511-2022",
    linkFolio: Estrados__pdfpath(`./${"1.1.pdf"}`),
  },
  {
    id: 2,
    nameCedula: "CÉDULA DE PUBLICITACIÓN",
    linkCedula: Estrados__pdfpath(`./${"0.pdf"}`),
    nameFolio: "FOLIO 2511-FOLIO 2500-2022",
    linkFolio: Estrados__pdfpath(`./${"0.pdf"}`),
  },
  {
    id: 3,
    nameCedula: "CÉDULA DE PUBLICITACIÓN SANTIAGO SESÍN MALDONADO",
    linkCedula: Estrados__pdfpath(`./${"1.pdf"}`),
    nameFolio: "FOLIO 2511-2022",
    linkFolio: Estrados__pdfpath(`./${"1.1.pdf"}`),
  },
];
