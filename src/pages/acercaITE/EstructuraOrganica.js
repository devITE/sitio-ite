import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

export default class EstructuraOrganica extends Component {
  render() {
    return (
      <>
        <TitlePages title="Estructura Orgánica" subTitle="" />
        <a
          href="https://itetlax.org.mx/assets/img/estOrg/1.jpg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://itetlax.org.mx/assets/img/estOrg/1.jpg"
            className="img-fluid w-100 mx-auto"
            alt="Estructura Organica"
          />
        </a>
      </>
    );
  }
}
