import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

const ComisionesPermanentesyTemporales = () => {
  useEffect(() => {
    document.title = `ITE - Comisiones Permanentes y Temporales`;
  }, []);
    return (
      <>
        <TitlePages title="Comisiones Permanentes y Temporales" subTitle="" />

        <Link
          to="https://itetlax.org.mx/assets/img/imgIntITE/1.jpg"
          target="_blank"
        >
          <img
            src="https://itetlax.org.mx/assets/img/imgIntITE/1.jpg"
            className="img-fluid w-100 mx-auto"
            alt="Comisiones Permanentes"
          />
        </Link>
      </>
    );
  }
  export default ComisionesPermanentesyTemporales;
