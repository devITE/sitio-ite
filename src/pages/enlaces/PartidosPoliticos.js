import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ListBadgePDF from "../../layout/ListBadge/ListBadgePDF";
import { dataPartidosPoliticos } from "../../assets/data/dataEnlacesPP";

export default class PartidosPoliticos extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title mb-3">Partidos Políticos</div>

        <div>
          <ListBadgePDF
            ifNumbered={""}
            listsBadgeItem={dataPartidosPoliticos}
          />
        </div>
      </div>
    );
  }
}
