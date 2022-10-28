/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import Modal from "../../layout/Modal";
import ModalIMG from "../../layout/ModalIMG";

// import { dataInf } from "../../assets/data/dataInfografias";
import "./EnlacesStyle.css";

const OIC__imgpath = require.context("../../img");
// const OIC__img2path = require.context("../../img/OIC");

export default class OIC extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title mb-3">Órgano Interno de Control</div>
        <div className="Content__grid">
          <div>
            <a href data-bs-toggle="modal" data-bs-target="#EstructuraOrganica">
              <img
                className="img-fluid"
                src={OIC__imgpath(`./${"icons/"}${"e11.png"}`)}
                alt="Estructura Orgánica"
              />
            </a>
            <p className="mt-2">Estructura Orgánica</p>
            <Modal
              idModal="EstructuraOrganica"
              titleModal="Estructura Orgánica del Órgano Interno de Control"
              contentModal="---"
            />
          </div>
          <div>
            <a
              href="false"
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
            <img
              className="img-fluid"
              src={OIC__imgpath(`./${"icons/"}${"e13.png"}`)}
              alt="Normatividad"
            />
            <p className="mt-2">Normatividad</p>
          </div>
          <div>
            <img
              className="img-fluid"
              src={OIC__imgpath(`./${"icons/"}${"e14.png"}`)}
              alt="Programas"
            />
            <p className="mt-2">Programas</p>
          </div>
          <div>
            <img
              className="img-fluid"
              src={OIC__imgpath(`./${"icons/"}${"e15.png"}`)}
              alt="Semblanza"
            />
            <h5>Semblanza</h5>
          </div>
          <div>
            <img
              className="img-fluid"
              src={OIC__imgpath(`./${"icons/"}${"e16.png"}`)}
              alt="Declaración Patrimonial"
            />
            <p className="mt-2">Declaración Patrimonial</p>
          </div>
          <div>
            <img
              className="img-fluid"
              src={OIC__imgpath(`./${"icons/"}${"e17.png"}`)}
              alt="Código de Ética"
            />
            <p className="mt-2">Código de Ética</p>
          </div>
          <div>
            <img
              className="img-fluid"
              src={OIC__imgpath(`./${"icons/"}${"e18.png"}`)}
              alt="Galería"
            />
            <p className="mt-2">Galería</p>
          </div>
        </div>
        <ModalIMG
          idModal="Atribuciones"
          linkIMG={OIC__imgpath(`./${"imgEInf/2022/"}${"2.jpeg"}`)}
          // linkIMG={OIC__imgpath(`./${"OIC/"}${"1.jpg"}`)}

          altIMG="Atribuciones"
        />
      </div>
    );
  }
}
