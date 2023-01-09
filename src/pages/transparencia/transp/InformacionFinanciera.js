import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import Accordion from "../../../layout/Accordion/Accordion";
import AccordionItem from "../../../layout/Accordion/AccordionItem";
import {
  dataInfFinanciera,
  dataInfo2016,
} from "../../../data/dataTransparencia";
import "../Transparencia.css";

export default class InformacionFinanciera extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Transparencia" subTitle="Información Financiera" />
        <ListBadge
          ifNumbered={""}
          listsBadgeItem={dataInfFinanciera}
          clasName="w-75 mx-auto"
        />
        <br />
        <Accordion
          idAccordion="informacionFinanciera"
          clasName={"w-75 mx-auto"}
        >
          {dataInfo2016.map((infoAccordion) => (
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
              idAccordion="informacionFinanciera"
            />
          ))}
        </Accordion>
      </div>
    );
  }
}
