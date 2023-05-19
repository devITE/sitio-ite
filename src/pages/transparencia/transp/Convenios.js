import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import { dataConvenios } from "../../../data/dataTransparencia";
import "../Transparencia.css";

const Convenios = () => {
  useEffect(() => {
    document.title = `Convenios`;
  }, []);
  return (
    <div>
      <TitlePages title="Transparencia" subTitle="Convenios" />
      <div className="w-100 mt-3 Content__grid">
        {dataConvenios.map((convenio) => {
          return (
            <div key={convenio.id}>
              <a href={convenio.url} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid "
                  src="https://itetlax.org.mx/assets/img/icons/2.png"
                  alt={"Convenio con " + convenio.title}
                />
              </a>
              <p className="mt-2">CONVENIO {convenio.title.toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Convenios;
