import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Modal from "../../../layout/Modal/Modal";
import ListBadge from "../../../layout/ListBadge";
import { dataResultados2018 } from "../../../data/dataProcesosElectorales";

export default class PE2018 extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Proceso Electoral 2017 - 2018" />
        <div className="Content__grid">
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#ResultadosElectorales2018"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e19.png"
                alt="Resultados Electorales 2018"
              />
            </a>
            <p className="mt-2">Resultados Electoral 2018</p>
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/procesosElect/PE2018/8.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e22.png"
                alt="Acta circunstanciada sobre destrucción de documentación electoral 17 junio 2019"
              />
            </a>
            <p className="mt-2">
              Acta circunstanciada sobre destrucción de documentación electoral
              17 junio 2019
            </p>
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/procesosElect/PE2018/9.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e22.png"
                alt="Acta circunstanciada sobre destrucción de documentación electoral 17 septiembre 2018"
              />
            </a>
            <p className="mt-2">
              Acta circunstanciada sobre destrucción de documentación electoral
              17 septiembre 2018
            </p>
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/procesosElect/PE2018/10.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/e22.png"
                alt="Informe destrucción de documentación electoral PELO 2018"
              />
            </a>
            <p className="mt-2">
              Informe destrucción de documentación electoral PELO 2018
            </p>
          </div>
        </div>
        <Modal
          idModal="ResultadosElectorales2018"
          titleModal="Resultados Electorales 2018"
          sizeModal=""
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataResultados2018} />
          }
        />
      </>
    );
  }
}
