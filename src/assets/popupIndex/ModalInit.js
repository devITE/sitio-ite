import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import imgPopup from "./popupIndex.jpg";

const ModalInit__path = require.context("./");

export default function ModalInit({ url, pdf }) {
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
          {(url === "") & (pdf === "") ? (
            <>
              <img
                className="img-fluid"
                src={imgPopup}
                alt="Imagen del popup"
              />
            </>
          ) : (url === "") & (pdf !== "") ? (
            <>
              <a
                href={ModalInit__path(`./${pdf + ".pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid"
                  src={imgPopup}
                  alt="Imagen del popup"
                />
              </a>
            </>
          ) : (
            <>
              <a href={url} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid"
                  src={imgPopup}
                  alt="Imagen del popup"
                />
              </a>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
