import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdosINE2022 } from "../../../data/dataAcuerdos";

const AcuerdosINE2022 = () => {
  return <AcuerdosTable data={dataAcuerdosINE2022} year={2022} />;
};

export default AcuerdosINE2022;
