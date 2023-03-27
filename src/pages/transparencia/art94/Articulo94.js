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
          Artículo 94. del
          <br />
          Instituto Tlaxcalteca de Elecciones.
        </h5>
        <div className="list-group text-center w-50 mx-auto">
          <Link
            to="/Art942020"
            className="list-group-item list-group-item-action"
          >
            Artículo 94 (2020)
          </Link>
          <Link
            to="/Art942021"
            className="list-group-item list-group-item-action"
          >
            Artículo 94 (2021)
          </Link>
          <Link
            to="/Art942022"
            className="list-group-item list-group-item-action"
          >
            Artículo 94 (2022)
          </Link>
        </div>
      </>
    );
  }
  export default Articulo94;
