const ModalDownload = (props) => {
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
          <div className="modal-body">
            <img className="img-fluid" src={props.linkIMG} alt={props.altIMG} />
          </div>
          <div className="modal-footer">
            <a
              className="btn btn-success"
              href={props.downloadModal}
              download
              target="_blank"
            >
              Descargar
            </a>
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

export default ModalDownload;
