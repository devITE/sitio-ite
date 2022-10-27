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
          <div className="modal-body">
            <img className="img-fluid" src={props.linkIMG} alt={props.altIMG} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalIMG;
