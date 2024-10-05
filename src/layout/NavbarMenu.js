import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Acerca de ITE" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="./FinesInstitucionales">
                Fines Institucionales
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./Historia">
                Historia
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./Principios Rectores">
                Principios Rectores
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./EstructuraOrganica">
                Estructura Orgánica
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Consejo General" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="./Integracion">
                Integración
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./Comisiones">
                Comisiones Permanentes y Temporales
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./JGE">
                Junta General Ejecutiva
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="./EstructuraOrganica">
                Estructura Orgánica
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Acuerdos" id="basic-nav-dropdown">
              <NavDropdown.ItemText className="text-secondary">
                Acuerdos ITE
              </NavDropdown.ItemText>

              <NavDropdown title="Anteriores" id="anterioresITE" drop="end">
                <NavDropdown.Item as={Link} to="./AcuerdosAnteriores">
                  Mostrar todos
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="./Acuerdos1998">
                  1998
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2001">
                  2001
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2002">
                  2002
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2003">
                  2003
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2004">
                  2004
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2005">
                  2005
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2006">
                  2006
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2007">
                  2007
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2008">
                  2008
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2009">
                  2009
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2010">
                  2010
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2011">
                  2011
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2012">
                  2012
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2013">
                  2013
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2014">
                  2014
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2015">
                  2015
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2016">
                  2016
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2017">
                  2017
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2018">
                  2018
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2019">
                  2019
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2020">
                  2020
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2021">
                  2021
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2022">
                  2022
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./Acuerdos2023">
                  2023
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="./Acuerdos2024">
                2024
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.ItemText className="text-secondary">
                Acuerdos INE
              </NavDropdown.ItemText>

              <NavDropdown title="Anteriores" id="anterioresINE" drop="end">
                <NavDropdown.Item as={Link} to="./AcuerdosINE">
                  Mostrar todos
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="./AcuerdosINE2015">
                  2015
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./AcuerdosINE2016">
                  2016
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./AcuerdosINE2020">
                  2020
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./AcuerdosINE2021">
                  2021
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./AcuerdosINE2022">
                  2022
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="./AcuerdosINE2023">
                  2023
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="./AcuerdosINE2024">
                2024
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Demarcaciones" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="./Acuerdos">
                Acuerdos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./Mapas">
                Mapas
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Transparencia" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="./Transparencia">
                Transparencia
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./Infografias">
                Infografías
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./PreguntasFrecuentes">
                Preguntas Frecuentes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./DatosAbiertos">
                Datos Abiertos
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/ComunicacionSocial">
              Comunicación Social
            </Nav.Link>
            <Nav.Link as={Link} to="/CulturaCivica">
              Cultura Cívica
            </Nav.Link>

            <NavDropdown title="Archivo" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="./Instrumentos Normativos">
                Instrumentos Normativos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./PlaneacionArchivistica">
                Planeación Archivística
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./InstrumentosArchivisticos">
                Instrumentos Archivísticos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./Infografias">
                Infografías
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="https://encuesta-satisfaccion.itetlax.org.mx/"
              target="_blank"
              rel="noreferrer"
            >
              Encuesta de Satisfacción
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
