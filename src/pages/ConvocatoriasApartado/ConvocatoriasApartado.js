import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Convocatorias from "../../layout/Index/Convocatorias";
import { dataConvocatoriasApartado } from "../../data/2024/dataEstradosConvocatorias";

const ConvocatoriasApartado = () => {
  useEffect(() => {
    document.title = `Convocatorias`;
  }, []);
  return (
    <>
      <TitlePages title="Convocatorias" subTitle="" />
      <Convocatorias
        items={dataConvocatoriasApartado}
        itemsID={"listConvocatorias"}
      />
    </>
  );
};

export default ConvocatoriasApartado;
