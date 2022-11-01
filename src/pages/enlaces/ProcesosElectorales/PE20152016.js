import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";

export default class PE20152016 extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Proceso Electoral 2015 - 2016" />
        <div className="Content__grid">
          <div>
            <FontAwesomeIcon icon={faAddressBook} size="5x" />
            <p className="mt-2">Consejos Distritales</p>
          </div>
        </div>
      </>
    );
  }
}
