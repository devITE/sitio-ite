import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import imgPopup from "../../assets/img/popupIndex/popupindex.jpg";

export default function PRUEBAS() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img className="img-fluid" src={imgPopup} alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
}
