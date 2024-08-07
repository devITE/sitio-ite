import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

export const InfografiasArchivo = () => {
  useEffect(() => {
    document.title = `Infografias Archivo`;
  }, []);
  return (
    <>
      <Breadcrumbs path={[{ label: "Infografías Archivos" }]} />
      <TitlePages title="Archivo" subTitle="Infografías" />
    </>
  );
};

export default InfografiasArchivo;
