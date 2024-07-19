import React from "react";
import AcuerdosTable from "./AcuerdosTable";
import { dataAcuerdosINE2020 } from "../../../data/dataAcuerdos";

const AcuerdosINE2020 = () => {
  return <AcuerdosTable data={dataAcuerdosINE2020} year={2020} />;
};

export default AcuerdosINE2020;
