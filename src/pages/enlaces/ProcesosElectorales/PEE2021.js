import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Modal from "../../../layout/Modal";
import ListBadgeEXCEL from "../../../layout/ListBadge/ListBadgeEXCEL";
import { dataResultadosE2021 } from "../../../assets/data/dataProcesosElectorales";

export default class PEE2021 extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Proceso Electoral Extraordinario 2021" />
        {/* Modal */}
        <Modal
          idModal="PresidenciasComunidad2021"
          titleModal="Resultados Electorales Presidencias de Comunidad 2021"
          contentModal={
            <ListBadgeEXCEL
              ifNumbered={""}
              listsBadgeItem={dataResultadosE2021}
            />
          }
        />
      </>
    );
  }
}
