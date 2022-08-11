import React, { Component } from "react";
import "./FinesInstitucionales.css";
import { Link } from "react-router-dom";
import imagenes from "./img/Cintillo_estructura_organica.jpg";
import img from "./img/ESTRUCTURA ORGÁNICA.jpg";
export default class EstructuraOrganica extends Component {
  render() {
    return (
      <div>
        <img src={imagenes} className= "img-fluid w-100 mx-auto" alt="Estructura Organica" />
        <br></br>
        <Link to={img} target= "_blank"><img src={img} className= "img-fluid w-100 mx-auto" alt="Estructura Organica" /></Link>
      </div>
    );
  }
}