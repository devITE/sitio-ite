import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ListBadgePDF from "../../layout/ListBadgePDF";
import { dataPartidosPoliticos } from "../../assets/data/dataEnlacesPP";

export default class PartidosPoliticos extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Partidos Políticos" />
        <div>
          <ListBadgePDF
            ifNumbered={""}
            listsBadgeItem={dataPartidosPoliticos}
          />
        </div>
      </>
    );
  }
}
