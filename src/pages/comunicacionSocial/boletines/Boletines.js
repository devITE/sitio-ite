import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

export const Boletines = () => {
  useEffect(() => {
    document.title = `Boletines`;
  }, []);
  return (
    <>
      <TitlePages title="Comunicación Social" subTitle="Boletines" />

      <div className="Grid__folder">
        <Link to="/Boletines2015">
          <img
            src="https://itetlax.org.mx/assets/img/icons/28.png"
            className="img-fluid"
            alt="Boletines 2015"
          />
        </Link>
        <Link to="/Boletines2016">
          <img
            src="https://itetlax.org.mx/assets/img/icons/29.png"
            className="img-fluid"
            alt="Boletines 2016"
          />
        </Link>
        <Link to="/Boletines2017">
          <img
            src="https://itetlax.org.mx/assets/img/icons/30.png"
            className="img-fluid"
            alt="Boletines 2017"
          />
        </Link>
        <Link to="/Boletines2019">
          <img
            src="https://itetlax.org.mx/assets/img/icons/32.png"
            className="img-fluid"
            alt="Boletines 2019"
          />
        </Link>
        <Link to="/Boletines2020">
          <img
            src="https://itetlax.org.mx/assets/img/icons/33.png"
            className="img-fluid"
            alt="Boletines 2020"
          />
        </Link>
        <Link to="/Boletines2021">
          <img
            src="https://itetlax.org.mx/assets/img/icons/34.png"
            className="img-fluid"
            alt="Boletines 2021"
          />
        </Link>
        <Link to="/Boletines2022">
          <img
            src="https://itetlax.org.mx/assets/img/icons/35.png"
            className="img-fluid"
            alt="Boletines 2022"
          />
        </Link>
        <Link to="/Boletines2023">
          <img
            src="https://itetlax.org.mx/assets/img/icons/36.png"
            className="img-fluid"
            alt="Boletines 2023"
          />
        </Link>
        {/* <Link to="/Boletines2024">
          <img
            src="https://itetlax.org.mx/assets/img/icons/58.png"
            className="img-fluid"
            alt="Boletines 2024"
          />
        </Link> */}
      </div>
    </>
  );
};

export default Boletines;
