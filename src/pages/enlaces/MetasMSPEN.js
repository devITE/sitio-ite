import React, { Component } from "react";
import ListBadge from "../../layout/ListBadge";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { dataMSPEN } from "../../assets/data/dataMSPEN";

export default class MetasMSPEN extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Metas MSPEN" />
        <div className="accordion accordion-flush" id="metasMSPEN">
          {dataMSPEN.map((accordionsItem) => (
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
                data-bs-parent="#metasMSPEN"
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
      </>
    );
  }
}
