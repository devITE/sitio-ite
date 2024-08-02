import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const acuerdosData = [
  { year: 2019, icon: "32.png" },
  { year: 2018, icon: "31.png" },
  { year: 2017, icon: "30.png" },
  { year: 2016, icon: "29.png" },
  { year: 2015, icon: "28.png" },
  { year: 2014, icon: "27.png" },
  { year: 2013, icon: "26.png" },
  { year: 2012, icon: "25.png" },
  { year: 2011, icon: "24.png" },
  { year: 2010, icon: "23.png" },
  { year: 2009, icon: "22.png" },
  { year: 2008, icon: "21.png" },
  { year: 2007, icon: "20.png" },
  { year: 2006, icon: "19.png" },
  { year: 2005, icon: "18.png" },
  { year: 2004, icon: "17.png" },
  { year: 2003, icon: "16.png" },
  { year: 2002, icon: "15.png" },
  { year: 2001, icon: "14.png" },
  { year: 1998, icon: "11.png" },
];

const AcuerdosAnteriores = () => {
  useEffect(() => {
    document.title = `Acuerdos Anteriores`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[{ label: "Home", url: "/" }, { label: "Acuerdos Anteriores" }]}
      />
      <TitlePages title="Acuerdos Anteriores" subTitle="" />
      <div className="w-100 mt-5 Grid__folder">
        {acuerdosData.map(({ year, icon }) => (
          <div key={year}>
            <Link to={`/Acuerdos${year}`}>
              <img
                className="img-fluid"
                src={`https://itetlax.org.mx/assets/img/icons/${icon}`}
                alt={`Acuerdos ${year}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AcuerdosAnteriores;
