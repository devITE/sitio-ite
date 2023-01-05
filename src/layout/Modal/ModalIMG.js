const ModalIMG = (props) => {
  return (
    <div
      className="modal fade"
      id={props.idModal}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <img className="img-fluid" src={props.linkIMG} alt={props.altIMG} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalIMG;
