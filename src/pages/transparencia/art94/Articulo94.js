import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const Articulo94 = () => {
  useEffect(() => {
    document.title = `Artículo 94`;
  }, []);

  const links = [
    {
      url: "/Art942020",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/33.png",
      altText: "Artículo 94 (2020)",
    },
    {
      url: "/Art942021",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/34.png",
      altText: "Artículo 94 (2021)",
    },
  ];

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Transparencia", url: "/Transparencia" },
          { label: "Artículo 94 Obligaciones Específicas" },
        ]}
      />
      <TitlePages
        title="Transparencia"
        subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
      />
      <h5 className="mt-3 text-center Transparencia__title">
        Artículo 94. del Instituto Tlaxcalteca de Elecciones.
      </h5>
      <div className="w-100 mt-5 Grid__folder">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="list-group-item list-group-item-action"
          >
            <img className="img-fluid" src={link.imgSrc} alt={link.altText} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Articulo94;
