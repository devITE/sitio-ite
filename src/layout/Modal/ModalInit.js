import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import imgPopup from "../../assets/img/popupIndex/popupindex.jpg";

export default function ModalInit(enlace, alt) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {enlace === "" ? (
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <a href={enlace} target="_blank" rel="noreferrer">
              <img className="img-fluid" src={imgPopup} alt={alt} />
            </a>
            <h1>CON ENLACE</h1>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <img className="img-fluid" src={imgPopup} alt={alt} />
            <h1>SIN ENLACE</h1>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
