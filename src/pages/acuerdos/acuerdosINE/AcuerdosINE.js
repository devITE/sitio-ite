import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const acuerdosData = [
  { year: 2024, icon: "58.png" },
  { year: 2023, icon: "36.png" },
  { year: 2022, icon: "35.png" },
  { year: 2021, icon: "34.png" },
  { year: 2020, icon: "33.png" },
  { year: 2016, icon: "29.png" },
  { year: 2015, icon: "28.png" },
];

const AcuerdosINE = () => {
  useEffect(() => {
    document.title = `Acuerdos INE`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[{ label: "Home", url: "/" }, { label: "Acuerdos INE" }]}
      />
      <TitlePages title="Acuerdos INE" subTitle="" />

      <div className="w-100 mt-5 Grid__folder">
        {acuerdosData.map(({ year, icon }) => (
          <div key={year}>
            <Link to={`/AcuerdosINE${year}`}>
              <img
                className="img-fluid"
                src={`https://itetlax.org.mx/assets/img/icons/${icon}`}
                alt={`Acuerdos INE ${year}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AcuerdosINE;
