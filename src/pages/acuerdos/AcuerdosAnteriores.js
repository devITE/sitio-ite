import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";
import "./Acuerdos.css";

const AcuerdosAnteriores__imgpath = require.context("../../assets/img/icons/");

export default class AcuerdosAnteriores extends Component {
  render() {
    return (
      <>
        <TitlePages title="Acuerdos Anteriores" subTitle="" />
        <div className="w-100 mt-5 Grid__folder">
          <div>
            <Link to="/Acuerdos2015">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./28.png`)}
                alt="Acuerdos 2015"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2014" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./27.png`)}
                alt="Acuerdos 2014"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2013" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./26.png`)}
                alt="Acuerdos 2013"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2012" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./25.png`)}
                alt="Acuerdos 2012"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2011" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./24.png`)}
                alt="Acuerdos 2011"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2010" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./23.png`)}
                alt="Acuerdos 2010"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2009" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./22.png`)}
                alt="Acuerdos 2009"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2008" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./21.png`)}
                alt="Acuerdos 2008"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2007" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./20.png`)}
                alt="Acuerdos 2007"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2006" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./19.png`)}
                alt="Acuerdos 2006"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2005" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./18.png`)}
                alt="Acuerdos 2005"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2004" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./17.png`)}
                alt="Acuerdos 2004"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2003" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./16.png`)}
                alt="Acuerdos 2003"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2002" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./15.png`)}
                alt="Acuerdos 2002"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2001" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./14.png`)}
                alt="Acuerdos 2001"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos1998" className="nav-link">
              <img
                className="img-fluid"
                src={AcuerdosAnteriores__imgpath(`./11.png`)}
                alt="Acuerdos 1998"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
