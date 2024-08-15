import React, { useEffect } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ModalIMG from "../../layout/Modal/ModalIMG";
import { dataInf } from "../../data/dataInfografias";
import "./EnlacesStyle.css";

const Infografias = () => {
  useEffect(() => {
    document.title = `Infografías`;
  }, []);

  const baseURL = "https://itetlax.org.mx/assets/img/imgEInf/";

  const infografiasPorMes = {};

  Object.keys(dataInf).forEach((year) => {
    let currentMonth = null;

    dataInf[year].forEach((item) => {
      if (item.month) {
        currentMonth = item.month;
        if (!infografiasPorMes[year]) {
          infografiasPorMes[year] = {};
        }
        if (!infografiasPorMes[year][currentMonth]) {
          infografiasPorMes[year][currentMonth] = [];
        }
      } else if (item.alt && item.link && currentMonth) {
        infografiasPorMes[year][currentMonth].push({
          alt: item.alt,
          link: `${baseURL}${year}/${item.link}`,
        });
      }
    });
  });

  console.log("Infografías por mes y año:", infografiasPorMes);

  return (
    <>
      <NavbarEnlaces title="Infografías" />

      <div className="container">
        {Object.keys(infografiasPorMes).length > 0 ? (
          Object.keys(infografiasPorMes).map((year) => (
            <div key={year}>
              <h4 className="text-center mb-4 pb-2 text-decoration-underline">
                Infografías {year}
              </h4>
              {Object.keys(infografiasPorMes[year]).map((month) => (
                <div key={month}>
                  <h5 className="text-center mb-4">{month}</h5>
                  <div className="row">
                    {infografiasPorMes[year][month].map((infografia, index) => (
                      <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                          <a
                            href="/#"
                            rel="noreferrer"
                            data-bs-toggle="modal"
                            data-bs-target={`#modal${year}-${month}-${index}`}
                          >
                            <img
                              src={infografia.link}
                              className="card-img-top"
                              alt={infografia.alt}
                            />
                          </a>
                        </div>
                        <ModalIMG
                          idModal={`modal${year}-${month}-${index}`}
                          altIMG={infografia.alt}
                          linkIMG={infografia.link}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No hay infografías disponibles.</p>
        )}
      </div>
    </>
  );
};

export default Infografias;
