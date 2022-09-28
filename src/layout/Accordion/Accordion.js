const Accordion = ({ accordionsItem, accordionID }) => {
  return (
    <>
      <div className="accordion accordion-flush" id={accordionID}>
        {accordionsItem.map((accordionsItem) => (
          <div className="accordion-item">
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
              data-bs-parent={"#" + accordionID}
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
