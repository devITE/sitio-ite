const ProcesosElectorales__pdfpath = require.context("../pdf/procesosElect");

export const dataCasillas = [
  {
    id: 1,
    titleItem: "Lista de ubicación de casillas 1",
    linkItem: ProcesosElectorales__pdfpath(`./${"PE20152016/"}${"5.pdf"}`),
  },
  {
    id: 2,
    titleItem: "Lista de ubicación de casillas 2",
    linkItem: ProcesosElectorales__pdfpath(`./${"PE20152016/"}${"6.pdf"}`),
  },
  {
    id: 3,
    titleItem: "Lista de ubicación de casillas 3",
    linkItem: ProcesosElectorales__pdfpath(`./${"PE20152016/"}${"7.pdf"}`),
  },
  {
    id: 4,
    titleItem: "Lista de ubicación de casillas especiales",
    linkItem: ProcesosElectorales__pdfpath(`./${"PE20152016/"}${"8.pdf"}`),
  },
  {
    id: 5,
    titleItem:
      "Lista de ubicación de casillas de los municipios de Panotla, Totolac e Ixtacuixtla PELO 2018",
    linkItem: ProcesosElectorales__pdfpath(`./${"PE20152016/"}${"9.pdf"}`),
  },
];

export const dataEncuestas2016 = [
  {
    id: 1,
    titleItem: "Mayo ITE",
    linkItem: ProcesosElectorales__pdfpath(`./${"PE20152016/"}${"3.pdf"}`),
  },
  {
    id: 2,
    titleItem: "Gii360 Grupo Impacto",
    linkItem: ProcesosElectorales__pdfpath(`./${"PE20152016/"}${"4.pdf"}`),
  },
];

export const dataHistorial = [
  {
    id: 1,
    titleItem: "1995",
    children: [
      {
        id: 1,
        titleItem: "Diputados MR",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"1.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"2.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"3.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"4.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Gobernador",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"5.pdf"}`),
      },
      {
        id: 4,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"6.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"7.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"8.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"9.pdf"}`),
      },
      {
        id: 3,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"10.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"11.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"12.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"13.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Gobernador",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"14.pdf"}`),
      },
      {
        id: 4,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"15.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"16.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"17.pdf"}`),
      },
      {
        id: 3,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"18.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"19.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Diputados MR",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"20.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Gobernador",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"21.pdf"}`),
      },
      {
        id: 4,
        titleItem:
          "Integración de las formulas de diputados de representación proporcional",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"22.pdf"}`),
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
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"23.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Elección extraordinaria pc",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"24.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Ayuntamientos",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"25.pdf"}`),
      },
      {
        id: 4,
        titleItem: "Diputados MR",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"26.pdf"}`),
      },
      {
        id: 5,
        titleItem: "Presidencias de comunidad",
        linkItem: ProcesosElectorales__pdfpath(`./${"historial/"}${"27.pdf"}`),
      },
    ],
  },
];
