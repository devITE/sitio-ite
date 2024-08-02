import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const monitoreosData = [
  { year: 2015, icon: "28.png" },
  { year: 2016, icon: "29.png" },
  { year: 2017, icon: "30.png" },
  { year: 2018, icon: "31.png" },
  { year: 2020, icon: "33.png" },
  { year: 2021, icon: "34.png" },
  { year: 2023, icon: "36.png" },
  { year: 2024, icon: "2024.png" },
];

export const Monitoreo = () => {
  useEffect(() => {
    document.title = `Monitoreo`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Comunicación Social", url: "/ComunicacionSocial" },
          { label: "Monitoreos" },
        ]}
      />
      <TitlePages title="Comunicación Social" subTitle="Monitoreos" />

      <div className="Grid__folder">
        {monitoreosData.map(({ year, icon }) => (
          <Link key={year} to={`/Monitoreos${year}`}>
            <img
              src={`https://itetlax.org.mx/assets/img/icons/${icon}`}
              className="img-fluid"
              alt={`Monitoreos ${year}`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Monitoreo;
