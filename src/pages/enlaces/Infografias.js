// eslint-disable-next-line
import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import "./EnlacesStyle.css";
import AccordionV2 from "../../layout/AccordionV2";
export default class Infografias extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title mb-3">Infografias</div>
        {/* --------- */}

        {/* --------- */}
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Home
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-disabled"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      disabled
                    >
                      Disabled
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Messages
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              tabIndex="0"
            >
              home
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              tabIndex="0"
            >
              profile
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-disabled"
              role="tabpanel"
              tabIndex="0"
            >
              disable
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              tabIndex="0"
            >
              messages
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              tabIndex="0"
            >
              settings
            </div>
          </div>
        </div>
      </div>
    );
  }
}
