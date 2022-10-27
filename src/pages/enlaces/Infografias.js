import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ModalIMG from "../../layout/ModalIMG";
import { dataMenuInf } from "../../assets/data/dataAccordion";

import "./EnlacesStyle.css";

export default class Infografias extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title mb-3">Infografías</div>
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
              {dataMenuInf.map((infoITEM) => (
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
                            "v-pills-" +
                            infoITEM.titleItem +
                            chilItem.titleButton
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
            {dataMenuInf.map((infoITEM) =>
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
                  <div className="Infografias__grid">
                    {chilItem.subChildren.map((subChilItem) => (
                      <div key={subChilItem.id}>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target={
                            "#" +
                            chilItem.titleButton +
                            infoITEM.titleItem +
                            subChilItem.id
                          }
                        >
                          <img
                            className="img-fluid Infografias__grid-item"
                            src={subChilItem.link}
                            alt={subChilItem.alt}
                          />
                        </a>
                        <ModalIMG
                          idModal={
                            chilItem.titleButton +
                            infoITEM.titleItem +
                            subChilItem.id
                          }
                          linkIMG={subChilItem.link}
                          altIMG={subChilItem.alt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
