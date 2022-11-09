const Accordion = ({ idAccordion, accordionData, contentAccordion }) => {
  return (
    <div className="accordion accordion-flush" id={idAccordion}>
      {accordionData.map((accordionsItem) => (
        <div key={accordionsItem.id} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#flush-collapse" + accordionsItem.flushID}
              aria-expanded="false"
              aria-controls={"flush-collapse" + accordionsItem.flushID}
            >
              {accordionsItem.titleItem}
            </button>
          </h2>
          <div
            id={"flush-collapse" + accordionsItem.flushID}
            className="accordion-collapse collapse"
            data-bs-parent={"#" + idAccordion}
          >
            <div className="accordion-body">{contentAccordion}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
