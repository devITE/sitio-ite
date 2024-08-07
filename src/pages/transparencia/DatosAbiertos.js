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
import Breadcrumbs from "../../layout/Breadcrumbs";

const AccordionItem = ({ item }) => (
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#flush-collapse" + item.flushID}
        aria-expanded="false"
        aria-controls={"flush-collapse" + item.flushID}
      >
        {item.titleItem}
      </button>
    </h2>
    <div
      id={"flush-collapse" + item.flushID}
      className="accordion-collapse collapse"
      data-bs-parent="#metasMSPEN"
    >
      <div className="accordion-body">
        {item.children.map((buttonModal) => (
          <ModalButton key={buttonModal.id} buttonModal={buttonModal} />
        ))}
      </div>
    </div>
  </div>
);

const ModalButton = ({ buttonModal }) => (
  <div>
    <button
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
      contentModal={<ModalContent buttonModal={buttonModal} />}
    />
  </div>
);

const ModalContent = ({ buttonModal }) => (
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
    <h5 className="mt-3 mb-0">Responsable de los datos:</h5>
    {buttonModal.contactName}
    <h5 className="mt-3 mb-0">Correo electrónico: </h5>
    {buttonModal.contactEmail}
    <h5 className="mt-3 mb-0">Datos y recursos: </h5>
    {buttonModal.subChildren.map((content) => (
      <DocumentLink key={content.id} content={content} />
    ))}
  </div>
);

const DocumentLink = ({ content }) => {
  const icons = {
    pdf: faFilePdf,
    word: faFileWord,
    excel: faFileExcel,
  };

  const btnClasses = {
    pdf: "btn btn-danger",
    word: "btn btn-primary",
    excel: "btn btn-success",
  };

  return (
    <div className="mt-1 mb-1">
      <a
        href={content.resoursePath}
        target="_blank"
        rel="noreferrer"
        className={btnClasses[content.typeDocument]}
      >
        <FontAwesomeIcon icon={icons[content.typeDocument]} />
      </a>
      &nbsp;{content.resourseTitle}
    </div>
  );
};

export const DatosAbiertos = () => {
  useEffect(() => {
    document.title = `Datos Abiertos`;
  }, []);

  return (
    <>
      <Breadcrumbs path={[{ label: "Datos Abiertos" }]} />
      <TitlePages title="Transparencia" subTitle="Datos Abiertos" />
      <div className="accordion accordion-flush w-50 mx-auto" id="metasMSPEN">
        {dataDatosAbiertos.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default DatosAbiertos;
