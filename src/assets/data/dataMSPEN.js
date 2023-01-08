const MSPEN__path = require.context("../../assets");

export const dataMSPEN = [
  {
    id: 1,
    titleItem: "Representantes Acreditados",
    flushID: "RepresentantesAcreditados",
    children: [
      {
        id: 1,
        titleItem: "Representantes ante al ITE",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"1.pdf"}`),
      },
    ],
  },
  {
    id: 2,
    titleItem: "Registro de Candidatos",
    flushID: "RegistroCandidatos",
    children: [
      {
        id: 1,
        titleItem: "Tablas de Partidos Políticos e Independientes",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"2.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Tablas de Partidos Políticos(Suplencias)",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"3.pdf"}`),
      },
      {
        id: 3,
        titleItem: "Suplencias Partidos Políticos 07-Junio-2018",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"4.pdf"}`),
      },
      {
        id: 4,
        titleItem: "Suplencias Partidos Políticos",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"5.pdf"}`),
      },
    ],
  },
  {
    id: 3,
    titleItem: "Documentos Básicos",
    flushID: "DocumentosBasicos",
    children: [
      {
        id: 1,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PAN.png",
        alt: "Partido Acción Nacional",
        titleItem: "Documentos Básicos PAN (30-08-2018)",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 2,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PRI.png",
        alt: "Partido Revolucionario Institucional",
        titleItem: "Documentos Básicos PRI (30-08-2018)",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 3,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PRD.png",
        alt: "Partido de la Revolución Democrática",
        titleItem: "Documentos Básicos PRD (30-08-2018)",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 4,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PT.png",
        alt: "Partido del Trabajo",
        titleItem: "Documentos Básicos PT (30-08-2018)",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 5,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PVEM.png",
        alt: "Partido Verde Ecologista de México",
        titleItem: "Documentos Básicos PVEM (30-08-2018)",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 6,
        img: "https://itetlax.org.mx/assets/img/iconsPP/MC.png",
        alt: "Movimiento Ciudadano",
        titleItem: "Documentos Básicos Movimiento Ciudadano (30-08-2018)",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 7,
        img: "https://itetlax.org.mx/assets/img/iconsPP/NA.png",
        alt: "Nueva Alianza",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 8,
        img: "https://itetlax.org.mx/assets/img/iconsPP/MORENA.png",
        alt: "Morena",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 9,
        img: "https://itetlax.org.mx/assets/img/iconsPP/ES.png",
        alt: "Encuentro Social",
        titleItem: "Documentos Básicos Encuentro Social (30-08-2018)",
        typeDocument: "link",
        linkItem:
          "http://actores-politicos.ine.mx/actores-politicos/partidos-politicos/nacionales/",
      },
      {
        id: 10,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PS.png",
        alt: "Partido Socialista",
        titleItem: "Estatútos PS (30-08-2018)",
        typeDocument: "zip",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"PS.zip"}`),
      },
      {
        id: 11,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PAC.png",
        alt: "Partido Alianza Ciudadana",
        titleItem: "Documentos Básicos PAC (30-08-2018)",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"6.pdf"}`),
      },
    ],
  },
  {
    id: 4,
    titleItem: "Plataformas Electorales",
    flushID: "PlataformasElectorales",
    children: [
      {
        id: 1,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PAN.png",
        alt: "Partido Acción Nacional",
        titleItem: "Partido Acción Nacional (PAN)",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"7.pdf"}`),
      },
      {
        id: 2,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PRI.png",
        alt: "Partido Revolucionario Institucional",
        titleItem: "Partido Revolucionairio Estatal",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"8.pdf"}`),
      },
      {
        id: 3,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PRD.png",
        alt: "Partido de la Revolución Democrática",
        titleItem: "Partido de la Revolución Democrática",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"9.pdf"}`),
      },
      {
        id: 4,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PT.png",
        alt: "Partido del Trabajo",
        titleItem: "Partido del Trabajo",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"10.pdf"}`),
      },
      {
        id: 5,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PVEM.png",
        alt: "Partido Verde Ecologista de México",
        titleItem: "Partido Verde Ecologista de México",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"11.pdf"}`),
      },
      {
        id: 6,
        img: "https://itetlax.org.mx/assets/img/iconsPP/MC.png",
        alt: "Movimiento Ciudadano",
        titleItem: "Movimiento Ciudadano",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"12.pdf"}`),
      },
      {
        id: 7,
        img: "https://itetlax.org.mx/assets/img/iconsPP/NA.png",
        alt: "Nueva Alianza",
        titleItem: "Nueva Alianza",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"13.pdf"}`),
      },
      {
        id: 8,
        img: "https://itetlax.org.mx/assets/img/iconsPP/MORENA.png",
        alt: "Morena",
        titleItem: "Morena",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"14.pdf"}`),
      },
      {
        id: 9,
        img: "https://itetlax.org.mx/assets/img/iconsPP/ES.png",
        alt: "Encuentro Social",
        titleItem: "Encuentro Social",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"15.pdf"}`),
      },
      {
        id: 10,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PAC.png",
        alt: "Partido Alianza Ciudadana",
        titleItem: "Partido Socialista",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"16.pdf"}`),
      },
      {
        id: 11,
        img: "https://itetlax.org.mx/assets/img/iconsPP/PS.png",
        alt: "Partido Socialista",
        titleItem: "Partido Alianza Ciudadana",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"17.pdf"}`),
      },
    ],
  },
  {
    id: 5,
    titleItem: "Financiamiento Público",
    flushID: "FinanciamientoPublico",
    children: [
      {
        id: 1,
        titleItem: "Financiamiento Público 2018",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"18.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Acuerdo del ITE",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"19.pdf"}`),
      },
    ],
  },
  {
    id: 6,
    titleItem: "Topes de Gastos",
    flushID: "TopesGastos",
    children: [
      {
        id: 1,
        titleItem: "Precampaña 2018",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"20.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Campaña 2018",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"21.pdf"}`),
      },
    ],
  },
  {
    id: 7,
    titleItem: "Acceso a Medios de Comunicación",
    flushID: "AccesoMediosComunicacion",
    children: [
      {
        id: 1,
        titleItem: "Acuerdo de Pautas de Radio y Televisión",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"22.pdf"}`),
      },
      {
        id: 2,
        titleItem: "Acuerdo de Lineamientos de Radio y Televisión",
        typeDocument: "pdf",
        linkItem: MSPEN__path(`./${"pdf/partidosPoliticos/"}${"23.pdf"}`),
      },
    ],
  },
];
