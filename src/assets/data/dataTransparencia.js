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
        titleTheme: "Cultura Cívica",
        keyWords: "Participación Ciudadana, Informe",
        description:
          "Informe final de participación, meta colectiva número 8, miembros del SPEN adscritos al Instituto Tlaxcalteca de Elecciones",
        area: "ATCC-Área Técnica de Consulta Ciudadana",
        dateUpdate: "agosto 2021",
        contactName: "Lic. Paz",
        contactEmail: "pazesgon@itetlax.org.mx",
        nameCharge: "Titular del Área Técnica de Consulta Ciudadana",
        subChildren: [
          {
            id: 1,
            resourseTitle:
              "Informe final de participación meta colectiva número 8",
            resoursePath: Transparencia_path(
              `./${"word/transparencia/datosAbiertos/"}${"1.docx"}`
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
        titleTheme: "Debates",
        keyWords: "Debate, difusión, candidatos",
        description:
          "Información relacionada a la implementación y participantes en los debates a partir de le Reforma Local Electoral (2015) en el Proceso Electoral Local Ordinario desde 2015 y hasta el 2021.",
        area: "ATCSyP- Área Técnica de Comunicación Social y Prensa",
        dateUpdate: "agosto 2021",
        contactName: "Mtra. Elízabeth González Serrano",
        contactEmail: "comunicacion@itetlax.org.mx",
        nameCharge: "Titular del Área Técnica de Comunicación Social y Prensa",
        subChildren: [
          {
            id: 1,
            resourseTitle: "Anexo - Debates",
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
        titleTheme: "Programa de Resultados Electorales Preliminares",
        keyWords: "PREP, Difusores, Jornada Electoral, Medios de Comunicación",
        description:
          "Información relacionada a la presentación de los medios de comunicación designados para fingir como difusores oficiales del Programa de Resultados Electorales Preliminares (PREP).",
        area: "ATCSyP- Área Técnica de Comunicación Social y Prensa",
        dateUpdate: "agosto 2021",
        contactName: "Mtra. Elízabeth González Serrano",
        contactEmail: "comunicacion@itetlax.org.mx",
        nameCharge: "Titular del Área Técnica de Comunicación Social y Prensa",
        subChildren: [
          {
            id: 1,
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
        titleTheme: "Monitoreo",
        keyWords:
          "Medios de comunicación, Monitoreo, Impresos, Digital, Radio, Televisión, Programas, Proceso Electoral.",
        description:
          "Información referente al monitoreo de medios de comunicación, de espacios que difunden noticias en radio y televisión, así como monitoreo con perspectiva de género de medios de comunicación masiva.",
        area: "ATCSyP- Área Técnica de Comunicación Social y Prensa",
        dateUpdate: "agosto 2021",
        contactName: "Mtra. Elízabeth González Serrano",
        contactEmail: "comunicacion@itetlax.org.mx",
        nameCharge: "Titular del Área Técnica de Comunicación Social y Prensa",
        subChildren: [
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
  {
    id: 3,
    titleItem: "Organización Electoral",
    flushID: "organizacionElectoral",
    children: [
      {
        id: 1,
        idModal: "organizacionElectoral",
        titleModal:
          "La participación ciudadana en el Proceso Electoral Local Ordinario",
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
        subChildren: [
          {
            id: 1,
            resourseTitle: "Registro de candidatos Ayuntamientos ITE 2016",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"1.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 2,
            resourseTitle: "Registro de candidatos Diputaciones ITE 2016",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"2.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 3,
            resourseTitle: "Registro de candidatos Gubernatura ITE 2016",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"3.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 4,
            resourseTitle:
              "Registro de candidatos Presidencias de Comunidad ITE 2016",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"4.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 5,
            resourseTitle: "Registro de candidaturas 2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"5.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 6,
            resourseTitle: "Registro de candidaturas Tlaxcala 2018",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"6.xlsx"}`
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
  {
    id: 4,
    titleItem: "Actividades del Consejo General",
    flushID: "actividadesCG",
    children: [
      {
        id: 1,
        idModal: "informeCG",
        titleModal:
          "Informe de actividades realizadas por el Consejo General y la Junta General Ejecutiva",
        titleTheme: "Consejo General",
        keyWords:
          "Acuerdos, Sesiones, Dictámenes, Consejo General, Junta General Ejecutiva",
        description:
          "Informe de actividades realizadas por el Consejo General y por la Junta General Ejecutiva del Instituto Tlaxcalteca de Elecciones",
        area: "SE- Secretaría Ejecutiva",
        dateUpdate: "agosto 2021",
        contactName: "Lic. Germán Mendoza Papalotzi",
        contactEmail: "secretaria@itetlax.org.mx",
        nameCharge: "Secretario Ejecutivo",
        subChildren: [
          {
            id: 1,
            resourseTitle: "Anexo - Secretaría Ejecutiva",
            resoursePath: Transparencia_path(
              `./${"word/transparencia/datosAbiertos/"}${"3.docx"}`
            ),
            typeDocument: "word",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    titleItem: "Partidos Políticos",
    flushID: "partidosPoliticos",
    children: [
      {
        id: 1,
        idModal: "deuccionesPP",
        titleModal:
          "Deducciones al financiamiento público de los partidos políticosDifusión de debates para el Proceso Electoral Local Ordinario",
        titleTheme: "Partidos Políticos",
        keyWords: "Financiamiento, Multas, Partidos políticos, Sanciones",
        description:
          "Ministraciones mensuales efectivas -sin multas y sanciones- a los partidos políticos correspondiente al ejercicio fiscal 2021",
        area: "DPAyF- Dirección de Prerrogativas, Administración y Fiscalización",
        dateUpdate: "15 de julio 2021",
        contactName: "C.P. Janeth Miriam Romano Torres",
        contactEmail: "janeth.romano@itetlax.org.mx",
        nameCharge:
          "Directora de Prerrogativas, Administración y Fiscalización",
        subChildren: [
          {
            id: 1,
            resourseTitle:
              "Deducciones al financiamiento público de los partidos políticos",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"7.xlsx"}`
            ),
            typeDocument: "excel",
          },
        ],
      },
      {
        id: 2,
        idModal: "padronAfiliados",
        titleModal: "Padrón de afiliados",
        titleTheme: "Partidos Políticos",
        keyWords: "Padrón de afiliados, Partidos políticos",
        description:
          "Resultado de la verificación del cumplimiento del número mínimo de militantes de los Partidos Políticos.",
        area: "DPAyF - Dirección de Prerrogativas, Administración y Fiscalización",
        dateUpdate: "14 de julio 2021",
        contactName: "C.P. Janeth Miriam Romano Torres",
        contactEmail: "janeth.romano@itetlax.org.mx",
        nameCharge:
          "Directora de Prerrogativas, Administración y Fiscalización",
        subChildren: [
          {
            id: 1,
            resourseTitle: "Afiliados SI 14-07-2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"8.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 2,
            resourseTitle: "Afiliados NAT 14-07-2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"9.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 3,
            resourseTitle: "Afiliados PAC 14-07-2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"10.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 4,
            resourseTitle: "Afiliados PEST 14-07-2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"11.xlsx"}`
            ),
            typeDocument: "excel",
          },
          {
            id: 5,
            resourseTitle: "Afiliados PS 14-07-2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"12.xlsx"}`
            ),
            typeDocument: "excel",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    titleItem: "Régimen Sancionador",
    flushID: "regimenSancionador",
    children: [
      {
        id: 1,
        idModal: "procedmientosES",
        titleModal: "Procedimientos Especiales Sancionadores 2021",
        titleTheme: "Régimen Sancionador",
        keyWords: "Procedimiento Especial Sancionador",
        description:
          "Información correspondiente al folio, mes de presentación, cuaderno de antecedentes, número de expediente, vía, conductas de intimidación o molestias y estatus de la queja, respecto de aquellas tramitadas mediante el Procedimiento Especial Sancionador.",
        area: "UTCE - Unidad Técnica de lo Contencioso Electoral",
        dateUpdate: "27 de agosto 2021",
        contactName: "Lic. Eloy Edmundo Hernández Fierro",
        contactEmail: "eloy.hernandez@itetlax.org.mx",
        nameCharge: "Titular de la Unidad Técnica de lo Contencioso Electoral",
        subChildren: [
          {
            id: 1,
            resourseTitle: "Concentrado PES 2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"13.xlsx"}`
            ),
            typeDocument: "excel",
          },
        ],
      },
      {
        id: 2,
        idModal: "regimenSan",
        titleModal: "Régimen Sancionador",
        titleTheme: "Procedimiento Ordinario Sancionador",
        keyWords: "Procedimiento Ordinario Sancionador, Resolución, Expediente",
        description:
          "Información correspondiente al folio, mes de presentación, cuaderno de antecedentes, número de expediente, vía, conductas de intimidación o molestias y estatus de la queja, respecto de aquellas tramitadas mediante el Procedimiento Ordinario Sancionador.",
        area: "UTCE - Unidad Técnica de lo Contencioso Electoral",
        dateUpdate: "agosto 2021",
        contactName: "Mtra. Rubí Jazmín Gutiérrez García",
        contactEmail: "jazmin.gutierrez@itetlax.org.mx",
        nameCharge: "Titular de la Unidad Técnica de lo Contencioso Electoral",
        subChildren: [
          {
            id: 1,
            resourseTitle: "ANEXO UTCE",
            resoursePath: Transparencia_path(
              `./${"pdf/transparencia/datosAbiertos/"}${"6.pdf"}`
            ),
            typeDocument: "pdf",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    titleItem: "Transparencia",
    flushID: "transparencia",
    children: [
      {
        id: 1,
        idModal: "presupuesto2021",
        titleModal: "Presupuesto otorgado al Instituto 2021",
        titleTheme: "Transparencia",
        keyWords: "Presupuesto, Capítulos, Prerrogativas, Partidos políticos",
        description:
          "Información relativa al presupuesto otorgado al Instituto Tlaxcalteca de Elecciones durante el ejercicio 2021, dividido por meses y capítulos, total de prerrogativas de los Partidos Políticos y presupuesto destinado a las actividades y funcionamiento del Instituto",
        area: "DPAyF- Dirección de Prerrogativas, Administración y Fiscalización",
        dateUpdate: "15 de julio 2021",
        contactName: "C.P. Janeth Miriam Romano Torres",
        contactEmail: "janeth.romano@itetlax.org.mx",
        nameCharge:
          "Directora de Prerrogativas, Administración y Fiscalización",
        subChildren: [
          {
            id: 1,
            resourseTitle: "Presupuesto otorgado al Instituto 2021",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"14.xlsx"}`
            ),
            typeDocument: "excel",
          },
        ],
      },
      {
        id: 2,
        idModal: "actualizacionPresupuesto",
        titleModal:
          "Presupuesto Otorgado al Instituto Tlaxcalteca de Elecciones",
        titleTheme: "Presupuesto",
        keyWords: "Presupuesto, Sueldos, Gastos, Servicios, Partidos Políticos",
        description:
          "Información relacionada con el presupuesto 2021 otorgado al Instituto Tlaxcalteca de Elecciones, designado para las actividades del mismo y su funcionamiento, asimismo de prerrogativas destinadas a los Partidos Políticos.",
        area: "DPAyF- Dirección de Prerrogativas, Administración y Fiscalización",
        dateUpdate: "agosto 2021",
        contactName: "C.P. Janeth Miriam Romano Torres",
        contactEmail: "janeth.romano@itetlax.org.mx",
        nameCharge:
          "Directora de Prerrogativas, Administración y Fiscalización",
        subChildren: [
          {
            id: 1,
            resourseTitle: "Presupuesto otorgado al Instituto",
            resoursePath: Transparencia_path(
              `./${"excel/transparencia/datosAbiertos/"}${"15.xlsx"}`
            ),
            typeDocument: "excel",
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
