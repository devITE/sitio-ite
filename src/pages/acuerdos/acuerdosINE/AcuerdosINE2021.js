import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdosINE2021 } from "../../../data/dataAcuerdos";

const AcuerdosINE2021 = () => {
  return <AcuerdosTable data={dataAcuerdosINE2021} year={2021} />;
};

export default AcuerdosINE2021;
