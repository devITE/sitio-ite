const Normatividad__pdfpath = require.context("../pdf/normatividad");

export const dataNormatividad = [
  {
    id: 1,
    nameButton: "lFederales",
    titleButton: "Leyes Federales",
    children: [
      {
        id: 1,
        title: "Constitución Política de los Estados Unidos Mexicanos",
        path: Normatividad__pdfpath(`./${"lFederales"}${"1.pdf"}`),
      },
      {
        id: 2,
        title: "Ley Federal de Consulta Popular",
        path: Normatividad__pdfpath(`./${"lFederales"}${"2.pdf"}`),
      },
      {
        id: 3,
        title: "Ley General de Instituciones y Procedimientos Electorales",
        path: Normatividad__pdfpath(`./${"lFederales"}${"3.pdf"}`),
      },
      {
        id: 4,
        title: "Ley General de Partidos Políticos",
        path: Normatividad__pdfpath(`./${"lFederales"}${"4.pdf"}`),
      },
      {
        id: 5,
        title:
          "Ley General de Sistema de Medios de Impugnación en Materia Electoral",
        path: Normatividad__pdfpath(`./${"lFederales"}${"5.pdf"}`),
      },
      {
        id: 6,
        title: "Ley General de Transparencia y Acceso a la Información",
        path: Normatividad__pdfpath(`./${"lFederales"}${"6.pdf"}`),
      },
      {
        id: 7,
        title: "Ley General en Materia de Delitos Electorales",
        path: Normatividad__pdfpath(`./${"lFederales"}${"7.pdf"}`),
      },
      {
        id: 8,
        title: "Ley General de Archivo",
        path: Normatividad__pdfpath(`./${"lFederales"}${"8.pdf"}`),
      },
      {
        id: 9,
        title: "LLey General del Sistema Nacional Anticorrupción",
        path: Normatividad__pdfpath(`./${"lFederales"}${"9.pdf"}`),
      },
      {
        id: 10,
        title:
          "Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados",
        path: Normatividad__pdfpath(`./${"lFederales"}${"10.pdf"}`),
      },
      {
        id: 11,
        title: "Ley General de Contabilidad Gubernamental",
        path: Normatividad__pdfpath(`./${"lFederales"}${"11.pdf"}`),
      },
    ],
  },
  {
    id: 2,
    nameButton: "lEstatales",
    titleButton: "Leyes Estatales",
    children: [
      {
        id: 1,
        title: "Constitución Política del Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"1.pdf"}`),
      },
      {
        id: 2,
        title:
          "Ley de transparencia y Acceso a la Información Pública del Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"2.pdf"}`),
      },
      {
        id: 3,
        title: "Ley de Archivos del Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"3.pdf"}`),
      },
      {
        id: 4,
        title: "Ley de Consulta Ciudadana para el Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"4.pdf"}`),
      },
      {
        id: 5,
        title:
          "Ley de Instituciones y Procedimientos Electorales para el Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"5.pdf"}`),
      },
      {
        id: 6,
        title:
          "Ley de Medios de Impugnación en Materia Electoral para el Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"6.pdf"}`),
      },
      {
        id: 7,
        title: "Ley de Partidos Políticos para el Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"7.pdf"}`),
      },
      {
        id: 8,
        title:
          "Ley de Protección de Datos Personales en posesion de sujetos obligados para el Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"8.pdf"}`),
      },
      {
        id: 9,
        title:
          "Ley de Responsabilidades de los Servidores Públicos del Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"9.pdf"}`),
      },
      {
        id: 10,
        title: "Ley del sistema anticorrupcion del estado de tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"10.pdf"}`),
      },
      {
        id: 11,
        title:
          "Ley Laboral de los Servidores Públicos del Estado de Tlaxcala y sus Municipios",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"11.pdf"}`),
      },
      {
        id: 12,
        title:
          "Ley de Fiscalización Superior para el Estado de Tlaxcala y sus Municipios",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"12.pdf"}`),
      },
      {
        id: 13,
        title:
          "Ley de Procedimiento Administrativo del Estado de Tlaxcala y sus Municipios",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"13.pdf"}`),
      },
      {
        id: 14,
        title: "Ley Municipal del Estado de Tlaxcala",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"14.pdf"}`),
      },
      {
        id: 15,
        title:
          "Ley de Entrega  Recepción para el Estado de Tlaxcala y sus Municipios",
        path: Normatividad__pdfpath(`./${"lEstatales"}${"15.pdf"}`),
      },
    ],
  },
  {
    id: 3,
    nameButton: "reglamentos",
    titleButton: "Reglamentos",
    children: [
      {
        id: 1,
        title:
          "Reglamento del Instituto Tlaxcalteca de Elecciones en Materia de Transparencia y Acceso a la Información Pública",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"1.pdf"}`),
      },
      {
        id: 2,
        title:
          "Reglamento de Quejas y Denuncias del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"2.pdf"}`),
      },
      {
        id: 3,
        title:
          "Reglamento de Asistencia Técnica, Jurídica y Logística a las Comunidades que realizan elecciones de Presidentes de Comunidad por el Sistema de Usos y Costumbres",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"3.pdf"}`),
      },
      {
        id: 4,
        title:
          "Reglamento de la Oficialía Electoral del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"4.pdf"}`),
      },
      {
        id: 5,
        title: "Reglamento Interior del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"5.pdf"}`),
      },
      {
        id: 6,
        title:
          "Reglamento de los Consejos Distritales y Municipales Electorales del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"6.pdf"}`),
      },
      {
        id: 7,
        title:
          "Reglamento para la Clasificación y Desclasificación de la Información del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"7.pdf"}`),
      },
      {
        id: 8,
        title:
          "Reglamento registro cancelación de la acreditación activos de los partidos políticos",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"8.pdf"}`),
      },
      {
        id: 9,
        title:
          "Reglamento de Comisiones del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"9.pdf"}`),
      },
      {
        id: 10,
        title: "Reglamento de sesiones del Consejo General",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"10.pdf"}`),
      },
      {
        id: 11,
        title:
          "Reglamento del Comité de Igualdad Laboral y No Discriminación del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"11.pdf"}`),
      },
      {
        id: 12,
        title:
          "Reglamento de la Junta General Ejecutiva del Instituto Tlaxcalteca de Elecciones",
        path: Normatividad__pdfpath(`./${"reglamentos"}${"12.pdf"}`),
      },
    ],
  },
  {
    id: 4,
    nameButton: "compendio",
    titleButton: "Compendio Legislativo Electoral",
    children: [
      {
        id: 1,
        title: "Portada",
        path: Normatividad__pdfpath(`./${"compendio"}${"1.pdf"}`),
      },
      {
        id: 2,
        title: "Constitución Local",
        path: Normatividad__pdfpath(`./${"compendio"}${"2.pdf"}`),
      },
      {
        id: 3,
        title: "LIPEET",
        path: Normatividad__pdfpath(`./${"compendio"}${"3.pdf"}`),
      },
      {
        id: 4,
        title: "LPPET",
        path: Normatividad__pdfpath(`./${"compendio"}${"4.pdf"}`),
      },
      {
        id: 5,
        title: "LMIMEET",
        path: Normatividad__pdfpath(`./${"compendio"}${"5.pdf"}`),
      },
      {
        id: 6,
        title: "Delitos Electorales",
        path: Normatividad__pdfpath(`./${"compendio"}${"6.pdf"}`),
      },
      {
        id: 7,
        title: "Reglamentos y Lineamientos",
        path: Normatividad__pdfpath(`./${"compendio"}${"7.pdf"}`),
      },
    ],
  },
];
