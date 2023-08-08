import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import TitlePages from "../../layout/TitlePages";
import Modal from "../../layout/Modal/Modal";
import { dataDatosAbiertos } from "../../data/dataTransparencia";

export const DatosAbiertos = () => {
  useEffect(() => {
    document.title = `Datos Abiertos`;
  }, []);
  return (
    <>
      <TitlePages title="Transparencia" subTitle="Datos Abiertos" />
      <div className="accordion accordion-flush w-50 mx-auto" id="metasMSPEN">
        {dataDatosAbiertos.map((accordionsItem) => (
          <div key={accordionsItem.id} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#flush-collapse" + accordionsItem.flushID}
                aria-expanded="false"
                aria-controls={"flush-collapse" + accordionsItem.flushID}
              >
                {accordionsItem.titleItem}
              </button>
            </h2>
            <div
              id={"flush-collapse" + accordionsItem.flushID}
              className="accordion-collapse collapse"
              data-bs-parent="#metasMSPEN"
            >
              <div className="accordion-body">
                {accordionsItem.children.map((buttonModal) => (
                  <div key={buttonModal.id}>
                    <button
                      key={buttonModal.id}
                      className="btn btn-ite w-100"
                      data-bs-toggle="modal"
                      data-bs-target={"#" + buttonModal.idModal}
                    >
                      {buttonModal.titleModal}
                    </button>
                    <Modal
                      idModal={buttonModal.idModal}
                      titleModal={buttonModal.titleModal}
                      sizeModal="modal-lg"
                      contentModal={
                        <div>
                          <h5 className="mb-0">Tema: </h5>
                          {buttonModal.titleTheme}
                          <h5 className="mt-3 mb-0">Palabras clave: </h5>
                          {buttonModal.keyWords}
                          <h5 className="mt-3 mb-0">Descripción: </h5>
                          {buttonModal.description}
                          <h5 className="mt-3 mb-0">Área responsable: </h5>
                          {buttonModal.area}
                          <h5 className="mt-3 mb-0">Última actualización:</h5>
                          {buttonModal.dateUpdate}
                          <h5 className="mt-3 mb-0">
                            Responsable de los datos:
                          </h5>
                          {buttonModal.contactName}
                          <h5 className="mt-3 mb-0">Correo electrónico: </h5>
                          {buttonModal.contactEmail}
                          <h5 className="mt-3 mb-0">Datos y recursos: </h5>
                          {buttonModal.subChildren.map((content) => (
                            <div key={content.id}>
                              {
                                {
                                  pdf: (
                                    <a
                                      href={content.resoursePath}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-1 mb-1 btn btn-danger"
                                    >
                                      <FontAwesomeIcon icon={faFilePdf} />
                                    </a>
                                  ),
                                  word: (
                                    <a
                                      href={content.resoursePath}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-1 mb-1 btn btn-primary"
                                    >
                                      <FontAwesomeIcon icon={faFileWord} />
                                    </a>
                                  ),
                                  excel: (
                                    <a
                                      href={content.resoursePath}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-1 mb-1 btn btn-success"
                                    >
                                      <FontAwesomeIcon icon={faFileExcel} />
                                    </a>
                                  ),
                                }[content.typeDocument]
                              }
                              &nbsp;{content.resourseTitle}
                            </div>
                          ))}
                        </div>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DatosAbiertos;
