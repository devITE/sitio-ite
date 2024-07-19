import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos1998 } from "../../../data/dataAcuerdos";

const Acuerdos1998 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos1998} year={1998} />
    </>
  );
};

export default Acuerdos1998;
