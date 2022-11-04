import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";

const Icons__path = require.context("../../../assets/img");

export default class Galeria extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Galería Fotográfica" />
        <div className="Grid__folder">
          <div>
            <Link to="/Galeria2016">
              <img
                className="img-fluid"
                src={Icons__path(`./${"icons/"}${"29.png"}`)}
                alt="Galería Fotográfica 2016"
              />
            </Link>
          </div>
          <div>
            <Link to="/Galeria2017">
              <img
                className="img-fluid"
                src={Icons__path(`./${"icons/"}${"30.png"}`)}
                alt="Galería Fotográfica 2017"
              />
            </Link>
          </div>
          <div>
            <Link to="/Galeria2018">
              <img
                className="img-fluid"
                src={Icons__path(`./${"icons/"}${"31.png"}`)}
                alt="Galería Fotográfica 2018"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
