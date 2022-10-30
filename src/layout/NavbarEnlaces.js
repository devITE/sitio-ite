import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarEnlaces.css";

const Enlaces_imgpath = require.context("../assets/img/icons");

export default class NavbarEnlaces extends Component {
  render() {
    return (
      <div className="w-100 NavbarEnlaces">
        <div className="NavbarEnlaces__item">
          <img
            src={Enlaces_imgpath(`./${"e1.png"}`)}
            alt="Proceso Electorales"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div className="NavbarEnlaces__item">
          <img
            src={Enlaces_imgpath(`./${"e2.png"}`)}
            alt="Normatividad"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div className="NavbarEnlaces__item">
          <img
            src={Enlaces_imgpath(`./${"e3.png"}`)}
            alt="Galeria fotográfica"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/OIC">
            <img
              src={Enlaces_imgpath(`./${"e4.png"}`)}
              alt="Órgano Interno de Control"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/PartidosPoliticos">
            <img
              src={Enlaces_imgpath(`./${"e5.png"}`)}
              alt="Partidos Políticos"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/Infografias">
            <img
              src={Enlaces_imgpath(`./${"e6.png"}`)}
              alt=" Infografías"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/MemoriasElectorales">
            <img
              src={Enlaces_imgpath(`./${"e7.png"}`)}
              alt="Memorias Electorales"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/MetasMSPEN">
            <img
              src={Enlaces_imgpath(`./${"e8.png"}`)}
              alt="Metas MSPEN"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
      </div>
    );
  }
}
