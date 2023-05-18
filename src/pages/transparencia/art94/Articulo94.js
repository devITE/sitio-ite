import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import { Link } from "react-router-dom";

const Articulo94 = () => {
  useEffect(() => {
    document.title = `Articulo 94`;
  }, []);
  return (
    <>
      <TitlePages
        title="Transparencia"
        subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
      />
      <h5 className="mt-3 text-center Transparencia__title">
        Artículo 94. del Instituto Tlaxcalteca de Elecciones.
      </h5>
      <div className="w-100 mt-5 Grid__folder">
        <Link
          to="/Art942020"
          className="list-group-item list-group-item-action"
        >
          <img
            className="img-fluid"
            src="https://itetlax.org.mx/assets/img/icons/33.png"
            alt="Artículo 94 (2020)"
          />
        </Link>
        <Link
          to="/Art942021"
          className="list-group-item list-group-item-action"
        >
          <img
            className="img-fluid"
            src="https://itetlax.org.mx/assets/img/icons/34.png"
            alt="Artículo 94 (2021)"
          />
        </Link>
        <Link
          to="/Art942022"
          className="list-group-item list-group-item-action"
        >
          <img
            className="img-fluid"
            src="https://itetlax.org.mx/assets/img/icons/35.png"
            alt="Artículo 94 (2022)"
          />
        </Link>
      </div>
    </>
  );
};
export default Articulo94;
