const PartidosPoliticos__pdfpath = require.context("../pdf/partidosPoliticos");

export const dataPartidosPoliticos = [
  {
    id: 1,
    titleItem: "Partidos Políticos Nacionales",
    typeDocument: "pdf",
    linkItem: PartidosPoliticos__pdfpath(`./${"1.pdf"}`),
  },
  {
    id: 2,
    titleItem: "Partidos Políticos Locales",
    typeDocument: "pdf",
    linkItem: PartidosPoliticos__pdfpath(`./${"2.pdf"}`),
  },
  {
    id: 3,
    titleItem: "Dirigencias Partidos Politicos Nacionales y Locales",
    typeDocument: "pdf",
    linkItem: PartidosPoliticos__pdfpath(`./${"3.pdf"}`),
  },
];
