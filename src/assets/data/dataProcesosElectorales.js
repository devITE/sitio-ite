const Historial__pdfpath = require.context("../pdf/procesosElect");

export const dataHistorial = [
  {
    id: 1,
    titleItem: "1995",
    children: [
      {
        id: 1,
        titleItem: "Diputados MR",
        linkItem: Historial__pdfpath(`./${"historial/"}${"1.pdf"}`),
      },
    ],
  },
  {
    id: 2,
    titleItem: "1996",
    children: [
      {
        id: 1,
        titleItem: "Elección Extraordinaria de los 16 municipios",
        linkItem: Historial__pdfpath(`./${"historial/"}${"2.pdf"}`),
      },
    ],
  },
  {
    id: 3,
    titleItem: "1998",
    children: [
      {
        id: 1,
        titleItem: "Ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"3.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: Historial__pdfpath(`./${"historial/"}${"4.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Gobernador",
        linkItem: Historial__pdfpath(`./${"historial/"}${"5.pdf"}`),
      },
      {
        id: 4,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: Historial__pdfpath(`./${"historial/"}${"6.pdf"}`),
      },
    ],
  },
  {
    id: 4,
    titleItem: "1999",
    children: [
      {
        id: 1,
        titleItem: "Elección extraordinaria de ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"7.pdf"}`),
      },
    ],
  },
  {
    id: 5,
    titleItem: "2001",
    children: [
      {
        id: 1,
        titleItem: "Ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"8.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: Historial__pdfpath(`./${"historial/"}${"9.pdf"}`),
      },
      {
        id: 3,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: Historial__pdfpath(`./${"historial/"}${"10.pdf"}`),
      },
    ],
  },
  {
    id: 6,
    titleItem: "2002",
    children: [
      {
        id: 1,
        titleItem: "Elección extraordinaria de ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"11.pdf"}`),
      },
    ],
  },
  {
    id: 7,
    titleItem: "2004",
    children: [
      {
        id: 1,
        titleItem: "Ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"12.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: Historial__pdfpath(`./${"historial/"}${"13.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Gobernador",
        linkItem: Historial__pdfpath(`./${"historial/"}${"14.pdf"}`),
      },
      {
        id: 4,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: Historial__pdfpath(`./${"historial/"}${"15.pdf"}`),
      },
    ],
  },
  {
    id: 8,
    titleItem: "2007",
    children: [
      {
        id: 1,
        titleItem: "Ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"16.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados",
        linkItem: Historial__pdfpath(`./${"historial/"}${"17.pdf"}`),
      },
      {
        id: 3,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: Historial__pdfpath(`./${"historial/"}${"18.pdf"}`),
      },
    ],
  },
  {
    id: 9,
    titleItem: "2010",
    children: [
      {
        id: 1,
        titleItem: "Ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"19.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: Historial__pdfpath(`./${"historial/"}${"20.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Gobernador",
        linkItem: Historial__pdfpath(`./${"historial/"}${"21.pdf"}`),
      },
      {
        id: 4,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: Historial__pdfpath(`./${"historial/"}${"22.pdf"}`),
      },
    ],
  },
  {
    id: 10,
    titleItem: "2013",
    children: [
      {
        id: 1,
        titleItem:
          "Integración de las formulas de diputados de representación popular",
        linkItem: Historial__pdfpath(`./${"historial/"}${"23.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Elección extraordinaria pc",
        linkItem: Historial__pdfpath(`./${"historial/"}${"24.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Ayuntamientos",
        linkItem: Historial__pdfpath(`./${"historial/"}${"25.pdf"}`),
      },
      {
        id: 4,
        titleItem: "Diputados MR",
        linkItem: Historial__pdfpath(`./${"historial/"}${"26.pdf"}`),
      },
      {
        id: 5,
        titleItem: "Presidencias de comunidad",
        linkItem: Historial__pdfpath(`./${"historial/"}${"27.pdf"}`),
      },
    ],
  },
];
