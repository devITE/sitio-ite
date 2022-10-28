const OIC_pdfpath = require.context("../pdf/OIC");
const OIC_imgpath = require.context("../../img/OIC");

export const dataGaleria = [
  {
    id: 1,
    nameItem: 1,
    titleItem:
      "2do. Foro de Capacitación para los Órganos Internos de Control de Institutos Electorales, 15 y 16 de agosto de 2022",
    flushID: "heading1",
    children: [
      {
        id: 1,
        carouselID: "galeria1",
        subChildren: [
          {
            id: 1,
            url: OIC_imgpath(`./${"g1/"}${"1.jpg"}`),
            alt: "Agenda de Asambleas",
            itemActive: "active",
            buttonActive: "active",
            ariaCurrent: "true",
            link: OIC_imgpath(`./${"g1/"}${"1.jpg"}`),
          },
          {
            id: 2,
            url: OIC_imgpath(`./${"g1/"}${"2.jpg"}`),
            alt: "Verificación de afiliación",
            link: OIC_imgpath(`./${"g1/"}${"2.jpg"}`),
          },
        ],
      },
    ],
  },
  // {
  //   id: 2,
  //   nameItem: 2,
  //   titleItem:
  //     "Capacitación denominada Declaraciones Patrimoniales ,Faltas Administrativas y Código de Ética",
  //   flushID: "heading2",
  // },
  // {
  //   id: 3,
  //   nameItem: 3,
  //   titleItem: "Presentación del Código de Ética",
  //   flushID: "heading3",
  // },
  // {
  //   id: 4,
  //   nameItem: 4,
  //   titleItem: "",
  //   flushID: "heading4",
  // },
  // {
  //   id: 5,
  //   nameItem: 5,
  //   titleItem: "",
  //   flushID: "heading5",
  // },
  // {
  //   id: 6,
  //   nameItem: 6,
  //   titleItem: "",
  //   flushID: "heading6",
  // },
];

export const dataEstructuraOrganica = [
  {
    id: 1,
    titleItem: "Estructura Orgánica (Fracción II)",
    linkItem: OIC_pdfpath(`./${"1.pdf"}`),
  },
  {
    id: 2,
    titleItem: "Organigrama del OIC",
    linkItem: OIC_pdfpath(`./${"2.pdf"}`),
  },
];

export const dataNormatividad = [
  {
    id: 1,
    titleItem:
      "REGLAMENTO DEL ÓRGANO INTERNO DE CONTROL DEL INSTITUTO TLAXCALTECA DE ELECCIONES",
    linkItem: OIC_pdfpath(`./${"3.pdf"}`),
  },
  {
    id: 2,
    titleItem:
      "LINEAMIENTOS DE AUDITORIA DEL ÓRGANO INTERNO DE CONTROL DEL ITE",
    linkItem: OIC_pdfpath(`./${"4.pdf"}`),
  },
  {
    id: 3,
    titleItem:
      "LINEAMIENTOS PARA LA INVESTIGACION Y TRÁMITE DE LOS PROCEDIMIENTOS DE RESPONSABILIDAD ADMINISTRATIVA DE LOS SERVIDORES PUBLICOS DEL INSTITUTO TLAXCALTECA DE ELECCIONES",
    linkItem: OIC_pdfpath(`./${"5.pdf"}`),
  },
  {
    id: 4,
    titleItem:
      "LEY DE TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA DEL ESTADO DE TLAXCALA",
    linkItem: OIC_pdfpath(`./${"6.pdf"}`),
  },
  {
    id: 5,
    titleItem: "CONSTITUCIÓN PÓLITICA EU MEXICANOS",
    linkItem: OIC_pdfpath(`./${"7.pdf"}`),
  },
  {
    id: 6,
    titleItem: "CONSTITUCIÓN POLÍTICA DEL ESTADO LIBRE Y SOBERANO DE TLAXCALA",
    linkItem: OIC_pdfpath(`./${"8.pdf"}`),
  },
  {
    id: 7,
    titleItem:
      "LEY DE INSTITUCIONES Y PROCEDIMIENTOS ELECTORALES PARA EL ESTADO DE TLAXCALA",
    linkItem: OIC_pdfpath(`./${"9.pdf"}`),
  },
  {
    id: 8,
    titleItem: "LEY FISCALIZACIÓN OFS",
    linkItem: OIC_pdfpath(`./${"10.pdf"}`),
  },
  {
    id: 9,
    titleItem: "LG RESPONSABILIDADES ADMINISTRATIVAS 22 11 21",
    linkItem: OIC_pdfpath(`./${"11.pdf"}`),
  },
];

export const dataPOA = [
  {
    id: 1,
    titleItem: "Programa Operativo Anual 2022",
    linkItem: OIC_pdfpath(`./${"12.pdf"}`),
  },
];

export const dataSemblanza = [
  {
    id: 1,
    titleItem: "Curriculum Vitae - C.P.Johancy Aquiahuatl Denicia",
    linkItem: OIC_pdfpath(`./${"13.pdf"}`),
  },
];

export const dataCodigoEtica = [
  {
    id: 1,
    titleItem: "Código de Ética",
    linkItem: OIC_pdfpath(`./${"14.pdf"}`),
  },
];
