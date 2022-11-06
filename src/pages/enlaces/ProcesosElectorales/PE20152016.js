import React, { Component } from "react";
import Modal from "../../../layout/Modal";
import ListBadge from "../../../layout/ListBadge";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import {
  dataEncuestas2016,
  dataCasillas2016,
  dataResultados2016,
  dataResultadosSeccion2016,
  dataListadoCandidatos2016,
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
              target="_blank"
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
              target="_blank"
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
              href="/#"
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
              href="/#"
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
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#ResultadosElectorales"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e22.png"}`)}
                alt="Resultados Electorales"
              />
            </a>
            <p className="mt-2">Resultados Electorales</p>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#ResultadosElectoralesSeccion"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e22.png"}`)}
                alt="Resultados Electorales por Sección"
              />
            </a>
            <p className="mt-2">Resultados Electorales por Sección</p>
          </div>
          <div>
            <a
              href={PE20152016__path(
                `./${"pdf/procesosElect/PE20152016/"}${"22.pdf"}`
              )}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e24.png"}`)}
                alt="Calendario"
              />
            </a>
            <p className="mt-2">Calendario</p>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#ListadoCandidatos"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e21.png"}`)}
                alt="Listado de Candidatos"
              />
            </a>
            <p className="mt-2">Listado de Candidatos</p>
          </div>
          <div>
            <a
              href={PE20152016__path(
                `./${"pdf/procesosElect/PE20152016/"}${"27.pdf"}`
              )}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e21.png"}`)}
                alt="Presidencias de Comunidad"
              />
            </a>
            <p className="mt-2">Presidencias de Comunidad</p>
          </div>
          <div>
            <a
              href={PE20152016__path(
                `./${"pdf/procesosElect/PE20152016/"}${"28.pdf"}`
              )}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e22.png"}`)}
                alt="Lista Nominal"
              />
            </a>
            <p className="mt-2">Lista Nominal</p>
          </div>
          <div>
            <a
              href={PE20152016__path(
                `./${"pdf/procesosElect/PE20152016/"}${"28.pdf"}`
              )}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e22.png"}`)}
                alt="Informe final Ente Auditor PREP"
              />
            </a>
            <p className="mt-2">Informe final Ente Auditor PREP</p>
          </div>
          <div>
            <a
              href={PE20152016__path(
                `./${"pdf/procesosElect/PE20152016/"}${"29.pdf"}`
              )}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid"
                src={PE20152016__path(`./${"img/icons/"}${"e22.png"}`)}
                alt="Escaneo de puertos servidor PREP"
              />
            </a>
            <p className="mt-2">Escaneo de puertos servidor PREP</p>
          </div>
        </div>
        {/* Modal */}
        <Modal
          idModal="Encuestas2016"
          titleModal="Encuestas 2016"
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataEncuestas2016} />
          }
        />
        <Modal
          idModal="UbicacionCasillas"
          titleModal="Lista de ubicación de casillas"
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataCasillas2016} />
          }
        />
        <Modal
          idModal="ResultadosElectorales"
          titleModal="Resultados Electorales"
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataResultados2016} />
          }
        />
        <Modal
          idModal="ResultadosElectoralesSeccion"
          titleModal="Resultados Electorales por Sección"
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataResultadosSeccion2016}
            />
          }
        />
        <Modal
          idModal="ListadoCandidatos"
          titleModal="Listado de Candidatos"
          contentModal={
            <ListBadge
              ifNumbered={""}
              listsBadgeItem={dataListadoCandidatos2016}
            />
          }
        />
      </>
    );
  }
}
