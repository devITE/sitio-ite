import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagenes1 from "../../img/imgcomunicacion/boletines.png";
import imagenes2 from "../../img/imgcomunicacion/monitoreo.png";
import imagenes3 from "../../img/imgcomunicacion/espacio-ite.jpg";
import TitlePages from "../../layout/TitlePages";

export default class ComunicacionSocial extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Comunicación Social" subTitle="" />

        <div className="text-center row">
          <div className="col-md-4">
            <Link to="/Boletines" className="">
              <img src={imagenes1} className="img-fluid" alt="Boletines" />
              <p className="text-center text-strong">Boletines</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/Monitoreo" className="">
              <img src={imagenes2} className="img-fluid" alt="Monitoreo" />
              <p className="text-center text-strong">Monitoreo</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/EspacioIte" className="">
              <img src={imagenes3} className="img-fluid" alt="Espacio ITE" />
              <p className="text-center text-strong">Espacio ITE</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
