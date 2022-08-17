import React, { Component } from "react";
import e1 from "./img/e1.png";
import e2 from "./img/e2.png";
import e3 from "./img/e3.png";
import e4 from "./img/e4.png";
import e5 from "./img/e5.png";
import e6 from "./img/e6.png";
import e7 from "./img/e7.png";
import e8 from "./img/e8.png";
import e9 from "./img/e9.png";
import e10 from "./img/e10.png";

export default class Enlaces extends Component {
  render() {
    return (
      <div className="w-100 border">
        <div className="row">
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e1}
              alt="Proceso Electorales"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e2}
              alt="Normatividad"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e3}
              alt="Galeria fotográfica"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e4}
              alt="Órgano Interno de Control"
              className="img-fluid shadow rounded-4"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e5}
              alt="Partidos Políticos"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e6}
              alt=" Infografías"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e7}
              alt="Memorias Electorales"
              className="img-fluid shadow rounded-4"
            />
          </div>
          <div className="col col-sm-3 col-md-3 col-md-3">
            <img
              src={e8}
              alt="Metas MSPEN"
              className="img-fluid shadow rounded-4"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-sm-6 col-md-6 col-md-6 d-flex justify-content-center">
            <img
              src={e9}
              alt="Plataforma Nacional de Transparencia"
              className="img-fluid shadow rounded-4"
            />
          </div>
          {/* <div className="col col-sm-6 col-md-6 col-md-6"> */}
          <div className="col col-sm-6 col-md-6 col-md-6 d-flex justify-content-center">
            <img
              src={e10}
              alt="Consulta Publica"
              className="img-fluid shadow rounded-4"
            />
          </div>
        </div>
      </div>
    );
  }
}
