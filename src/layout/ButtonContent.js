const ButtonVPanel = (props) => {
  return (
    <div className="tab-content" id="v-pills-tabContent">
      {props.buttonsVPanel.map((buttonsVPanel) => (
        <div
          className="tab-pane fade"
          id={"v-pills-" + buttonsVPanel.titleButton}
          role="tabpanel"
          tabIndex="0"
        >
          Contenido de {buttonsVPanel.titleButton}
        </div>
      ))}
    </div>
  );
};

export default ButtonVPanel;
