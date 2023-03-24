import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import { Link } from "react-router-dom";

const Articulo67 = () => {
  useEffect(() => {
    document.title = `Articulo 67`;
  }, []);

    return (
      <>
        <TitlePages
          title="Transparencia"
          subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
        />
        <h5 className="mt-3 text-center text-strong">
          Artículo 67. del
          <br />
          Instituto Tlaxcalteca de Elecciones.
        </h5>
        <div className="list-group text-center w-50 mx-auto">
          <Link
            to="/Art672017"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2017)
          </Link>
          <Link
            to="/Art672018"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2018)
          </Link>
          <Link
            to="/Art672019"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2019)
          </Link>
          <Link
            to="/Art672020"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2020)
          </Link>
          <Link
            to="/Art672021"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2021)
          </Link>
          <Link
            to="/Art672022"
            className="list-group-item list-group-item-action"
          >
            Artículo 67 (2022)
          </Link>
        </div>
      </>
    );
  }
  export default Articulo67;