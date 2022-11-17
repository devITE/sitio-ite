import React from "react";
import AccordionV1Item from "./AccordionV1Item";

export default function AccordionV1({ idAccordion, children }) {
  //   return <button>{children}</button>;
  return (
    <div className="accordion accordion-flush" id={idAccordion}>
      {children}
      <AccordionV1Item idA={idAccordion} />
    </div>
  );
}
