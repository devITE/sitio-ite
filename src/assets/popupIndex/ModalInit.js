import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

// const ModalInit__path = require.context("./");

export default function ModalInit({ url, linkToo, imgLink }) {
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
          {(url === "") & (linkToo === "") ? (
            <>
              <img className="img-fluid" src={imgLink} alt="Imagen del popup" />
            </>
          ) : (url === "") & (linkToo !== "") ? (
            <>
              {/* <a
                href={ModalInit__path(`./${pdf + ".pdf"}`)}
                target="_blank"
                rel="noreferrer"
              > */}
              <Link to={linkToo}>
                <img
                  className="img-fluid"
                  src={imgLink}
                  alt="Imagen del popup"
                />
              </Link>
              {/* </a> */}
            </>
          ) : (
            <>
              <a href={url} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid"
                  src={imgLink}
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
