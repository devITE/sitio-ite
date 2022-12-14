import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagenes1 from "../../../img/imgcomunicacion/2015.png";
import imagenes2 from "../../../img/imgcomunicacion/2016.png";
import imagenes3 from "../../../img/imgcomunicacion/2017.png";
import imagenes4 from "../../../img/imgcomunicacion/2018.png";
import imagenes6 from "../../../img/imgcomunicacion/2020.png";
import imagenes7 from "../../../img/imgcomunicacion/2021.png";
import TitlePages from "../../../layout/TitlePages";

export default class Boletines extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Comunicación Social" subTitle="Monitoreo" />

        <div className="Grid__folder">
          <Link to="/Monitoreos2015">
            <img src={imagenes1} className="img-fluid" alt="Monitoreos 2015" />
          </Link>
          <Link to="/Monitoreos2016">
            <img src={imagenes2} className="img-fluid" alt="Monitoreos 2016" />
          </Link>
          <Link to="/Monitoreos2017">
            <img src={imagenes3} className="img-fluid" alt="Monitoreos 2017" />
          </Link>
          <Link to="/Monitoreos2018">
            <img src={imagenes4} className="img-fluid" alt="Monitoreos 2018" />
          </Link>
          {/* <Link to="/Monitoreos2019">
            <img src={imagenes5} className="img-fluid" alt="Monitoreos 2019" />
          </Link> */}
          <Link to="/Monitoreos2020">
            <img src={imagenes6} className="img-fluid" alt="/Monitoreos 2020" />
          </Link>
          <Link to="/Monitoreos2021">
            <img src={imagenes7} className="img-fluid" alt="/Monitoreos 2021" />
          </Link>
        </div>
      </div>
    );
  }
}
