import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2015 } from "../../../data/dataAcuerdos";

const Acuerdos2015 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2015} year={2015} />
    </>
  );
};

export default Acuerdos2015;
