import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav id="navbar-menu" className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link to="./" className="navbar-brand">
            <img
              src="https://itetlax.org.mx/assets/img/logoite.png"
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
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Acuerdos
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-header">-- Acuerdos ITE</span>
                  </li>
                  <li className="dropdown-submenu">
                    <Link
                      to="#"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Anteriores
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="./AcuerdosAnteriores"
                          className="dropdown-item"
                        >
                          Mostrar todos
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE1998" className="dropdown-item">
                          1998
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2001" className="dropdown-item">
                          2001
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2002" className="dropdown-item">
                          2002
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2003" className="dropdown-item">
                          2003
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2004" className="dropdown-item">
                          2004
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2005" className="dropdown-item">
                          2005
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2006" className="dropdown-item">
                          2006
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2007" className="dropdown-item">
                          2007
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2008" className="dropdown-item">
                          2008
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2009" className="dropdown-item">
                          2009
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2010" className="dropdown-item">
                          2010
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2011" className="dropdown-item">
                          2011
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2012" className="dropdown-item">
                          2012
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2013" className="dropdown-item">
                          2013
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2014" className="dropdown-item">
                          2014
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2015" className="dropdown-item">
                          2015
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2016" className="dropdown-item">
                          2016
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2017" className="dropdown-item">
                          2017
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2018" className="dropdown-item">
                          2018
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2019" className="dropdown-item">
                          2019
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2020" className="dropdown-item">
                          2020
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2021" className="dropdown-item">
                          2021
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2022" className="dropdown-item">
                          2022
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosITE2023" className="dropdown-item">
                          2023
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="./Acuerdos2024" className="dropdown-item">
                      2024
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span className="dropdown-header">-- Acuerdos INE</span>
                  </li>
                  <li className="dropdown-submenu">
                    <Link
                      to="#"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Anteriores
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="./AcuerdosINE" className="dropdown-item">
                          Mostrar todos
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosINE2015" className="dropdown-item">
                          2015
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosINE2016" className="dropdown-item">
                          2016
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosINE2020" className="dropdown-item">
                          2020
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosINE2021" className="dropdown-item">
                          2021
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosINE2022" className="dropdown-item">
                          2022
                        </Link>
                      </li>
                      <li>
                        <Link to="./AcuerdosINE2023" className="dropdown-item">
                          2023
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="./AcuerdosINE2024" className="dropdown-item">
                      2024
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="./"
                  className="nav-link dropdown-toggle"
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
              <li className="nav-item dropdown">
                <Link
                  to="./"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Archivo
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="./InstrumentosNormativos"
                      className="dropdown-item"
                    >
                      Instrumentos Normativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./PlaneacionArchivistica"
                      className="dropdown-item"
                    >
                      Planeación Archivística
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./InstrumentosArchivisticos"
                      className="dropdown-item"
                    >
                      Instrumentos Archivísticos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./InfografiasArchivo"
                      className="dropdown-item disabled"
                    >
                      Infografías
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link to="./ConvocatoriasApartado" className="nav-link">
                  Convocatorias
                </Link>
              </li> -- */}
              <li className="nav-item">
                <a
                  href="https://encuesta-satisfaccion.itetlax.org.mx/"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  Encuesta de Satisfacción
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
