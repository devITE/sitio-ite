import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdosINE2024 } from "../../../data/2024/dataAcuerdos";

const AcuerdosINE2024 = () => {
  return <AcuerdosTable data={dataAcuerdosINE2024} year={2024} />;
};

export default AcuerdosINE2024;
