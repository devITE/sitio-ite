import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import {
  dataInfContable,
  dataCuentaPublica,
} from "../../../assets/data/dataTransparencia";

export default class InformacionContable extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Transparencia" subTitle="Información Contable" />
        <ListBadge ifNumbered={""} listsBadgeItem={dataInfContable} />
        <br />
        <br />
        <TitlePages title="" subTitle="Cuenta Pública" />
        <div className="accordion accordion-flush" id="cuentaPublica">
          {dataCuentaPublica.map((accordionsItem) => (
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
                data-bs-parent="#cuentaPublica"
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
