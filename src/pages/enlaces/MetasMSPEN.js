import React, { Component } from "react";
import Accordion from "../../layout/Accordion/Accordion";
import { dataAccordion } from "../../assets/data/dataAccordion";

export default class MetasMSPEN extends Component {
  render() {
    return (
      <div>
        MetasMSPEN
        <Accordion
          accordionsItem={dataAccordion}
          accordionID={"accordionFlushExample"}
        />
      </div>
    );
  }
}
