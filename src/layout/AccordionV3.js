const AccordionV3 = (props) => {
  return (
    <div className="accordion accordion-flush" id={props.idAccordion}>
      {props.itemsAccordion.map((accordionItems) => (
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#flush-" + accordionItems.nameItem}
              aria-expanded="false"
              aria-controls={"flush-" + accordionItems.nameItem}
            >
              {accordionItems.titleItem}
            </button>
          </h2>
          <div
            id={"flush-" + accordionItems.nameItem}
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {accordionItems.contentAccordion}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionV3;
