import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagenes from "../../../img/imgcomunicacion/Comunicacion.jpg";
import imagenes1 from "../../../img/imgcomunicacion/2015.png";
import imagenes2 from "../../../img/imgcomunicacion/2016.png";
import imagenes3 from "../../../img/imgcomunicacion/2017.png";
import imagenes5 from "../../../img/imgcomunicacion/2019.png";
import imagenes6 from "../../../img/imgcomunicacion/2020.png";
import imagenes7 from "../../../img/imgcomunicacion/2021.png";
import imagenes8 from "../../../img/imgcomunicacion/2022.png";

export default class Boletines extends Component {
  render() {
    return (
      <div>
        <img
          src={imagenes}
          className="img-fluid w-100"
          alt="Comunicacion Social"
        />
        <hr className="borde" />
        <h2 className="text-center estilos-cintillo">Boletines.</h2>

        <div className="boletines">
          <Link to="/Boletines2015" className="comunicacion-social w-75">
            <img
              src={imagenes1}
              className="img-fluid"
              alt="Boletines 2015"
            />
          </Link>
          <Link to="/Boletines2016" className="comunicacion-social w-75">
            <img
              src={imagenes2}
              className="img-fluid"
              alt="Boletines 2016"
            />
          </Link>
          <Link to="/Boletines2017" className="comunicacion-social w-75">
            <img
              src={imagenes3}
              className="img-fluid"
              alt="Boletines 2017"
            />
          </Link>
          <Link to="/Boletines2019" className="comunicacion-social w-75">
            <img
              src={imagenes5}
              className="img-fluid"
              alt="Boletines 2019"
            />
          </Link>
          <Link to="/Boletines2020" className="comunicacion-social w-75">
            <img
              src={imagenes6}
              className="img-fluid"
              alt="Boletines 2020"
            />
          </Link>
          <Link to="/Boletines2021" className="comunicacion-social w-75">
            <img
              src={imagenes7}
              className="img-fluid"
              alt="Boletines 2021"
            />
          </Link>
                    <Link to="/Boletines2022" className="comunicacion-social w-75">
            <img
              src={imagenes8}
              className="img-fluid"
              alt="Boletines 2022"
            />
          </Link>
        </div>
      </div>
    );
  }
}
