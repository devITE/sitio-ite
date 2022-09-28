import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarEnlaces.css";

const Enlaces_imgpath = require.context("../img/icons");

export default class NavbarEnlaces extends Component {
  render() {
    return (
      <div className="w-100 NavbarEnlaces">
        <div className="">
          <img
            src={Enlaces_imgpath(`./${"e1.png"}`)}
            alt="Proceso Electorales"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div className="">
          <img
            src={Enlaces_imgpath(`./${"e2.png"}`)}
            alt="Normatividad"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div>
          <img
            src={Enlaces_imgpath(`./${"e3.png"}`)}
            alt="Galeria fotográfica"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div>
          <img
            src={Enlaces_imgpath(`./${"e4.png"}`)}
            alt="Órgano Interno de Control"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div>
          <img
            src={Enlaces_imgpath(`./${"e5.png"}`)}
            alt="Partidos Políticos"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div>
          <img
            src={Enlaces_imgpath(`./${"e6.png"}`)}
            alt=" Infografías"
            className="img-fluid shadow rounded-4"
          />
        </div>
        <div>
          <Link to="/MemoriasElectorales">
            <img
              src={Enlaces_imgpath(`./${"e7.png"}`)}
              alt="Memorias Electorales"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div>
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
