import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const GridItem = ({ to, href, imgSrc, altText, text }) => (
  <div>
    {href ? (
      <a href={href} target="_blank" rel="noreferrer">
        <img src={imgSrc} className="img-fluid" alt={altText} />
      </a>
    ) : (
      <Link to={to}>
        <img src={imgSrc} className="img-fluid" alt={altText} />
      </Link>
    )}
    <p>{text}</p>
  </div>
);

export const CulturaCivica = () => {
  useEffect(() => {
    document.title = `Cultura Cívica`;
  }, []);

  const items = [
    {
      to: "/ActividadesLudicas",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/52.png",
      altText: "Actividades Lúdicas",
      text: "Actividades Lúdicas",
    },
    {
      to: "/EleccionesEscolares",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/53.png",
      altText: "Elecciones Escolares",
      text: "Elecciones Escolares",
    },
    {
      to: "/ParlamentoInfantil",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/54.png",
      altText: "Parlamento Infantil",
      text: "Parlamento Infantil",
    },
    {
      to: "/ParlamentoJuvenil",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/55.png",
      altText: "Parlamento Juvenil",
      text: "Parlamento Juvenil",
    },
    {
      to: "/ValoresDemocracia",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/56.png",
      altText: "Valores de la Democracia",
      text: "Valores de la Democracia",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/ccivica/2.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/icons/53.png",
      altText: "Catalogo de Acciones",
      text: "Catalogo de Acciones en Educación Cívica",
    },
  ];

  return (
    <>
      <Breadcrumbs
        path={[{ label: "Home", url: "/" }, { label: "Cultura Cívica" }]}
      />
      <TitlePages title="Cultura Cívica" subTitle="" />
      <div className="Grid__three w-100">
        {items.map((item, index) => (
          <GridItem
            key={index}
            to={item.to}
            href={item.href}
            imgSrc={item.imgSrc}
            altText={item.altText}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};

export default CulturaCivica;
