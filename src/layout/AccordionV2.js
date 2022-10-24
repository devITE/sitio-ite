import AccordionV2Item from "./AccordionV2Item";
const AccordionV2 = (props) => {
  return (
    <>
      <div className="accordion accordion-flush" id={props.accordionV2ID}>
        {props.itemsAccordionV2.map((itemsAccordionV2) => (
          <AccordionV2Item
            key={itemsAccordionV2.idAccordionV2Item}
            idAccordion={props.accordionV2ID}
            idAccordionV2Item={itemsAccordionV2.idAccordionV2Item}
            titleAccordionITEM={itemsAccordionV2.titleAccordionITEM}
            // contentAccordionV2Item={itemsAccordionV2.children}
          />
        ))}
      </div>
    </>
  );
};

export default AccordionV2;
