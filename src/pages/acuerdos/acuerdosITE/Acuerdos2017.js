import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2017 } from "../../../data/dataAcuerdos";

const Acuerdos2017 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2017} year={2017} />
    </>
  );
};

export default Acuerdos2017;
