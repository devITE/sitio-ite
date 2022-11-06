/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Modal from "../../../layout/Modal";
import ModalIMG from "../../../layout/ModalIMG";
import ListBadge from "../../../layout/ListBadge";
import {
  dataEstructuraOrganica,
  dataNormatividad,
  dataPOA,
  dataSemblanza,
  dataDeclaracionPatrimonial,
  dataCodigoEtica,
} from "../../../assets/data/dataOIC";
import "../EnlacesStyle.css";

const OIC__imgpath = require.context("../../../assets/img");

export default class OIC extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Órgano Interno de Control" />
        <div className="Content__grid">
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#EstructuraOrganica"
            >
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e11.png"}`)}
                alt="Estructura Orgánica"
              />
            </a>
            <p className="mt-2">Estructura Orgánica</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Atribuciones"
            >
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e12.png"}`)}
                alt="Atribuciones"
              />
            </a>
            <p className="mt-2">Atribuciones</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Normatividad"
            >
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e13.png"}`)}
                alt="Normatividad"
              />
            </a>
            <p className="mt-2">Normatividad</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Programas"
            >
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e14.png"}`)}
                alt="Programas"
              />
            </a>
            <p className="mt-2">Programas</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Semblanza"
            >
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e15.png"}`)}
                alt="Semblanza"
              />
            </a>
            <p className="mt-2">Semblanza</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#DeclaracionPatrimonial"
            >
              {/* <Link to="/DeclaracionPatrimonial"> */}
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e16.png"}`)}
                alt="Declaración Patrimonial"
              />
              {/* </Link> */}
            </a>
            <p className="mt-2">Declaración Patrimonial</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#CodigodeEtica"
            >
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e17.png"}`)}
                alt="Código de Ética"
              />
            </a>
            <p className="mt-2">Código de Ética</p>
          </div>
          <div>
            <Link to="/Galeria">
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e18.png"}`)}
                alt="Galería"
              />
            </Link>
            <p className="mt-2">Galería</p>
          </div>
        </div>
        {/* Modal */}
        <Modal
          idModal="EstructuraOrganica"
          titleModal="Estructura Orgánica del Órgano Interno de Control"
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataEstructuraOrganica}
            />
          }
        />
        <ModalIMG
          idModal="Atribuciones"
          linkIMG={OIC__imgpath(`./${"OIC/"}${"1.jpg"}`)}
          altIMG="Atribuciones"
        />
        <Modal
          idModal="Normatividad"
          titleModal="Normatividad"
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataNormatividad} />
          }
        />
        <Modal
          idModal="Programas"
          titleModal="Programas"
          contentModal={<ListBadge ifNumbered={""} listsBadgeItem={dataPOA} />}
        />
        <Modal
          idModal="Semblanza"
          titleModal="Semblanza"
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataSemblanza} />
          }
        />
        <Modal
          idModal="DeclaracionPatrimonial"
          titleModal="Declaración Patrimonial"
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
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataCodigoEtica} />
          }
        />
      </>
    );
  }
}
