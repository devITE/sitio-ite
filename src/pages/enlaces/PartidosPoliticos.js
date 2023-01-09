import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ListBadge from "../../layout/ListBadge";
import { dataPartidosPoliticos } from "../../data/dataEnlacesPP";

export default class PartidosPoliticos extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Partidos Políticos" />
        <div>
          <ListBadge ifNumbered={""} listsBadgeItem={dataPartidosPoliticos} />
        </div>
      </>
    );
  }
}
