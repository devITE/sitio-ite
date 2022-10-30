import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Enlaces.css";

const Enlaces_imgpath = require.context("../../../assets/img/icons");

export default class Enlaces extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="row">
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={Enlaces_imgpath(`./${"e1.png"}`)}
              alt="Proceso Electorales"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={Enlaces_imgpath(`./${"e2.png"}`)}
              alt="Normatividad"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={Enlaces_imgpath(`./${"e3.png"}`)}
              alt="Galeria fotográfica"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <Link to="/OIC">
              <img
                src={Enlaces_imgpath(`./${"e4.png"}`)}
                alt="Órgano Interno de Control"
                className="img-fluid shadow rounded-4"
              />
            </Link>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={Enlaces_imgpath(`./${"e5.png"}`)}
              alt="Partidos Políticos"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <Link to="/Infografias">
              <img
                src={Enlaces_imgpath(`./${"e6.png"}`)}
                alt=" Infografías"
                className="img-fluid shadow rounded-4"
              />
            </Link>
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <Link to="/MemoriasElectorales">
              <img
                src={Enlaces_imgpath(`./${"e7.png"}`)}
                alt="Memorias Electorales"
                className="img-fluid shadow rounded-4 Enlaces__link"
              />
            </Link>
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <Link to="/MetasSPEN">
              <img
                src={Enlaces_imgpath(`./${"e8.png"}`)}
                alt="Metas MSPEN"
                className="img-fluid shadow rounded-4"
              />
            </Link>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-sm-6 col-md-6 col-md-6 d-flex justify-content-center">
            <img
              src={Enlaces_imgpath(`./${"e9.png"}`)}
              alt="Plataforma Nacional de Transparencia"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-6 col-md-6 col-md-6 d-flex justify-content-center">
            <img
              src={Enlaces_imgpath(`./${"e10.png"}`)}
              alt="Consulta Publica"
              className="img-fluid shadow rounded-4"
            />
          </div>
        </div>
      </div>
    );
  }
}
