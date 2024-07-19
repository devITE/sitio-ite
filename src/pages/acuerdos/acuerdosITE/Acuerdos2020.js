import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2020 } from "../../../data/dataAcuerdos";

const Acuerdos2020 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2020} year={2020} />
    </>
  );
};

export default Acuerdos2020;
