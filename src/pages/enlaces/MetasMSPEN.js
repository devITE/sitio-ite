import React, { Component } from "react";
import ListBadgePDF from "../../layout/ListBadge/ListBadgePDF";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { dataMSPEN } from "../../assets/data/dataTransparenciaMSPEN";

export default class MetasMSPEN extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title">Metas MSPEN</div>
        <div className="accordion accordion-flush mt-3" id="metasMSPEN">
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
