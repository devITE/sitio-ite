import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2023 } from "../../../data/dataAcuerdos";

const Acuerdos2023 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2023} year={2023} />
    </>
  );
};

export default Acuerdos2023;
