import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2003 } from "../../../data/dataAcuerdos";

const Acuerdos2003 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2003} year={2003} />
    </>
  );
};

export default Acuerdos2003;
