import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Acerca de ITE",
    id: "aboutITE",
    items: [
      { to: "./FinesInstitucionales", label: "Fines Institucionales" },
      { to: "./Historia", label: "Historia" },
      { to: "./Principios Rectores", label: "Principios Rectores" },
      { to: "./EstructuraOrganica", label: "Estructura Orgánica" },
    ],
  },
  {
    title: "Consejo General",
    id: "councilGeneral",
    items: [
      { to: "./Integracion", label: "Integración" },
      { to: "./Comisiones", label: "Comisiones Permanentes y Temporales" },
      { to: "./JGE", label: "Junta General Ejecutiva" },
      { to: "./EstructuraOrganica", label: "Estructura Orgánica" },
    ],
  },
  {
    title: "Acuerdos",
    id: "agreements",
    items: [
      { to: "./Acuerdos2024", label: "2024" },
      {
        title: "Anteriores",
        id: "anterioresITE",
        items: Array.from({ length: 26 }, (_, i) => {
          const year = 1998 + i;
          return {
            to: `./Acuerdos${year}`,
            label: `${year}`,
            key: `acuerdos-${year}`,
          };
        }),
      },
      { label: "Acuerdos ITE", isText: true, key: "acuerdosITE" },
      {
        title: "Anteriores INE",
        id: "anterioresINE",
        items: [
          {
            to: "./AcuerdosINE",
            label: "Mostrar todos",
            key: "mostrar-todos-INE",
          },
          ...[2015, 2016, 2020, 2021, 2022, 2023].map((year) => ({
            to: `./AcuerdosINE${year}`,
            label: `${year}`,
            key: `acuerdosINE-${year}`,
          })),
        ],
      },
      { to: "./AcuerdosINE2024", label: "2024", key: "acuerdosINE-2024" },
    ],
  },
  {
    title: "Demarcaciones",
    id: "demarcations",
    items: [
      { to: "./Acuerdos", label: "Acuerdos", key: "demarcaciones-acuerdos" },
      { to: "./Mapas", label: "Mapas", key: "demarcaciones-mapas" },
    ],
  },
  {
    title: "Transparencia",
    id: "transparency",
    items: [
      { to: "./Transparencia", label: "Transparencia", key: "transparencia" },
      { label: "Obligaciones", isText: true, key: "obligaciones-text" },
      {
        title: "Art. 63",
        id: "art63",
        items: [
          {
            to: "./Articulo63",
            label: "Mostrar todos",
            key: "art63-mostrar-todos",
          },
          ...[2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => ({
            to: `./Art63${year}`,
            label: `${year}`,
            key: `art63-${year}`,
          })),
        ],
      },
      {
        title: "Art. 67",
        id: "art67",
        items: [
          {
            to: "./Articulo67",
            label: "Mostrar todos",
            key: "art67-mostrar-todos",
          },
          ...[2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => ({
            to: `./Art67${year}`,
            label: `${year}`,
            key: `art67-${year}`,
          })),
        ],
      },
      {
        title: "Art. 94",
        id: "art94",
        items: [
          {
            to: "./Articulo94",
            label: "Mostrar todos",
            key: "art94-mostrar-todos",
          },
          ...[2020, 2021].map((year) => ({
            to: `./Art94${year}`,
            label: `${year}`,
            key: `art94-${year}`,
          })),
        ],
      },
      { to: "./Infografias", label: "Infografías", key: "infografias" },
      {
        to: "./PreguntasFrecuentes",
        label: "Preguntas Frecuentes",
        key: "preguntas-frecuentes",
      },
      { to: "./DatosAbiertos", label: "Datos Abiertos", key: "datos-abiertos" },
    ],
  },
  {
    title: "Archivo",
    id: "archive",
    items: [
      {
        to: "./Instrumentos Normativos",
        label: "Instrumentos Normativos",
        key: "instrumentos-normativos",
      },
      {
        to: "./PlaneacionArchivistica",
        label: "Planeación Archivística",
        key: "planeacion-archivistica",
      },
      {
        to: "./InstrumentosArchivisticos",
        label: "Instrumentos Archivísticos",
        key: "instrumentos-archivisticos",
      },
      { to: "./Infografias", label: "Infografías", key: "archivo-infografias" },
    ],
  },
];

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-0">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map(({ title, id, items }) => (
              <NavDropdown key={id} title={title} id={id}>
                {items.map((item) => {
                  if (item.isText) {
                    return (
                      <NavDropdown.ItemText
                        key={item.key}
                        className="text-secondary"
                      >
                        {item.label}
                      </NavDropdown.ItemText>
                    );
                  } else if (item.items) {
                    return (
                      <NavDropdown
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        drop="end"
                      >
                        {item.items.map((subItem) => (
                          <NavDropdown.Item
                            key={subItem.key}
                            as={Link}
                            to={subItem.to}
                          >
                            {subItem.label}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    );
                  } else {
                    return (
                      <NavDropdown.Item key={item.key} as={Link} to={item.to}>
                        {item.label}
                      </NavDropdown.Item>
                    );
                  }
                })}
              </NavDropdown>
            ))}
            <Nav.Link as={Link} to="/ComunicacionSocial">
              Comunicación Social
            </Nav.Link>
            <Nav.Link as={Link} to="/CulturaCivica">
              Cultura Cívica
            </Nav.Link>
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
