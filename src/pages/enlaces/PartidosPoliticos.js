import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ListBadgePDF from "../../layout/ListBadge/ListBadgePDF";
import { dataPartidosPoliticos } from "../../assets/data/dataEnlacesPP";

export default class PartidosPoliticos extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title">Partidos Políticos</div>

        <div className="mt-3">
          <ListBadgePDF
            ifNumbered={""}
            listsBadgeItem={dataPartidosPoliticos}
          />
        </div>
      </div>
    );
  }
}
