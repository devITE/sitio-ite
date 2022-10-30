import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Acuerdos.css";

const AcuerdosAnteriores__imgpath = require.context("../../assets/img/imgA/");

export default class AcuerdosAnteriores extends Component {
  render() {
    return (
      <>
        <img
          className="img-fluid w-100"
          src={AcuerdosAnteriores__imgpath(`./AA.png`)}
          alt="Acuerdos Anteriores"
        />
        <div className="w-100 mt-5 Acuerdos">
          <div>
            <Link to="../../Acuerdos2015">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2015.png`)}
                alt="Acuerdos 2015"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2014" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2014.png`)}
                alt="Acuerdos 2014"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2013" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2013.png`)}
                alt="Acuerdos 2013"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2012" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2012.png`)}
                alt="Acuerdos 2012"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2011" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2011.png`)}
                alt="Acuerdos 2011"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2010" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2010.png`)}
                alt="Acuerdos 2010"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2009" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2009.png`)}
                alt="Acuerdos 2009"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2008" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2008.png`)}
                alt="Acuerdos 2008"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2007" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2007.png`)}
                alt="Acuerdos 2007"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2006" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2006.png`)}
                alt="Acuerdos 2006"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2005" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2005.png`)}
                alt="Acuerdos 2005"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2004" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2004.png`)}
                alt="Acuerdos 2004"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2003" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2003.png`)}
                alt="Acuerdos 2003"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2002" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2002.png`)}
                alt="Acuerdos 2002"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos2001" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./2001.png`)}
                alt="Acuerdos 2001"
              />
            </Link>
          </div>
          <div>
            <Link to="../../Acuerdos1998" className="nav-link">
              <img
                className="img-fluid Acuerdos_link"
                src={AcuerdosAnteriores__imgpath(`./1998.png`)}
                alt="Acuerdos 1998"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
