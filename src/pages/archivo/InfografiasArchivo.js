import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";

export const InfografiasArchivo = () => {
  useEffect(() => {
    document.title = `Infografias Archivo`;
  }, []);
  return (
    <>
      <TitlePages title="Archivo" subTitle="Infografías" />
    </>
  );
};

export default InfografiasArchivo;
