import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import "./EnlacesStyle.css";

const Enlaces_imgpath = require.context("../../img/memElect");
const Memorias_pdfpath = require.context("../../assets/pdf/memElect");

export default class MemoriasElectorales extends Component {
  render() {
    return (
      <div>
        <NavbarEnlaces />
        <div className="Enlances__title">Memorias Electorales</div>
        <div>
          <div>2020 - 2021</div>
          <div>
            <a
              href={Memorias_pdfpath(`./${"10.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid w-100 mt-3"
                src={Enlaces_imgpath(`./10.jpg`)}
                alt="Memoria Electoral del Proceso Electoral 2020-2021"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
