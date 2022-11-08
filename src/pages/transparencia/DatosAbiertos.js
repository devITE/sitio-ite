import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileWord } from "@fortawesome/free-solid-svg-icons";
import TitlePages from "../../layout/TitlePages";
import Modal from "../../layout/Modal";
import { dataDatosAbiertos } from "../../assets/data/dataTransparencia";

export default class DatosAbiertos extends Component {
  render() {
    return (
      <>
        <TitlePages title="Transparencia" subTitle="Datos Abiertos" />
        <div className="accordion accordion-flush" id="datosAbiertos">
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
                data-bs-parent="#datosAbiertos"
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

                      {/* Modal */}
                      <Modal
                        idModal={buttonModal.idModal}
                        titleModal={buttonModal.titleModal}
                        sizeModal="modal-lg"
                        contentModal={buttonModal.subChildren.map(
                          (contentM) => (
                            <div key={contentM.id}>
                              <h1>-----</h1>
                              {contentM.subChild.map((resourceItem) => (
                                <div key={resourceItem.id}>
                                  <h1>
                                    ---------
                                    {}
                                  </h1>
                                </div>
                              ))}
                              {/* <h5 className="mb-0">Tema: </h5>
                            {content.titleTheme}
                            <h5 className="mt-3 mb-0">Palabras clave: </h5>
                            {content.keyWords}
                            <h5 className="mt-3 mb-0">Descripción: </h5>
                            {content.description}
                            <h5 className="mt-3 mb-0">Área responsable: </h5>
                            {content.area}
                            <h5 className="mt-3 mb-0">Última actualización:</h5>
                            {content.dateUpdate}
                            <h5 className="mt-3 mb-0">
                              Responsable de los datos:
                            </h5>
                            {content.contactName}
                            <h5 className="mt-3 mb-0">Correo electrónico: </h5>
                            {content.contactEmail}
                            <h5 className="mt-3 mb-0">Datos y recursos: </h5> */}
                            </div>
                          )
                        )}
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
  }
}
