import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2006 } from "../../../data/dataAcuerdos";

const Acuerdos2006 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2006} year={2006} />
    </>
  );
};

export default Acuerdos2006;
