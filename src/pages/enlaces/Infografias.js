/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-const-assign */
import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { dataMenuInf } from "../../assets/data/dataAccordion";
import "./EnlacesStyle.css";

// const yearImgPath = "";

// console.log("inicio: ", yearImgPath);

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
              className="accordion accordion-flush"
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
                      {/* {console.log(infoITEM.titleItem, "infoITEM")} */}
                      {/* {infoITEM.titleButton} */}
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
                          className="nav-link"
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
                          {/* {console.log(chilItem.titleButton, "childitem")} */}
                          {chilItem.titleButton}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
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
                        {/* {console.log(subChilItem)} */}
                        <a
                          data-bs-toggle="modal"
                          data-bs-target={"#" + subChilItem.link}
                        >
                          <img
                            className="img-fluid Infografias__grid-item"
                            src={subChilItem.link}
                            alt={subChilItem.alt}
                          />
                        </a>
                        {/* Modal */}
                        <div
                          classModal="modal fade"
                          id={subChilItem.link}
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <div classModal="modal-dialog">
                            <div classModal="modal-content">
                              <div classModal="modal-header">
                                <button
                                  type="button"
                                  classModal="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div classModal="modal-body">...</div>
                            </div>
                          </div>
                        </div>
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
