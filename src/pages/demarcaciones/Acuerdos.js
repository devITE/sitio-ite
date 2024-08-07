import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const ImageLink = ({ to, src, alt, text }) => (
  <div>
    <Link to={to}>
      <img src={src} className="img-fluid" alt={alt} />
    </Link>
    <p className="text-strong">{text}</p>
  </div>
);

const Acuerdos = () => {
  useEffect(() => {
    document.title = `Acuerdos`;
  }, []);

  return (
    <>
      <Breadcrumbs path={[{ label: "Acuerdos Demarcaciones" }]} />
      <TitlePages title="Acuerdos" subTitle="" />

      <div className="w-100 Grid__folder">
        <ImageLink
          to="/Distritacion2015"
          src="https://itetlax.org.mx/assets/img/imgDemA/13.png"
          alt="Distritación 2015"
          text="Distritación 2015"
        />
        <ImageLink
          to="/Distritacion2022"
          src="https://itetlax.org.mx/assets/img/imgDemA/14.png"
          alt="Distritación 2022"
          text="Distritación 2022"
        />
      </div>
    </>
  );
};

export default Acuerdos;
