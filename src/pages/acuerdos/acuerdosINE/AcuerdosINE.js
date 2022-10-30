import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../layout/Modal";

import "../Acuerdos.css";

const Acuerdos__imgpath = require.context("../../../assets/img/imgA/");

export default class AcuerdosINE extends Component {
  render() {
    return (
      <>
        <img
          className="img-fluid w-100"
          src={Acuerdos__imgpath(`./AINE.png`)}
          alt="Acuerdos INE"
        />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalEjemplo"
        >
          Launch demo modal
        </button>
        <Modal
          idModal="modalEjemplo"
          titleModal="Modal EJEMPLO"
          contentModal="Contenido Modal"
        />
        <div className="w-100 mt-5 Acuerdos">
          <div>
            <Link to="/AcuerdosINE2015">
              <img
                className="img-fluid Acuerdos_link"
                src={Acuerdos__imgpath(`./2015.png`)}
                alt="Acuerdos INE 2015"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2016" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={Acuerdos__imgpath(`./2016.png`)}
                alt="Acuerdos INE 2016"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2020" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={Acuerdos__imgpath(`./2020.png`)}
                alt="Acuerdos INE 2020"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2021" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={Acuerdos__imgpath(`./2021.png`)}
                alt="Acuerdos INE 2021"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2022" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={Acuerdos__imgpath(`./2022.png`)}
                alt="Acuerdos INE 2022"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2023" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={Acuerdos__imgpath(`./2023.png`)}
                alt="Acuerdos INE 2023"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
