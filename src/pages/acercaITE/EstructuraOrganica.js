import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";
import "./FinesInstitucionales.css";
import img from "./img/ESTRUCTURA ORGÁNICA.jpg";
export default class EstructuraOrganica extends Component {
  render() {
    return (
      <div>
        <TitlePages title="Estructura Orgánica" subTitle="" />
        <Link to={img} target="_blank">
          <img
            src={img}
            className="img-fluid w-100 mx-auto"
            alt="Estructura Organica"
          />
        </Link>
      </div>
    );
  }
}
