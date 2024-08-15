const areas = {
  SE: "Secretaría Ejecutiva (SE)",
  ATCSyP: "Área Técnica de Comunicación Social y Prensa (ATCSyP)",
  ATI: "Área Técnica de Informática (ATI)",
  ATTAI: "Área Técnica de Transparencia y Acceso a la Información (ATTAI)",
  OIC: "Órgano Interno de Control (OIC)",
  DAJ: "Dirección de Asuntos Jurídicos (DAJ)",
  DOCEyEC:
    "Dirección de Organización, Capacitación Electoral y Educación Cívica (DOCEyEC)",
  DPAyF: "Dirección de Prerrogativas, Administración y Fiscalización (DPAyF)",
  ATCC: "Área Técnica de Consulta Ciudadana (ATCC)",
};

export const dataPOA = {
  2018: [
    { id: 1, area: "SE" },
    { id: 2, area: "ATCSyP" },
    { id: 3, area: "ATI" },
    { id: 4, area: "ATTAI" },
    { id: 5, area: "OIC" },
    { id: 6, area: "DAJ" },
    { id: 7, area: "DOCEyEC" },
    { id: 8, area: "DPAyF" },
  ],
  2019: [
    { id: 1, area: "SE" },
    { id: 2, area: "ATCSyP" },
    { id: 3, area: "ATCC" },
    { id: 4, area: "ATI" },
    { id: 5, area: "ATTAI" },
    { id: 6, area: "DAJ" },
    { id: 7, area: "DOCEyEC" },
    { id: 8, area: "DPAyF" },
  ],
  2020: [
    { id: 1, area: "SE" },
    { id: 2, area: "ATCSyP" },
    { id: 3, area: "ATCC" },
    { id: 4, area: "ATI" },
    { id: 5, area: "ATTAI" },
    { id: 6, area: "DAJ" },
    { id: 7, area: "DOCEyEC" },
    { id: 8, area: "DPAyF" },
  ],
  2024: [
    { id: 1, area: "SE" },
    { id: 2, area: "ATCSyP" },
    { id: 3, area: "ATI" },
    { id: 4, area: "ATTAI" },
    { id: 5, area: "OIC" },
    { id: 6, area: "DAJ" },
    { id: 7, area: "DOCEyEC" },
    { id: 8, area: "DPAyF" },
  ],
};

export const getPOAData = (year) =>
  dataPOA[year].map((poa) => ({
    id: poa.id,
    title: `${areas[poa.area]} ${year}`,
  }));
