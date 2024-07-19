import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2024 } from "../../../data/2024/dataAcuerdos";

const Acuerdos2024 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2024} year={2024} />
    </>
  );
};

export default Acuerdos2024;
