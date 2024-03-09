import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import { dataInformesAnuales } from "../../../data/dataTransparencia";
import "../Transparencia.css";

const InformesAnuales = () => {
  useEffect(() => {
    document.title = `Informes Anuales`;
  }, []);
  return (
    <div>
      <TitlePages title="Transparencia" subTitle="Informes Anuales" />
      <div className="w-100 mt-3 Content__grid">
        {dataInformesAnuales.map((informe) => {
          return (
            <div key={informe.id}>
              <a href={informe.url} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid "
                  src="https://itetlax.org.mx/assets/img/icons/2.png"
                  alt={"Informe anual de actividades " + informe.title}
                />
              </a>
              <p className="mt-2">
                Informe Anual de Actividades
                <br />
                {informe.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default InformesAnuales;
