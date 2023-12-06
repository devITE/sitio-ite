import React, { useEffect } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { dataInfor } from "../../data/dataInforms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import "./EnlacesStyle.css";

const Encuestas = () => {
  useEffect(() => {
    document.title = `Encuestas y Sondeos de opinión en materia electoral del Proceso Local Ordinario 2023-2024`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Encuestas y Sondeos de opinión en materia electoral del Proceso Local Ordinario 2023-2024" />
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3 w-25"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div
            className="accordion accordion-flush w-100"
            id="accordionFlushExample"
          >
            {dataInfor.map((infoITEM) => (
              <div key={infoITEM.id} className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#flush-" + infoITEM.titleItem}
                    aria-expanded="false"
                    aria-controls={"flush-" + infoITEM.titleItem}
                  >
                    {infoITEM.titleItem}
                  </button>
                </h2>
                <div
                  id={"flush-" + infoITEM.titleItem}
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {infoITEM.children.map((chilItem) => (
                      <button
                        key={chilItem.id}
                        className="btn btn-ite w-100"
                        id={
                          "v-pills-" +
                          infoITEM.titleItem +
                          chilItem.titleButton +
                          "-tab"
                        }
                        data-bs-toggle="pill"
                        data-bs-target={
                          "#v-pills-" +
                          infoITEM.titleItem +
                          chilItem.titleButton
                        }
                        type="button"
                        role="tab"
                        aria-controls={
                          "v-pills-" + infoITEM.titleItem + chilItem.titleButton
                        }
                        aria-selected="false"
                      >
                        {chilItem.titleButton}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-content w-75" id="v-pills-tabContent">
          {dataInfor.map((infoITEM) =>
            infoITEM.children.map((chilItem) => (
              <div
                key={chilItem.id}
                className="tab-pane fade"
                id={"v-pills-" + infoITEM.titleItem + chilItem.titleButton}
                role="tabpanel"
                aria-labelledby={
                  "v-pills-" +
                  infoITEM.titleItem +
                  chilItem.titleButton +
                  "-tab"
                }
                tabIndex="0"
              >
                <ol className="list-group">
                  {chilItem.subChildren.map((subChilItem) => (
                    <li
                      key={subChilItem.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="ms-2 me-auto">
                        <div>{subChilItem.titleItem}</div>
                      </div>
                      <a
                        href={subChilItem.linkItem}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="badge bg-danger">
                          <FontAwesomeIcon icon={faFilePdf} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Encuestas;
