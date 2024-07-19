import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2012 } from "../../../data/dataAcuerdos";

const Acuerdos2012 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2012} year={2012} />
    </>
  );
};

export default Acuerdos2012;
