const Estrados__pdfpath = require.context("../pdf/estrados");

export const dataEstrados = [
  {
    id: 1,
    nameCedula: "CÉDULA DE PUBLICITACIÓN FOLIO 3211",
    linkCedula: Estrados__pdfpath(`./${"1.pdf"}`),
    nameFolio: "FOLIO 3211-2022",
    linkFolio: Estrados__pdfpath(`./${"1.1.pdf"}`),
  },
  {
    id: 2,
    nameCedula: "CÉDULA DE PUBLICITACIÓN FOLIO 3212",
    linkCedula: Estrados__pdfpath(`./${"1.pdf"}`),
    nameFolio: "FOLIO 3212-2022",
    linkFolio: Estrados__pdfpath(`./${"1.1.pdf"}`),
  },
];
