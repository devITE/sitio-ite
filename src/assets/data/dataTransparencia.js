const Transparencia_path = require.context("../");

export const dataDatosAbiertos = [
  {
    id: 1,
    titleItem: "Cultura Cívica",
    flushID: "culturaCivica",
    children: [
      {
        id: 1,
        idModal: "informeFinal",
        titleModal: "Informe final de participación",
        subChildren: [
          {
            id: 1,
            titleTheme: "Cultura Cívica",
            keyWords: "Participación Ciudadana, Informe",
            description:
              "Informe final de participación, meta colectiva número 8, miembros del SPEN adscritos al Instituto Tlaxcalteca de Elecciones",
            area: "ATCC-Área Técnica de Consulta Ciudadana",
            dateUpdate: "agosto 2021",
            contactName: "Lic. Paz",
            contactEmail: "pazesgon@itetlax.org.mx",
            nameCharge: "Titular del Área Técnica de Consulta Ciudadana",
            resourseTitle:
              "Informe final de participación meta colectiva número 8",
            resoursePath: Transparencia_path(
              `./${"word/transparencia/"}${"1.docx"}`
            ),
            typeDocument: "word",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    titleItem: "Comunicación Social",
    flushID: "comunicacionSocial",
    children: [
      {
        id: 1,
        idModal: "debates",
        titleModal:
          "Difusión de debates para el Proceso Electoral Local Ordinario",
        subChildren: [
          {
            id: 1,
            titleTheme: "Debates",
            keyWords: "Debate, difusión, candidatos",
            description:
              "Información relacionada a la implementación y participantes en los debates a partir de le Reforma Local Electoral (2015) en el Proceso Electoral Local Ordinario desde 2015 y hasta el 2021.",
            area: "ATCSyP- Área Técnica de Comunicación Social y Prensa",
            dateUpdate: "agosto 2021",
            contactName: "Mtra. Elízabeth González Serrano",
            contactEmail: "comunicacion@itetlax.org.mx",
            nameCharge:
              "Titular del Área Técnica de Comunicación Social y Prensa",
            resourseTitle:
              "Informe final de participación meta colectiva número 8",
            resoursePath: Transparencia_path(
              `./${"pdf/transparencia/datosAbiertos/"}${"1.pdf"}`
            ),
            typeDocument: "pdf",
          },
        ],
      },
      {
        id: 2,
        idModal: "difusoresPREP",
        titleModal: "Difusores oficiales PREP",
        subChildren: [
          {
            id: 1,
            titleTheme: "Programa de Resultados Electorales Preliminares",
            keyWords:
              "PREP, Difusores, Jornada Electoral, Medios de Comunicación",
            description:
              "Información relacionada a la presentación de los medios de comunicación designados para fingir como difusores oficiales del Programa de Resultados Electorales Preliminares (PREP).",
            dateUpdate: "agosto 2021",
            contactName: "Mtra. Elízabeth González Serrano",
            contactEmail: "comunicacion@itetlax.org.mx",
            nameCharge:
              "Titular del Área Técnica de Comunicación Social y Prensa",
            resourseTitle: "Anexo - Difusores Oficiales PREP",
            resoursePath: Transparencia_path(
              `./${"pdf/transparencia/datosAbiertos/"}${"2.pdf"}`
            ),
            typeDocument: "pdf",
          },
        ],
      },
      {
        id: 3,
        idModal: "monitoreo",
        titleModal: "Monitoreo de medios de comunicación",
        subChildren: [
          {
            id: 1,
            titleTheme: "Monitoreo",
            keyWords:
              "Medios de comunicación, Monitoreo, Impresos, Digital, Radio, Televisión, Programas, Proceso Electoral.",
            description:
              "Información referente al monitoreo de medios de comunicación, de espacios que difunden noticias en radio y televisión, así como monitoreo con perspectiva de género de medios de comunicación masiva.",
            dateUpdate: "agosto 2021",
            contactName: "Mtra. Elízabeth González Serrano",
            contactEmail: "comunicacion@itetlax.org.mx",
            nameCharge:
              "Titular del Área Técnica de Comunicación Social y Prensa",
            subChild: [
              {
                id: 1,
                resourseTitle: "Informe final MIyD",
                resoursePath: Transparencia_path(
                  `./${"pdf/transparencia/datosAbiertos/"}${"3.pdf"}`
                ),
                typeDocument: "pdf",
              },
              {
                id: 2,
                resourseTitle: "Informe final monitoreo PdG",
                resoursePath: Transparencia_path(
                  `./${"pdf/transparencia/datosAbiertos/"}${"4.pdf"}`
                ),
                typeDocument: "pdf",
              },
              {
                id: 3,
                resourseTitle: "Informe final monitoreo RyT",
                resoursePath: Transparencia_path(
                  `./${"pdf/transparencia/datosAbiertos/"}${"5.pdf"}`
                ),
                typeDocument: "pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    titleItem: "Organización Electoral",
    flushID: "organizacionElectoral",
    children: [
      {
        id: 1,
        idModal: "participacionPELO",
        titleModal:
          "La participación ciudadana en el Proceso Electoral Local Ordinario",
        subChildren: [
          {
            id: 1,
            titleTheme: "Participación Ciudadana",
            keyWords:
              "Elección, Participación, Ciudadanía, Estadística, Observadores",
            description:
              "Se realiza un análisis sobre la evolución de la participación ciudadana en los Procesos Electorales Locales Ordinarios de los años 2015, 2016 y 2018 en los diferentes municipios del estado de Tlaxcala.",
            area: "DOECyEC- Dirección de Organización Electoral Capacitación y Educación Cívica",
            dateUpdate: "agosto 2021",
            contactName: "Mtra. Miriam Yolisma Báez Hernández",
            contactEmail: "miriam.yolisma@itetlax.org.mx",
            nameCharge:
              "Directora de Organización Electoral, Capacitación y Educación Cívica",
            subChild: [
              {
                id: 1,
                resourseTitle: "Registro de candidatos Ayuntamientos ITE 2016",
                resoursePath: Transparencia_path(
                  `./${"excel/transparencia/"}${"1.xlsx"}`
                ),
                typeDocument: "excel",
              },
              {
                id: 2,
                resourseTitle: "Registro de candidatos Diputaciones ITE 2016",
                resoursePath: Transparencia_path(
                  `./${"excel/transparencia/"}${"2.xlsx"}`
                ),
                typeDocument: "excel",
              },
              {
                id: 3,
                resourseTitle: "Registro de candidatos Gubernatura ITE 2016",
                resoursePath: Transparencia_path(
                  `./${"excel/transparencia/"}${"3.xlsx"}`
                ),
                typeDocument: "excel",
              },
              {
                id: 4,
                resourseTitle:
                  "Registro de candidatos Presidencias de Comunidad ITE 2016",
                resoursePath: Transparencia_path(
                  `./${"excel/transparencia/"}${"4.xlsx"}`
                ),
                typeDocument: "excel",
              },
              {
                id: 5,
                resourseTitle: "Registro de candidaturas 2021",
                resoursePath: Transparencia_path(
                  `./${"excel/transparencia/"}${"5.xlsx"}`
                ),
                typeDocument: "excel",
              },
              {
                id: 6,
                resourseTitle: "Registro de candidaturas Tlaxcala 2018",
                resoursePath: Transparencia_path(
                  `./${"excel/transparencia/"}${"6.xlsx"}`
                ),
                typeDocument: "excel",
              },
              {
                id: 7,
                resourseTitle: "Respuesta a los puntos 1, 2 y 3",
                resoursePath: Transparencia_path(
                  `./${"word/transparencia/datosAbiertos/"}${"2.docx"}`
                ),
                typeDocument: "word",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const dataReglamento = [
  {
    id: 1,
    titleItem: "Reglamento Interior del Instituto Tlaxcalteca de Elecciones",
    typeDocument: "pdf",
    linkItem: Transparencia_path(`./${"pdf/transparencia/"}${"2.pdf"}`),
  },
];

export const dataJuridico = [
  {
    id: 1,
    titleItem:
      "Organismos Electorales Federales, Organismos Electorales Locales",
    typeDocument: "pdf",
    linkItem: Transparencia_path(`./${"pdf/transparencia/"}${"3.pdf"}`),
  },
];
