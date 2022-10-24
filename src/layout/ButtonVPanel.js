const ButtonVPanel = (buttonsVPanelItems) => {
  return (
    <>
      {buttonsVPanelItems.map((buttonsVPanelItems) => (
        <button
          key={buttonsVPanelItems.id}
          className="nav-link"
          id={"v-pills-profile-" + buttonsVPanelItems.titleButton + "-tab"}
          data-bs-toggle="pill"
          data-bs-target={"#v-pills-" + buttonsVPanelItems.titleButton}
          type="button"
          role="tab"
          aria-selected="false"
        >
          {buttonsVPanelItems.titleButton}
        </button>
      ))}
    </>
  );
};

export default ButtonVPanel;
