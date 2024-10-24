import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const Jge = () => {
  useEffect(() => {
    document.title = `Junta General Ejecutiva`;
  }, []);

  return (
    <>
      <Breadcrumbs path={[{ label: "Junta General Ejecutiva" }]} />
      <TitlePages title="Junta General Ejecutiva" subTitle="" />
      <a
        href="https://itetlax.org.mx/assets/img/imgIntITE/2.jpg"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://itetlax.org.mx/assets/img/imgIntITE/2.jpg"
          className="img-fluid w-100 mx-auto"
          alt="JGE"
        />
      </a>
    </>
  );
};
export default Jge;
