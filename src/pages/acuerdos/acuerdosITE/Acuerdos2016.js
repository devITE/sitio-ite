import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2016 } from "../../../data/dataAcuerdos";

const Acuerdos2016 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2016} year={2016} />
    </>
  );
};

export default Acuerdos2016;
