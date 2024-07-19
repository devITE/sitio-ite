import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdosINE2016 } from "../../../data/dataAcuerdos";

const AcuerdosINE2016 = () => {
  return <AcuerdosTable data={dataAcuerdosINE2016} year={2016} />;
};

export default AcuerdosINE2016;
