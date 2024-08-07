import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const boletinesData = [
  { year: 2015, icon: "28.png" },
  { year: 2016, icon: "29.png" },
  { year: 2017, icon: "30.png" },
  { year: 2019, icon: "32.png" },
  { year: 2020, icon: "33.png" },
  { year: 2021, icon: "34.png" },
  { year: 2022, icon: "35.png" },
  { year: 2023, icon: "36.png" },
  // { year: 2024, icon: "58.png" }
];

export const Boletines = () => {
  useEffect(() => {
    document.title = `Boletines`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Comunicación Social", url: "/ComunicacionSocial" },
          { label: "Boletines" },
        ]}
      />
      <TitlePages title="Comunicación Social" subTitle="Boletines" />

      <div className="Grid__folder">
        {boletinesData.map(({ year, icon }) => (
          <Link key={year} to={`/Boletines${year}`}>
            <img
              src={`https://itetlax.org.mx/assets/img/icons/${icon}`}
              className="img-fluid"
              alt={`Boletines ${year}`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Boletines;
