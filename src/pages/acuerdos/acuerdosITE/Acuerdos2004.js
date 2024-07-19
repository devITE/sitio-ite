import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2004 } from "../../../data/dataAcuerdos";

const Acuerdos2004 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2004} year={2004} />
    </>
  );
};

export default Acuerdos2004;
