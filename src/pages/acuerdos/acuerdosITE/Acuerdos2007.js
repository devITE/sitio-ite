import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2007 } from "../../../data/dataAcuerdos";

const Acuerdos2007 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2007} year={2007} />
    </>
  );
};

export default Acuerdos2007;
