import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

export default class JGE extends Component {
  render() {
    return (
      <>
        <TitlePages title="Junta General Ejecutiva" subTitle="" />
        <a
          href="https://itetlax.org.mx/assets/img/imgIntITE/2.jpg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://itetlax.org.mx/assets/img/imgIntITE/2.jpg"
            className="img-fluid w-100 mx-auto"
            alt="JGE"
          />
        </a>
      </>
    );
  }
}
