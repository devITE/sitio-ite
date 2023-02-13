import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";

const ComisionesPermanentesyTemporales = () => {
  useEffect(() => {
    document.title = `ITE - Comisiones Permanentes y Temporales`;
  }, []);
    return (
      <>
        <TitlePages title="Comisiones Permanentes y Temporales" subTitle="" />

        <a
          href="https://itetlax.org.mx/assets/img/imgIntITE/1.jpg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://itetlax.org.mx/assets/img/imgIntITE/1.jpg"
            className="img-fluid w-100 mx-auto"
            alt="Comisiones Permanentes"
          />
        </a>
      </>
    );
  }
  export default ComisionesPermanentesyTemporales;
