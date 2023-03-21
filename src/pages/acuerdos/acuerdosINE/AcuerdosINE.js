import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

const AcuerdosIne = () => {
  useEffect(() => {
    document.title = `ITE - Acuerdos INE`;
  }, []);
    return (
      <>
        <TitlePages title="Acuerdos INE" subTitle="" />

        <div className="w-100 mt-5 Grid__folder">
          <div>
            <Link to="/AcuerdosINE2023">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/36.png"
                alt="Acuerdos INE 2023"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2022">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/35.png"
                alt="Acuerdos INE 2022"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2021">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/34.png"
                alt="Acuerdos INE 2021"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2020">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/33.png"
                alt="Acuerdos INE 2020"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2016">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/29.png"
                alt="Acuerdos INE 2016"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2015">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/28.png"
                alt="Acuerdos INE 2015"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
  export default AcuerdosIne;
