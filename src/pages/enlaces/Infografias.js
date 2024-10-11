import React, { useEffect, useState } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ModalIMG from "../../layout/Modal/ModalIMG";
import { dataInf } from "../../data/dataInfografias";
import "./EnlacesStyle.css";
import { Nav, Tab } from "react-bootstrap";

const Infografias = () => {
  useEffect(() => {
    document.title = `Infografías`;
  }, []);

  const [selectedYear, setSelectedYear] = useState(Object.keys(dataInf)[0]);

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

  return (
    <>
      <NavbarEnlaces title="Infografías" />

      <div className="container mt-5">
        <Tab.Container
          activeKey={selectedYear}
          onSelect={(k) => setSelectedYear(k)}
        >
          <Nav variant="tabs" className="justify-content-center mb-4">
            {Object.keys(infografiasPorMes)
              .sort((a, b) => b - a)
              .map((year) => (
                <Nav.Item key={year}>
                  <Nav.Link eventKey={year}>{year}</Nav.Link>
                </Nav.Item>
              ))}
          </Nav>

          <Tab.Content>
            {infografiasPorMes[selectedYear] ? (
              <div className="mb-5">
                <h2 className="text-center mb-4 pb-2 text-decoration-underline">
                  Infografías {selectedYear}
                </h2>
                {Object.keys(infografiasPorMes[selectedYear]).map((month) => (
                  <div key={month} className="mb-4">
                    <h4 className="text-center mb-4 text-primary text-uppercase">
                      {month}
                    </h4>
                    <div className="gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                      {infografiasPorMes[selectedYear][month].map(
                        (infografia, index) => (
                          <div className="col" key={infografia.link}>
                            <div className="card h-100 border-0">
                              <a
                                href="#/"
                                rel="noreferrer"
                                data-bs-toggle="modal"
                                data-bs-target={`#modal${selectedYear}-${month}-${index}`}
                              >
                                <img
                                  src={infografia.link}
                                  className="card-img-top img-fluid rounded shadow"
                                  alt={infografia.alt}
                                />
                              </a>
                            </div>
                            <ModalIMG
                              idModal={`modal${selectedYear}-${month}-${index}`}
                              altIMG={infografia.alt}
                              linkIMG={infografia.link}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-5">
                <p className="lead">
                  No hay infografías disponibles para el año seleccionado.
                </p>
              </div>
            )}
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};

export default Infografias;
