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
        Artículo 67. del Instituto Tlaxcalteca de Elecciones.
      </h5>
      <div className="w-100 mt-5 Grid__folder">
        <div>
          <Link
            to="/Art672017"
            className="list-group-item list-group-item-action"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/30.png"
              alt="Artículo 67 (2017)"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/Art672018"
            className="list-group-item list-group-item-action"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/31.png"
              alt="Artículo 67 (2018)"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/Art672019"
            className="list-group-item list-group-item-action"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/32.png"
              alt="Artículo 67 (2019)"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/Art672020"
            className="list-group-item list-group-item-action"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/33.png"
              alt="Artículo 67 (2020)"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/Art672021"
            className="list-group-item list-group-item-action"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/34.png"
              alt="Artículo 67 (2021)"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/Art672022"
            className="list-group-item list-group-item-action"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/35.png"
              alt="Artículo 67 (2022)"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/Art672023"
            className="list-group-item list-group-item-action"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/36.png"
              alt="Artículo 63 (2023)"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Articulo67;
