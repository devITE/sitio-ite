import React, { Component } from "react";
import Modal from "../../../layout/Modal";
import ListBadgePDF from "../../../layout/ListBadgePDF";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import {
  dataEncuestas2016,
  dataCasillas,
} from "../../../assets/data/dataProcesosElectorales";

const PE20152016__path = require.context("../../../assets");

export default class PE20152016 extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Proceso Electoral 2015 - 2016" />
        <div className="Content__grid">
          <div>
            <a
              href={PE20152016__path(
                `./${"pdf/procesosElect/PE20152016/"}${"1.pdf"}`
              )}
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e21.png"}`)}
                alt="Consejos Distritales"
              />
            </a>
            <p className="mt-2">Consejos Distritales</p>
          </div>
          <div>
            <a
              href={PE20152016__path(
                `./${"pdf/procesosElect/PE20152016/"}${"2.pdf"}`
              )}
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e22.png"}`)}
                alt="Consejos Municipales"
              />
            </a>
            <p className="mt-2">Consejos Municipales</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Encuestas2016"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e23.png"}`)}
                alt="Encuestas 2016"
              />
            </a>
            <p className="mt-2">Encuestas 2016</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#UbicacionCasillas"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e21.png"}`)}
                alt="Lista de ubicación de casillas"
              />
            </a>
            <p className="mt-2">Lista de ubicación de casillas</p>
          </div>
        </div>
        {/* Modal */}
        <Modal
          idModal="Encuestas2016"
          titleModal="Encuestas 2016"
          contentModal={
            <ListBadgePDF ifNumbered={""} listsBadgeItem={dataEncuestas2016} />
          }
        />
        <Modal
          idModal="UbicacionCasillas"
          titleModal="Lista de ubicación de casillas"
          contentModal={
            <ListBadgePDF ifNumbered={""} listsBadgeItem={dataCasillas} />
          }
        />
      </>
    );
  }
}
