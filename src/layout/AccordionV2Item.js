const AccordionV2Item = (props) => {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"3" + props.idAccordionV2Item}
            aria-expanded="false"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id={props.idAccordionV2Item}
          className="accordion-collapse collapse"
          data-bs-parent={props.idAccordion}
        >
          <div className="accordion-body">
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Home
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Profile
            </button>
            <button
              className="nav-link"
              id="v-pills-disabled-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-disabled"
              type="button"
              role="tab"
              aria-selected="false"
              disabled
            >
              Disabled
            </button>
            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Messages
            </button>
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionV2Item;
