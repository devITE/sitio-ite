import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { getPOAData } from "../../../data/dataTransparenciaPOA";
import Breadcrumbs from "../../../layout/Breadcrumbs";
import "../Transparencia.css";

const baseURL = "https://itetlax.org.mx/assets/pdf/POA/";

const dataYears = [2018, 2019, 2020, 2024];

const POA = () => {
  useEffect(() => {
    document.title = `POA`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Transparencia", url: "/Transparencia" },
          { label: "POA" },
        ]}
      />
      <TitlePages
        title="Transparencia"
        subTitle="Programas Operativos Anuales (POA)"
      />
      <div className="mt-3 mb-3 d-flex align-items-start w-100">
        <div
          className="nav flex-column nav-pills me-3 w-25"
          id="vPillsContenidoRegistro"
          role="tablist"
          aria-orientation="vertical"
        >
          {dataYears.map((year, index) => (
            <button
              key={year}
              className={`btn btn-ite ${index === 0 ? "active" : ""}`}
              id={`vPillsPOA${year}Tab`}
              data-bs-toggle="pill"
              data-bs-target={`#vPillsPOA${year}`}
              type="button"
              role="tab"
              aria-controls={`vPillsPOA${year}`}
              aria-selected={index === 0 ? "true" : "false"}
            >
              POAS {year}
            </button>
          ))}
        </div>
        <div className="tab-content w-75" id="vPillsPOASContent">
          {dataYears.map((year, index) => {
            const data = getPOAData(year);
            return (
              <div
                key={year}
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`vPillsPOA${year}`}
                role="tabpanel"
                aria-labelledby={`vPillsPOA${year}Tab`}
              >
                <h2 className="text-center mb-3">
                  Programas Operativos Anuales {year}
                </h2>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((poa) => (
                      <tr key={poa.id}>
                        <th scope="row">{poa.id}</th>
                        <td>{poa.title}</td>
                        <td>
                          <a
                            className="btn btn-danger btn-sm"
                            href={`${baseURL}${year}/${poa.id}.pdf`}
                            target="_blank"
                            role="button"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faFilePdf} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default POA;
