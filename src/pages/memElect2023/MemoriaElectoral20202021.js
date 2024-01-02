import React, { useEffect } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import "./MemoriaElectoral20202021.css";

export const MemoriaElectoral20202021 = () => {
  useEffect(() => {
    document.title = `Anexos de la Memoria Electoral 2020 - 2021`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Anexos de la Memoria Electoral 2020 - 2021" />
      <div className="Memoria2023__grid">
        <div className="Memoria2023__item">
          <div className="Memoria2023__header w-100">
            <b>Anexo 9.1</b>
            <br />
            Resultados Electorales
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/memElect/11/Anexo9.1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid w-100"
                src="https://itetlax.org.mx/assets/img/memElect/Anexo9.1.png"
                alt="Anexo 9.1"
              />
            </a>
          </div>
        </div>

        <div className="Memoria2023__item">
          <div className="Memoria2023__header w-100">
            <b>Anexo 9.2</b>
            <br />
            Integración de Consejos Distritales
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/memElect/11/Anexo9.2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid w-100"
                src="https://itetlax.org.mx/assets/img/memElect/Anexo9.2.png"
                alt="Anexo 9.2"
              />
            </a>
          </div>
        </div>

        <div className="Memoria2023__item">
          <div className="Memoria2023__header w-100">
            <b>Anexo 9.3</b>
            <br />
            Acuerdos
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/memElect/11/Anexo9.3.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid w-100"
                src="https://itetlax.org.mx/assets/img/memElect/Anexo9.3.png"
                alt="Anexo 9.3"
              />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default MemoriaElectoral20202021;
