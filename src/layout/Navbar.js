import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/img/logoite.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav id="navbar-menu" className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link to="./" className="navbar-brand">
            <img
              src={logo}
              alt="Instituto Tlaxcalteca de Elecciones"
              className="img-fluid Navbar__logoITE"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item dropdown">
                <Link
                  to="./"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Acerca de ITE
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="./FinesInstitucionales" className="dropdown-item">
                      Fines Institucionales
                    </Link>
                  </li>
                  <li>
                    <Link to="./Historia" className="dropdown-item">
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link to="./PrincipiosRectores" className="dropdown-item">
                      Principios Rectores
                    </Link>
                  </li>
                  <li>
                    <Link to="./EstructuraOrganica" className="dropdown-item">
                      Estructura Orgánica
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="./"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Consejo General
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="./Integracion" className="dropdown-item">
                      Integración
                    </Link>
                  </li>
                  <li>
                    <Link to="./Comisiones" className="dropdown-item">
                      Comisiones Permanentes y Temporales
                    </Link>
                  </li>
                  <li>
                    <Link to="./JGE" className="dropdown-item">
                      Junta General Ejecutiva
                    </Link>
                  </li>
                  <li>
                    <Link to="/Estructura" className="dropdown-item">
                      Estructura
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="./"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Acuerdos
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="./AcuerdosAnteriores" className="dropdown-item">
                      Acuerdos Anteriores
                    </Link>
                  </li>
                  <li>
                    <Link to="./AcuerdosINE" className="dropdown-item">
                      Acuerdos INE
                    </Link>
                  </li>
                  <li>
                    <Link to="./Acuerdos2016" className="dropdown-item">
                      2016
                    </Link>
                  </li>
                  <li>
                    <Link to="./Acuerdos2017" className="dropdown-item">
                      2017
                    </Link>
                  </li>
                  <li>
                    <Link to="./Acuerdos2018" className="dropdown-item">
                      2018
                    </Link>
                  </li>
                  <li>
                    <Link to="./Acuerdos2019" className="dropdown-item">
                      2019
                    </Link>
                  </li>
                  <li>
                    <Link to="./Acuerdos2020" className="dropdown-item">
                      2020
                    </Link>
                  </li>
                  <li>
                    <Link to="./Acuerdos2021" className="dropdown-item">
                      2021
                    </Link>
                  </li>
                  <li>
                    <Link to="./Acuerdos2022" className="dropdown-item">
                      2022
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="./"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Demarcaciones
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="./Acuerdos" className="dropdown-item">
                      Acuerdos
                    </Link>
                  </li>
                  <li>
                    <Link to="./Mapas" className="dropdown-item">
                      Mapas
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="./"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Transparencia
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="./Transparencia" className="dropdown-item">
                      Transparencia
                    </Link>
                  </li>
                  <li>
                    <Link to="./Infografias" className="dropdown-item">
                      Infografías
                    </Link>
                  </li>
                  <li>
                    <Link to="./PreguntasFrecuentes" className="dropdown-item">
                      Preguntas Frecuentes
                    </Link>
                  </li>
                  <li>
                    <Link to="./DatosAbiertos" className="dropdown-item">
                      Datos Abiertos
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="./ComunicacionSocial" className="nav-link">
                  Comunicación Social
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./CulturaCivica" className="nav-link">
                  Cultura Cívica
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
