import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

export const Monitoreo = () => {
  useEffect(() => {
    document.title = `Monitoreo`;
  }, []);
  return (
    <>
      <TitlePages title="Comunicación Social" subTitle="Monitoreos" />

      <div className="Grid__folder">
        <Link to="/Monitoreos2015">
          <img
            src="https://itetlax.org.mx/assets/img/icons/28.png"
            className="img-fluid"
            alt="Monitoreos 2015"
          />
        </Link>
        <Link to="/Monitoreos2016">
          <img
            src="https://itetlax.org.mx/assets/img/icons/29.png"
            className="img-fluid"
            alt="Monitoreos 2016"
          />
        </Link>
        <Link to="/Monitoreos2017">
          <img
            src="https://itetlax.org.mx/assets/img/icons/30.png"
            className="img-fluid"
            alt="Monitoreos 2017"
          />
        </Link>
        <Link to="/Monitoreos2018">
          <img
            src="https://itetlax.org.mx/assets/img/icons/31.png"
            className="img-fluid"
            alt="Monitoreos 2018"
          />
        </Link>
        <Link to="/Monitoreos2020">
          <img
            src="https://itetlax.org.mx/assets/img/icons/33.png"
            className="img-fluid"
            alt="/Monitoreos 2020"
          />
        </Link>
        <Link to="/Monitoreos2021">
          <img
            src="https://itetlax.org.mx/assets/img/icons/34.png"
            className="img-fluid"
            alt="/Monitoreos 2021"
          />
        </Link>
        <Link to="/Monitoreos2023">
          <img
            src="https://itetlax.org.mx/assets/img/icons/36.png"
            className="img-fluid"
            alt="/Monitoreos 2023"
          />
        </Link>
        <Link to="/Monitoreos2024">
          <img
            src="https://itetlax.org.mx/assets/img/icons/2024.png"
            className="img-fluid"
            alt="/Monitoreos 2024"
          />
        </Link>
      </div>
    </>
  );
};

export default Monitoreo;
