import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2018 } from "../../../data/dataAcuerdos";

const Acuerdos2018 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2018} year={2018} />
    </>
  );
};

export default Acuerdos2018;
