import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Modal from "../../../layout/Modal/Modal";
import ModalIMG from "../../../layout/Modal/ModalIMG";
import ListBadge from "../../../layout/ListBadge";
import {
  dataEstructuraOrganica,
  dataNormatividad,
  dataPOA,
  dataSemblanza,
  dataDeclaracionPatrimonial,
  dataCodigoEtica,
} from "../../../data/dataOIC";
import "../EnlacesStyle.css";

export default class OIC extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Órgano Interno de Control" />
        <div className="Content__grid">
          <div>
            <a
              href="#/"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#EstructuraOrganica"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e11.png"
                alt="Estructura Orgánica"
              />
            </a>
            <p className="mt-2">Estructura Orgánica</p>
          </div>
          <div>
            <a
              href="#/"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Atribuciones"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e12.png"
                alt="Atribuciones"
              />
            </a>
            <p className="mt-2">Atribuciones</p>
          </div>
          <div>
            <a
              href="#/"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Normatividad"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e13.png"
                alt="Normatividad"
              />
            </a>
            <p className="mt-2">Normatividad</p>
          </div>
          <div>
            <a
              href="#/"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Programas"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e14.png"
                alt="Programas"
              />
            </a>
            <p className="mt-2">Programas</p>
          </div>
          <div>
            <a
              href="#/"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Semblanza"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e15.png"
                alt="Semblanza"
              />
            </a>
            <p className="mt-2">Semblanza</p>
          </div>
          <div>
            <a
              href="#/"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#DeclaracionPatrimonial"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e16.png"
                alt="Declaración Patrimonial"
              />
            </a>
            <p className="mt-2">Declaración Patrimonial</p>
          </div>
          <div>
            <a
              href="#/"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#CodigodeEtica"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e17.png"
                alt="Código de Ética"
              />
            </a>
            <p className="mt-2">Código de Ética</p>
          </div>
          <div>
            <Link to="/GaleriaOIC">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e18.png"
                alt="Galería"
              />
            </Link>
            <p className="mt-2">Galería</p>
          </div>
        </div>
        <Modal
          idModal="EstructuraOrganica"
          titleModal="Estructura Orgánica del Órgano Interno de Control"
          sizeModal=""
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataEstructuraOrganica}
            />
          }
        />
        <ModalIMG
          idModal="Atribuciones"
          linkIMG="https://itetlax.org.mx/assets/img/OIC/1.jpg"
          altIMG="Atribuciones"
        />
        <Modal
          idModal="Normatividad"
          titleModal="Normatividad"
          sizeModal=""
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataNormatividad} />
          }
        />
        <Modal
          idModal="Programas"
          titleModal="Programas"
          sizeModal=""
          contentModal={<ListBadge ifNumbered={""} listsBadgeItem={dataPOA} />}
        />
        <Modal
          idModal="Semblanza"
          titleModal="Semblanza"
          sizeModal=""
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataSemblanza} />
          }
        />
        <Modal
          idModal="DeclaracionPatrimonial"
          titleModal="Declaración Patrimonial"
          sizeModal=""
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataDeclaracionPatrimonial}
            />
          }
        />
        <Modal
          idModal="CodigodeEtica"
          titleModal="CodigodeEtica"
          sizeModal=""
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataCodigoEtica} />
          }
        />
      </>
    );
  }
}
