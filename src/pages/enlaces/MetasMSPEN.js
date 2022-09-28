import React, { Component } from "react";
import Accordion from "../../layout/Accordion";
import ListBadgePDF from "../../layout/ListBadge/ListBadgePDF";
import { dataAccordion } from "../../assets/data/dataAccordion";
import { dataListBadge } from "../../assets/data/dataListBadge";
import { dataExample } from "../../assets/data/dataExample";
// import { ListItem } from "@mui/material";

console.dir(dataAccordion.id);
export default class MetasMSPEN extends Component {
  render() {
    return (
      <div>
        MetasMSPEN
        <hr />
        {/*  */}
        <div className="accordion accordion-flush" id="accordionExample">
          {dataExample.map((accordionsItem) => (
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
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {/* Contenido del item del acordeon */}
                  {accordionsItem.children.map((childrenItem) => (
                    <h1 key={childrenItem.id}>{childrenItem.titleItem}</h1>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <hr />
        <Accordion
          accordionsItem={dataAccordion}
          accordionID="accordionFlushExample"
          content={
            <ListBadgePDF
              ifNumbered={"list-group-numbered"}
              listsBadgeItem={dataListBadge}
            />
          }
        />
        <ListBadgePDF
          ifNumbered={"list-group-numbered"}
          listsBadgeItem={dataListBadge}
        />
      </div>
    );
  }
}
