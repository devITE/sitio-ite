// eslint-disable-next-line
import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { dataMenuInf, dataImgInf } from "../../assets/data/dataAccordion";

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
                            "v-pills-profile-tab" +
                            chilItem.titleButton +
                            "-tab"
                          }
                          data-bs-toggle="pill"
                          data-bs-target={"#v-pills-" + chilItem.titleButton}
                          type="button"
                          role="tab"
                          aria-controls={"v-pills-" + chilItem.titleButton}
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
          <div className="tab-content" id="v-pills-tabContent">
            {dataImgInf.map((imgInf) => (
              // dataInfografias.chilItem.subChildren.map((subChildItem) => (
              <div
                key={imgInf.id}
                className="tab-pane fade"
                id={"v-pills-" + imgInf.monthImg}
                role="tabpanel"
                aria-labelledby={"v-pills-" + imgInf.monthImg + "-tab"}
                tabIndex="0"
              >
                {imgInf.alt}
                {imgInf.link}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
