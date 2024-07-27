import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const Articulo63 = () => {
  useEffect(() => {
    document.title = `Articulo 63`;
  }, []);
  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Transparencia", url: "/Transparencia" },
          { label: "Artículo 63 Obligaciones Comunes" },
        ]}
      />

      <TitlePages
        title="Transparencia"
        subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
      />
      <h5 className="text-center text-strong">
        Artículo 63. del Instituto Tlaxcalteca de Elecciones.
      </h5>
      <div className="w-100 mt-5 Grid__folder">
        <div>
          <Link to="/Art632017">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/30.png"
              alt="Artículo 63 (2017)"
            />
          </Link>
        </div>
        <div>
          <Link to="/Art632018">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/31.png"
              alt="Artículo 63 (2018)"
            />
          </Link>
        </div>
        <div>
          <Link to="/Art632019">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/32.png"
              alt="Artículo 63 (2019)"
            />
          </Link>
        </div>
        <div>
          <Link to="/Art632020" className="nav-link">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/33.png"
              alt="Artículo 63 (2020)"
            />
          </Link>
        </div>
        <div>
          <Link to="/Art632021" className="nav-link">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/34.png"
              alt="Artículo 63 (2021)"
            />
          </Link>
        </div>
        <div>
          <Link to="/Art632022" className="nav-link">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/35.png"
              alt="Artículo 63 (2022)"
            />
          </Link>
        </div>
        <div>
          <Link to="/Art632023" className="nav-link">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/36.png"
              alt="Artículo 63 (2023)"
            />
          </Link>
        </div>
        <div>
          <Link to="/Art632024" className="nav-link">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/58.png"
              alt="Artículo 63 (2024)"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Articulo63;
