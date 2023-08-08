import React, { useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import Accordion from "../../../layout/Accordion/Accordion";
import AccordionItem from "../../../layout/Accordion/AccordionItem";
import { dataAvisosPrivacidad } from "../../../data/dataTransparenciaAvisosPrivacidad";
import "../Transparencia.css";

const Privacidad = () => {
  useEffect(() => {
    document.title = `Avisos de Privacidad`;
  }, []);
  return (
    <div>
      <TitlePages title="Transparencia" subTitle="Avisos de Privacidad" />
      <Accordion idAccordion="avisosPrivacidad" clasName={"w-75 mx-auto"}>
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
};
export default Privacidad;
