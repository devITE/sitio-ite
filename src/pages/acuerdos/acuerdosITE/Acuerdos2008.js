import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2008 } from "../../../data/dataAcuerdos";

const Acuerdos2008 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2008} year={2008} />
    </>
  );
};

export default Acuerdos2008;
