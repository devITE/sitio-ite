import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2009 } from "../../../data/dataAcuerdos";

const Acuerdos2009 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2009} year={2009} />
    </>
  );
};

export default Acuerdos2009;
