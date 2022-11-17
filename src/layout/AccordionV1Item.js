const AccordionV1Item = ({ titleItem, contentItem, flushID, idA }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-" + flushID}
          aria-expanded="false"
          aria-controls={"flush-" + flushID}
        >
          {titleItem}
        </button>
      </h2>
      <div
        id={"flush-" + flushID}
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent={"#" + idA}
      >
        <div className="accordion-body">{contentItem}</div>
      </div>
    </div>
  );
};

export default AccordionV1Item;
