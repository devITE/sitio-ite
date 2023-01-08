import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";

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
                src="https://itetlax.org.mx/assets/img/icons/29.png"
                alt="Galería Fotográfica 2016"
              />
            </Link>
          </div>
          <div>
            <Link to="/Galeria2017">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/30.png"
                alt="Galería Fotográfica 2017"
              />
            </Link>
          </div>
          <div>
            <Link to="/Galeria2018">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/31.png"
                alt="Galería Fotográfica 2018"
              />
            </Link>
          </div>
          <div>
            <Link to="/Galeria2019">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/32.png"
                alt="Galería Fotográfica 2019"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
