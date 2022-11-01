import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";

const ProcesosElectorales__imgpath = require.context("../../../assets/img");

export default class ProcesosElectorales extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Procesos Electorales" />
        <div className="Content__grid">
          <div>
            <Link to="/HistorialPE">
              <img
                className="img-fluid"
                src={ProcesosElectorales__imgpath(`./${"icons/"}${"e20.png"}`)}
                alt="Historial de Resultados 1995 - 2013"
              />
            </Link>
            <p className="mt-2">Historial de Resultados (1995 - 2013)</p>
          </div>
          <div>
            <Link to="/PE20152016">
              <img
                className="img-fluid"
                src={ProcesosElectorales__imgpath(`./${"icons/"}${"e19.png"}`)}
                alt="Proceso Electoral 2015 -2015"
              />
            </Link>
            <p className="mt-2">Proceso Electoral 2015 - 2016</p>
          </div>
          <div>
            <Link to="/PEE2017">
              <img
                className="img-fluid"
                src={ProcesosElectorales__imgpath(`./${"icons/"}${"e19.png"}`)}
                alt="Proceso Electoral Extraordinario 2017"
              />
            </Link>
            <p className="mt-2">Proceso Electoral 2017</p>
          </div>
          <div>
            <Link to="/PE2018">
              <img
                className="img-fluid"
                src={ProcesosElectorales__imgpath(`./${"icons/"}${"e19.png"}`)}
                alt="Proceso Electoral 2018"
              />
            </Link>
            <p className="mt-2">Proceso Electoral 2018</p>
          </div>
          <div>
            <Link to="/PE20202021">
              <img
                className="img-fluid"
                src={ProcesosElectorales__imgpath(`./${"icons/"}${"e19.png"}`)}
                alt="Proceso Electoral 2020 - 2021"
              />
            </Link>
            <p className="mt-2">Proceso Electoral 2020 - 2021</p>
          </div>
          <div>
            <Link to="/PEE2021">
              <img
                className="img-fluid"
                src={ProcesosElectorales__imgpath(`./${"icons/"}${"e19.png"}`)}
                alt="Proceso Electoral 2021"
              />
            </Link>
            <p className="mt-2">Proceso Electoral 2021</p>
          </div>
        </div>
      </>
    );
  }
}
