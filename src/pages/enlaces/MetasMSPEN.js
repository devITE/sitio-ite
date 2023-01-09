import React, { Component } from "react";
import ListBadge from "../../layout/ListBadge";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import Accordion from "../../layout/Accordion/Accordion";
import AccordionItem from "../../layout/Accordion/AccordionItem";
import { dataMSPEN } from "../../data/dataMSPEN";

export default class MetasMSPEN extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Metas MSPEN" />
        <Accordion idAccordion="metasMSPEN">
          {dataMSPEN.map((infoAccordion) => (
            <AccordionItem
              key={infoAccordion.id}
              flushID={infoAccordion.flushID}
              titleItem={infoAccordion.titleItem}
              contentItem={
                <ListBadge
                  ifNumbered={""}
                  listsBadgeItem={infoAccordion.children}
                />
              }
              idAccordion="metasMSPEN"
            />
          ))}
        </Accordion>
      </>
    );
  }
}
