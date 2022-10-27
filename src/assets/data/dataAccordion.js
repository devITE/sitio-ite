const Infografias__imgpath = require.context("../../img/imgEInf");

export const dataMenuInf = [
  {
    id: 1,
    titleItem: "2022",
    children: [
      {
        id: 1,
        titleButton: "Enero",
        subChildren: [
          {
            id: 1,
            alt: "Infografia Nahualt",
            link: Infografias__imgpath(`./${"2022/"}${"1.jpeg"}`),
          },
          {
            id: 2,
            alt: "Avisos de privacidad",
            link: Infografias__imgpath(`./${"2022/"}${"2.jpeg"}`),
          },
        ],
      },
      {
        id: 2,
        titleButton: "Febrero",
        subChildren: [
          {
            id: 1,
            alt: "Constitución de Partidos Políticos Locales",
            link: Infografias__imgpath(`./${"2022/"}${"3.jpg"}`),
          },
          {
            id: 2,
            alt: "Plebiscito 1",
            link: Infografias__imgpath(`./${"2022/"}${"4.jpeg"}`),
          },
          {
            id: 3,
            alt: "Plebiscito 2",
            link: Infografias__imgpath(`./${"2022/"}${"5.jpeg"}`),
          },
          {
            id: 4,
            alt: "¿Como nos identificamos'",
            link: Infografias__imgpath(`./${"2022/"}${"6.jpeg"}`),
          },
          {
            id: 5,
            alt: "Infografía 1",
            link: Infografias__imgpath(`./${"2022/"}${"7.jpeg"}`),
          },
        ],
      },
      {
        id: 3,
        titleButton: "Marzo",
        subChildren: [
          {
            id: 1,
            alt: "Sesiones de Consejo General",
            link: Infografias__imgpath(`./${"2022/"}${"8.jpg"}`),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    titleItem: "2021",
    children: [
      {
        id: 1,
        titleButton: "Enero",
        subChildren: [
          {
            id: 1,
            alt: "Transparencia",
            link: Infografias__imgpath(`./${"2021/"}${"1.jpg"}`),
          },
        ],
      },
      {
        id: 2,
        titleButton: "Febrero",
        subChildren: [
          {
            id: 1,
            alt: "Dirección de Asuntos Jurídicos",
            link: Infografias__imgpath(`./${"2021/"}${"2.jpg"}`),
          },
          {
            id: 2,
            alt: "Infografía 1",
            link: Infografias__imgpath(`./${"2021/"}${"3.jpg"}`),
          },
        ],
      },
      {
        id: 3,
        titleButton: "Marzo",
        subChildren: [
          {
            id: 1,
            alt: "Infografía 1",
            link: Infografias__imgpath(`./${"2021/"}${"4.jpg"}`),
          },
          {
            id: 2,
            alt: "Órgano Interno de Control",
            link: Infografias__imgpath(`./${"2021/"}${"5.jpeg"}`),
          },
        ],
      },
      {
        id: 4,
        titleButton: "Abril",
        subChildren: [
          {
            id: 1,
            alt: "Derechos ARCO",
            link: Infografias__imgpath(`./${"2021/"}${"6.jpg"}`),
          },
          {
            id: 2,
            alt: "Medidas sanitarias para el voto seguro",
            link: Infografias__imgpath(`./${"2021/"}${"7.jpg"}`),
          },
        ],
      },
      {
        id: 5,
        titleButton: "Mayo",
        subChildren: [
          {
            id: 1,
            alt: "Prep",
            link: Infografias__imgpath(`./${"2021/"}${"8.jpg"}`),
          },
          {
            id: 2,
            alt: "Referendum",
            link: Infografias__imgpath(`./${"2021/"}${"9.jpeg"}`),
          },
        ],
      },
      {
        id: 6,
        titleButton: "Junio",
        subChildren: [
          {
            id: 1,
            alt: "Proceso Electoral Local Ordinario ",
            link: Infografias__imgpath(`./${"2021/"}${"10.jpeg"}`),
          },
          {
            id: 2,
            alt: "Referendum",
            link: Infografias__imgpath(`./${"2021/"}${"11.jpeg"}`),
          },
        ],
      },
      {
        id: 7,
        titleButton: "Julio",
        subChildren: [
          {
            id: 1,
            alt: "Proceso Electoral Local Ordinario 2020-2021 Medios de Comunicación",
            link: Infografias__imgpath(`./${"2021/"}${"12.png"}`),
          },
          {
            id: 2,
            alt: "Plebiscito",
            link: Infografias__imgpath(`./${"2021/"}${"13.png"}`),
          },
        ],
      },
      {
        id: 8,
        titleButton: "Agosto",
        subChildren: [
          {
            id: 1,
            alt: "Financiamiento Público",
            link: Infografias__imgpath(`./${"2021/"}${"14.jpg"}`),
          },
          {
            id: 2,
            alt: "Plebiscito",
            link: Infografias__imgpath(`./${"2021/"}${"15.png"}`),
          },
        ],
      },
    ],
  },
];
export const dataImgInf = [
  {
    id: 1,
    yearImg: "2022",
    monthImg: "Enero",
    alt: "Img Enero ",
    link: "InfografiaLINK",
  },
  {
    id: 2,
    yearImg: "2022",
    monthImg: "Enero",
    alt: "InfografiaALT2",
    link: "InfografiaLINK2",
  },
  {
    id: 3,
    yearImg: "2022",
    monthImg: "Febrero",
    alt: "InfografiaALT2",
    link: "InfografiaLINK2",
  },
];
export const dataAccordionV2 = [
  {
    id: 1,
    titleItem: "2022",
    flushID: "2022",
    children: [
      {
        id: 1,
        titleButton: "Enero",
      },
      {
        id: 2,
        titleButton: "Febrero",
      },
      {
        id: 3,
        titleButton: "Marzo",
      },
    ],
  },
  {
    id: 2,
    titleItem: "2021",
    flushID: "2021",
    children: [
      {
        id: 1,
        titleButton: "Enero",
      },
      {
        id: 2,
        titleButton: "Febrero",
      },
      {
        id: 3,
        titleButton: "Marzo",
      },
      {
        id: 4,
        titleButton: "Abril",
      },
    ],
  },
];

export const dataAccordion = [
  {
    id: 1,
    idtitleItem: 1,
    titleItem: "Accordion item #1",
    flushID: "headingOOne",
  },
  {
    id: 2,
    idtitleItem: 1,
    titleItem: "Accordion item #2",
    flushID: "headingTTwo",
  },
];
