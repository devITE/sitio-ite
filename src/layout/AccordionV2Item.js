const AccordionV2Item = (props) => {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + props.idAccordionV2Item}
            aria-expanded="false"
          >
            {props.titleAccordionITEM}
          </button>
        </h2>
        <div
          id={props.idAccordionV2Item}
          className="accordion-collapse collapse"
          data-bs-parent={props.idAccordion}
        >
          <div className="accordion-body">{props.contentAccordionV2Item}</div>
        </div>
      </div>
    </>
  );
};

export default AccordionV2Item;
