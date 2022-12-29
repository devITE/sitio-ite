import React from "react";

export default function Accordion({ idAccordion, children, clasName }) {
  return (
    <div className={"accordion accordion-flush " + clasName} id={idAccordion}>
      {children}
    </div>
  );
}
