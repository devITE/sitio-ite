import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdos2022 } from "../../../data/dataAcuerdos";

const Acuerdos2022 = () => {
  return (
    <>
      <AcuerdosTable data={dataAcuerdos2022} year={2022} />
    </>
  );
};

export default Acuerdos2022;
