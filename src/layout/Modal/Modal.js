const Modal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.idModal}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div
        className={"modal-dialog modal-dialog-centered " + props.sizeModal + ""}
      >
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title fs-5 text-light fw-bolder">
              {props.titleModal}
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.contentModal}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
