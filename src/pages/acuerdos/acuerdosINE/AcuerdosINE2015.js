import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdosINE2015 } from "../../../data/dataAcuerdos";

const AcuerdosINE2015 = () => {
  return <AcuerdosTable data={dataAcuerdosINE2015} year={2015} />;
};

export default AcuerdosINE2015;
