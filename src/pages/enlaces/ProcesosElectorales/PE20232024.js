import React, { useEffect } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Modal from "../../../layout/Modal/Modal";
import ListBadge from "../../../layout/ListBadge";
import {
  dataElectos2024,
  //   dataDiputaciones20232024,
  //   dataAyuntamientos20232024,
  //   dataPresidencias20232024,
} from "../../../data/dataProcesosElectorales";

const PE20232024 = () => {
  useEffect(() => {
    document.title = `Proceso Electoral 2023 - 2024`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Proceso Electoral 2023 - 2024" />
      <div className="Content__grid">
        <div>
          <a
            href="/#"
            rel="noreferrer"
            data-bs-toggle="modal"
            data-bs-target="#Electos2024"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e21.png"
              alt="Resultados 2023 - 2024"
            />
          </a>
          <p className="mt-2">Resultados 2024</p>
        </div>
        {/* <div>
          <a
            href="/#"
            rel="noreferrer"
            data-bs-toggle="modal"
            data-bs-target="#Diputaciones20232024"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e21.png"
              alt="Resultados Diputaciones MR 2023 - 2024"
            />
          </a>
          <p className="mt-2">Resultados Diputaciones MR 2023 - 2024</p>
        </div>
        <div>
          <a
            href="/#"
            rel="noreferrer"
            data-bs-toggle="modal"
            data-bs-target="#Ayuntamientos20232024"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e21.png"
              alt="Resultados Ayuntamientos 2023 - 2024"
            />
          </a>
          <p className="mt-2">Resultados Ayuntamientos 2023 - 2024</p>
        </div>
        <div>
          <a
            href="/#"
            rel="noreferrer"
            data-bs-toggle="modal"
            data-bs-target="#Presidencias20232024"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e21.png"
              alt="Resultados Presidencias de Comunidad 2023 - 2024"
            />
          </a>
          <p className="mt-2">
            Resultados Presidencias de Comunidad 2020 - 2021
          </p>
        </div> */}
      </div>

      <Modal
        idModal="Electos2024"
        titleModal="Resultados 2023 -2024"
        sizeModal=""
        contentModal={
          <ListBadge ifNumbered={""} listsBadgeItem={dataElectos2024} />
        }
      />
      {/*
      <Modal
        idModal="Diputaciones20232024"
        titleModal="Resultados Diputaciones 2023 -2024"
        sizeModal=""
        contentModal={
          <ListBadge
            ifNumbered={""}
            listsBadgeItem={dataDiputaciones20232024}
          />
        }
      />
      <Modal
        idModal="Ayuntamientos20232024"
        titleModal="Resultados Ayuntamientos 2023 -2024"
        sizeModal=""
        contentModal={
          <ListBadge
            ifNumbered={""}
            listsBadgeItem={dataAyuntamientos20232024}
          />
        }
      />
      <Modal
        idModal="Presidencias20232024"
        titleModal="Resultados Presidencias de Comunidad 2023 -2024"
        sizeModal=""
        contentModal={
          <ListBadge
            ifNumbered={""}
            listsBadgeItem={dataPresidencias20232024}
          />
        }
      /> */}
    </>
  );
};
export default PE20232024;
