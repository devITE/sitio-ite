import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import Accordion from "../../../layout/Accordion/Accordion";
import AccordionItem from "../../../layout/Accordion/AccordionItem";
import { dataAvisosPrivacidad } from "../../../assets/data/dataTransparenciaAvisosPrivacidad";
import "../Transparencia.css";

export default class AvisosPrivacidad extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Transparencia" subTitle="Avisos de Privacidad" />
        <Accordion idAccordion="avisosPrivacidad">
          {dataAvisosPrivacidad.map((accordionsItem) => (
            <AccordionItem
              key={accordionsItem.id}
              flushID={accordionsItem.flushID}
              titleItem={accordionsItem.titleItem}
              contentItem={
                <ListBadge
                  ifNumbered={""}
                  listsBadgeItem={accordionsItem.children}
                />
              }
              idAccordion="avisosPrivacidad"
            />
          ))}
        </Accordion>
      </div>
    );
  }
}
