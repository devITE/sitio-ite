import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2005 } from "../../../data/dataAcuerdos";

const Acuerdos2005 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2005} year={2005} />
    </>
  );
};

export default Acuerdos2005;
