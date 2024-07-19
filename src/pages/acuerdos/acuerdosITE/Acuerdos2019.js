import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2019 } from "../../../data/dataAcuerdos";

const Acuerdos2019 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2019} year={2019} />
    </>
  );
};

export default Acuerdos2019;
