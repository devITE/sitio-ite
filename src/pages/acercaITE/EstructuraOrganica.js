import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";

const EstructuraOrganica = () => {
  useEffect(() => {
    document.title = `ITE - Estructura Organica`;
  }, []);
    return (
      <>
        <TitlePages title="Estructura Orgánica" subTitle="" />
        <a
          href="https://itetlax.org.mx/assets/img/estOrg/1.jpg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://itetlax.org.mx/assets/img/estOrg/1.jpg"
            className="img-fluid w-100 mx-auto"
            alt="Estructura Organica"
          />
        </a>
      </>
    );
  }
  export default EstructuraOrganica;
