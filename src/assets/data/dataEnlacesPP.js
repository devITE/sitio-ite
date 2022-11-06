const PartidosPoliticos__pdfpath = require.context("../pdf/partidosPoliticos");

export const dataPartidosPoliticos = [
  {
    id: 1,
    titleItem: "Partidos Políticos Nacionales",
    linkItem: PartidosPoliticos__pdfpath(`./${"1.pdf"}`),
  },
  {
    id: 2,
    titleItem: "Partidos Políticos Locales",
    linkItem: PartidosPoliticos__pdfpath(`./${"2.pdf"}`),
  },
  {
    id: 3,
    titleItem: "Dirigencias Partidos Politicos Nacionales y Locales",
    linkItem: PartidosPoliticos__pdfpath(`./${"3.pdf"}`),
  },
];
