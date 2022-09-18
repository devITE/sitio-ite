import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Acuerdos.css";

const Acuerdos__imgpath = require.context("../../img/imgA/");

export default class AcuerdosINE extends Component {
  render() {
    return (
      <>
        <img
          className="img-fluid w-100"
          src={Acuerdos__imgpath(`./AINE.png`)}
          alt="Acuerdos INE"
        />
        <div className="w-100 mt-5 AcuerdosAnteriores">
          <div>
            <Link to="../../Acuerdos2015">
              <img
                className="img-fluid AcuerdosAnteriores_link"
                src={Acuerdos__imgpath(`./2015.png`)}
                alt="Acuerdos INE 2015"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2013" className="nav-link disabled">
              <img
                className="img-fluid AcuerdosAnteriores_link"
                src={Acuerdos__imgpath(`./2016.png`)}
                alt="Acuerdos INE 2016"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2012" className="nav-link">
              <img
                className="img-fluid AcuerdosAnteriores_link"
                src={Acuerdos__imgpath(`./2020.png`)}
                alt="Acuerdos INE 2020"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2011" className="nav-link disabled">
              <img
                className="img-fluid AcuerdosAnteriores_link"
                src={Acuerdos__imgpath(`./2021.png`)}
                alt="Acuerdos INE 2021"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2010" className="nav-link disabled">
              <img
                className="img-fluid AcuerdosAnteriores_link"
                src={Acuerdos__imgpath(`./2022.png`)}
                alt="Acuerdos INE 2022"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2010" className="nav-link disabled">
              <img
                className="img-fluid AcuerdosAnteriores_link"
                src={Acuerdos__imgpath(`./2023.png`)}
                alt="Acuerdos INE 2023"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
