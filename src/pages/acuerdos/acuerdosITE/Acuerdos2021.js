import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2021 } from "../../../data/dataAcuerdos";

const Acuerdos2021 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2021} year={2021} />
    </>
  );
};

export default Acuerdos2021;
