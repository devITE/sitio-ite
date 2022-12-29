import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import Accordion from "../../../layout/Accordion/Accordion";
import AccordionItem from "../../../layout/Accordion/AccordionItem";
import {
  dataInfContable,
  dataCuentaPublica,
} from "../../../assets/data/dataTransparencia";

export default class InformacionContable extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Transparencia" subTitle="Información Contable" />
        <ListBadge
          ifNumbered={""}
          listsBadgeItem={dataInfContable}
          clasName="w-75 mx-auto"
        />
        <br />
        <br />
        <TitlePages title="" subTitle="Cuenta Pública" />
        <Accordion idAccordion="cuentaPublica" clasName={"w-75 mx-auto"}>
          {dataCuentaPublica.map((accordionsItem) => (
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
              idAccordion="cuentaPublica"
            />
          ))}
        </Accordion>
      </div>
    );
  }
}
