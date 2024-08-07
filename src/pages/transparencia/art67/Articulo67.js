import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const Articulo67 = () => {
  useEffect(() => {
    document.title = "Artículo 67";
  }, []);

  const links = [
    {
      to: "/Art672017",
      src: "https://itetlax.org.mx/assets/img/icons/30.png",
      alt: "Artículo 67 (2017)",
    },
    {
      to: "/Art672018",
      src: "https://itetlax.org.mx/assets/img/icons/31.png",
      alt: "Artículo 67 (2018)",
    },
    {
      to: "/Art672019",
      src: "https://itetlax.org.mx/assets/img/icons/32.png",
      alt: "Artículo 67 (2019)",
    },
    {
      to: "/Art672020",
      src: "https://itetlax.org.mx/assets/img/icons/33.png",
      alt: "Artículo 67 (2020)",
    },
    {
      to: "/Art672021",
      src: "https://itetlax.org.mx/assets/img/icons/34.png",
      alt: "Artículo 67 (2021)",
    },
    {
      to: "/Art672022",
      src: "https://itetlax.org.mx/assets/img/icons/35.png",
      alt: "Artículo 67 (2022)",
    },
    {
      to: "/Art672023",
      src: "https://itetlax.org.mx/assets/img/icons/36.png",
      alt: "Artículo 67 (2023)",
    },
    {
      to: "/Art672024",
      src: "https://itetlax.org.mx/assets/img/icons/58.png",
      alt: "Artículo 67 (2024)",
    },
  ];

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Transparencia", url: "/Transparencia" },
          { label: "Artículo 67 Obligaciones Específicas" },
        ]}
      />
      <TitlePages
        title="Transparencia"
        subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
      />
      <h5 className="mt-3 text-center text-strong">
        Artículo 67. del Instituto Tlaxcalteca de Elecciones.
      </h5>
      <div className="w-100 mt-5 Grid__folder">
        {links.map(({ to, src, alt }) => (
          <div key={to}>
            <Link to={to} className="list-group-item list-group-item-action">
              <img className="img-fluid" src={src} alt={alt} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articulo67;
