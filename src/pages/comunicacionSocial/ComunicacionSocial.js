import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

export const ComunicacionSocial = () => {
  useEffect(() => {
    document.title = `Comunicación Social`;
  }, []);
  return (
    <>
      <TitlePages title="Comunicación Social" subTitle="" />

      <div className="Content__grid">
        <div>
          <Link to="/Boletines">
            <img
              src="https://itetlax.org.mx/assets/img/icons/50.png"
              className="img-fluid"
              alt="Boletines"
            />
          </Link>
          <p className="text-strong">Boletines</p>
        </div>
        <div>
          <Link to="/Monitoreo">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e12.png"
              className="img-fluid"
              alt="Monitoreo"
            />
          </Link>
          <p className="text-strong">Monitoreo</p>
        </div>
        <div>
          <Link to="/ITEConecta">
            <img
              src="https://itetlax.org.mx/assets/img/icons/57.png"
              className="img-fluid"
              alt="ITE Conecta"
            />
          </Link>
          <p className="text-strong">ITE Conecta</p>
        </div>
      </div>
    </>
  );
};

export default ComunicacionSocial;
