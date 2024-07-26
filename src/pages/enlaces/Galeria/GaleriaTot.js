import React, { useEffect } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import ModalIMG from "../../../layout/Modal/ModalIMG";
import { dataGaleria } from "../../../data/dataGaleria";

const baseURL = "https://itetlax.org.mx/assets/img/galeria/";

const GaleriaTot = ({ year }) => {
  const galeriaData = dataGaleria[year] || [];

  useEffect(() => {
    document.title = `Galería ${year}`;
  }, [year]);

  if (!galeriaData.length) {
    return <div>No hay datos disponibles para el año {year}</div>;
  }

  return (
    <>
      <NavbarEnlaces title={`Galería Fotográfica ${year}`} />
      <div className="container">
        {galeriaData.map((info) => (
          <div key={info.id} className="mb-4">
            <h2>{info.titleItem}</h2>
            {info.children.map((subInfo) => (
              <div key={subInfo.id} className="mb-3">
                <h3>{subInfo.nameActivity}</h3>
                <div className="row">
                  {subInfo.subChilden.map((itemGalery) => (
                    <div key={itemGalery.id} className="col-md-3 mb-3">
                      <a
                        href="/#"
                        rel="noreferrer"
                        data-bs-toggle="modal"
                        data-bs-target={`#${itemGalery.alt}`}
                      >
                        <img
                          src={`${baseURL}${year}/${itemGalery.link}`}
                          alt={itemGalery.alt}
                          className="img-fluid rounded"
                        />
                      </a>
                      <ModalIMG
                        idModal={itemGalery.alt}
                        altIMG={itemGalery.alt}
                        linkIMG={`${baseURL}${year}/${itemGalery.link}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GaleriaTot;
