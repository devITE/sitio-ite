import React, { useEffect } from "react";
import Breadcrumbs from "../../layout/Breadcrumbs";
import TitlePages from "../../layout/TitlePages";

const ImageLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img src={src} className="img-fluid w-100 mx-auto" alt={alt} />
  </a>
);

const ComisionesPermanentesyTemporales = () => {
  useEffect(() => {
    document.title = "Comisiones Permanentes y Temporales";
  }, []);

  const images = [
    {
      href: "https://itetlax.org.mx/assets/img/imgIntITE/1.jpg",
      src: "https://itetlax.org.mx/assets/img/imgIntITE/1.jpg",
      alt: "Comisiones Permanentes 1",
    },
    {
      href: "https://itetlax.org.mx/assets/img/imgIntITE/conoceles.jpg",
      src: "https://itetlax.org.mx/assets/img/imgIntITE/conoceles.jpg",
      alt: "Comisiones Permanentes 2",
    },
  ];

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Comisiones Permanentes y Temporales" },
        ]}
      />
      <TitlePages title="Comisiones Permanentes y Temporales" subTitle="" />
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <ImageLink {...image} />
          <br />
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default ComisionesPermanentesyTemporales;
