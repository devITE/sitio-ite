import AccordionV2Item from "./AccordionV2Item";
const AccordionV2Item = (props) => {
  return (
    <>
      <div className="accordion accordion-flush" id={props.accordionID}>
        <AccordionV2Item idAccordion={accordionID} />
      </div>
    </>
  );
};

export default AccordionV2;
