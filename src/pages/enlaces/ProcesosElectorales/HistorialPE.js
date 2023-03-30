import React, { useEffect } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Accordion from "../../../layout/Accordion/Accordion";
import AccordionItem from "../../../layout/Accordion/AccordionItem";
import ListBadge from "../../../layout/ListBadge";
import { dataHistorial } from "../../../data/dataProcesosElectorales";

const HistorialPE = () => {
  useEffect(() => {
    document.title = `Historial de Resultados Electorales (1995 - 2003)`;
  }, []);
    return (
      <>
        <NavbarEnlaces title="Historial de Resultados Electorales (1995 - 2003)" />
        <Accordion idAccordion="historialPE" clasName={"w-75 mx-auto"}>
          {dataHistorial.map((infoAccordion) => (
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
              idAccordion="historialPE"
            />
          ))}
        </Accordion>
      </>
    );
  }
  export default HistorialPE;
