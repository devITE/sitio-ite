import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

export default class ComunicacionSocial extends Component {
  render() {
    return (
      <>
        <TitlePages title="Comunicación Social" subTitle="" />

        <div className="Content__grid">
          <div>
            <Link to="/Boletines">
              <img
                src="https://itetlax.org.mx/assets/img/icons/50.png"
                className="img-fluid"
                alt="Boletines"
              />
            </Link>
            <p className="text-strong">Boletines</p>
          </div>
          <div>
            <Link to="/Monitoreo">
              <img
                src="https://itetlax.org.mx/assets/img/icons/e12.png"
                className="img-fluid"
                alt="Monitoreo"
              />
            </Link>
            <p className="text-strong">Monitoreo</p>
          </div>
          <div>
            <Link to="/EspacioIte">
              <img
                src="https://itetlax.org.mx/assets/img/icons/51.png"
                className="img-fluid"
                alt="Espacio ITE"
              />
            </Link>
            <p className="text-strong">Espacio ITE</p>
          </div>
        </div>
      </>
    );
  }
}
