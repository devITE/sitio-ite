import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ListBadge from "../../layout/ListBadge";
import { dataNormatividad } from "../../data/dataNormativad";

export default class Normatividad extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Normatividad" />
        <div className="d-flex align-items-start w-100">
          <div
            className="nav flex-column nav-pills me-3 w-25"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {dataNormatividad.map((buttonNormatividad) => (
              <button
                key={buttonNormatividad.id}
                className="btn btn-ite"
                id={"v-pills-" + buttonNormatividad.nameButton + "-tab"}
                data-bs-toggle="pill"
                data-bs-target={"#v-pills-" + buttonNormatividad.nameButton}
                type="button"
                role="tab"
                aria-controls={"v-pills-" + buttonNormatividad.nameButton}
                aria-selected="false"
              >
                {buttonNormatividad.titleButton}
              </button>
            ))}
          </div>
          <div className="tab-content w-75" id="v-pills-tabContent">
            {dataNormatividad.map((buttonNormatividad) => (
              <div
                key={buttonNormatividad.id}
                className="tab-pane fade"
                id={"v-pills-" + buttonNormatividad.nameButton}
                role="tabpanel"
                aria-labelledby={
                  "v-pills-" + buttonNormatividad.nameButton + "-tab"
                }
                tabIndex="0"
              >
                <ListBadge
                  ifNumbered={""}
                  listsBadgeItem={buttonNormatividad.children}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
