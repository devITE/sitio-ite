import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import ListBadgePDF from "../../../layout/ListBadge/ListBadgePDF";
import { dataHistorial } from "../../../assets/data/dataProcesosElectorales";

export default class HistorialPE extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Historial de Resultados Electorales (1995 - 2003)" />
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {dataHistorial.map((items) => (
            <div key={items.id} className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-" + items.titleItem}
                  aria-expanded="false"
                  aria-controls={"flush-" + items.titleItem}
                >
                  {items.titleItem}
                </button>
              </h2>
              <div
                id={"flush-" + items.titleItem}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ListBadgePDF
                    ifNumbered={""}
                    listsBadgeItem={items.children}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
