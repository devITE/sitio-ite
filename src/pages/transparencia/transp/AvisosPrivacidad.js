import React, { Component } from "react";
import ListBadgePDF from "../../../layout/ListBadgePDF";
import { dataAvisosPrivacidad } from "../../../assets/data/dataTransparenciaAvisosPrivacidad";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../img/imgT");

export default class AvisosPrivacidad extends Component {
  render() {
    return (
      <div className="mb-5">
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__header-title">
          Avisos de Privacidad
        </div>
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
                  <ListBadgePDF
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
