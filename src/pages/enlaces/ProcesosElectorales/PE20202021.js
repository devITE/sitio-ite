import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Modal from "../../../layout/Modal/Modal";
import ListBadge from "../../../layout/ListBadge";
import {
  dataGubernatura20202021,
  dataDiputaciones20202021,
  dataAyuntamientos20202021,
  dataPresidencias20202021,
} from "../../../assets/data/dataProcesosElectorales";

export default class PE20202021 extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Proceso Electoral 2020 - 2021" />
        <div className="Content__grid">
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Gubernatura20202021"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e21.png"
                alt="Resultados Gubernatura 2020 - 2021"
              />
            </a>
            <p className="mt-2">Resultados Gubernatura 2020 - 2021</p>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Diputaciones20202021"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e21.png"
                alt="Resultados Diputaciones MR 2020 - 2021"
              />
            </a>
            <p className="mt-2">Resultados Diputaciones MR 2020 - 2021</p>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Ayuntamientos20202021"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e21.png"
                alt="Resultados Ayuntamientos 2020 - 2021"
              />
            </a>
            <p className="mt-2">Resultados Ayuntamientos 2020 - 2021</p>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Presidencias20202021"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e21.png"
                alt="Resultados Presidencias de Comunidad 2020 - 2021"
              />
            </a>
            <p className="mt-2">
              Resultados Presidencias de Comunidad 2020 - 2021
            </p>
          </div>
        </div>

        <Modal
          idModal="Gubernatura20202021"
          titleModal="Resultados Gubernatura 2020 -2021"
          sizeModal=""
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataGubernatura20202021}
            />
          }
        />
        <Modal
          idModal="Diputaciones20202021"
          titleModal="Resultados Diputaciones 2020 -2021"
          sizeModal=""
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataDiputaciones20202021}
            />
          }
        />
        <Modal
          idModal="Ayuntamientos20202021"
          titleModal="Resultados Ayuntamientos 2020 -2021"
          sizeModal=""
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataAyuntamientos20202021}
            />
          }
        />
        <Modal
          idModal="Presidencias20202021"
          titleModal="Resultados Presidencias de Comunidad 2020 -2021"
          sizeModal=""
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataPresidencias20202021}
            />
          }
        />
      </>
    );
  }
}
