import React, { Component } from "react";
import Accordion from "../../layout/Accordion/Accordion";
import ListBadgePDF from "../../layout/ListBadge/ListBadgePDF";
import { dataAccordion } from "../../assets/data/dataAccordion";
import { dataListBadge } from "../../assets/data/dataListBadge";
// import { ListItem } from "@mui/material";

export default class MetasMSPEN extends Component {
  render() {
    return (
      <div>
        MetasMSPEN
        <Accordion
          accordionsItem={dataAccordion}
          accordionID={"accordionFlushExample"}
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
