import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import { dataAvisosPrivacidad } from "../../../assets/data/dataTransparenciaAvisosPrivacidad";
import "../Transparencia.css";

export default class AvisosPrivacidad extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Avisos de Privacidad" />
        <div className="accordion accordion-flush mt-3" id="aaaa">
          {dataAvisosPrivacidad.map((accordionsItem) => (
            <div key={accordionsItem.id} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-collapse" + accordionsItem.flushID}
                  aria-expanded="false"
                  aria-controls={"flush-collapse" + accordionsItem.flushID}
                >
                  {accordionsItem.titleItem}
                </button>
              </h2>
              <div
                id={"flush-collapse" + accordionsItem.flushID}
                className="accordion-collapse collapse"
                data-bs-parent="#aaaa"
              >
                <div className="accordion-body">
                  <ListBadge
                    ifNumbered={""}
                    listsBadgeItem={accordionsItem.children}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
