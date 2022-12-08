import React from "react";

export default function Accordion({ idAccordion, children }) {
  return (
    <div className="accordion accordion-flush" id={idAccordion}>
      {children}
    </div>
  );
}
