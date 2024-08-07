import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const AcuerdosITE = ({ year }) => {
  useEffect(() => {
    document.title = `Acuerdos ITE ${year}`;
  }, [year]);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Acuerdos Anteriores", url: "/AcuerdosAnteriores" },
          { label: `Acuerdos ITE ${year}` },
        ]}
      />
      <TitlePages
        title="Acuerdos Anteriores"
        subTitle={`Acuerdos ITE ${year}`}
      />
      <div className="text-center">
        <img
          src="https://itetlax.org.mx/assets/img/icons/10.png"
          className="img-fluid"
          alt="Warning"
        />
        <h4 className="mt-4">
          Si requiere la información contenida de este acuerdo, favor de
          solicitarla a través del área de “Transparencia” o para mayor
          información comunicate con nosotros
        </h4>
      </div>
    </>
  );
};

export default AcuerdosITE;
