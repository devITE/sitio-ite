import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdosINE2023 } from "../../../data/dataAcuerdos";

const AcuerdosINE2023 = () => {
  return <AcuerdosTable data={dataAcuerdosINE2023} year={2023} />;
};

export default AcuerdosINE2023;
