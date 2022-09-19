/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Transparencia.css";

const Transparencia_imppath = require.context("../../img/imgT");
const icons_imgpath = require.context("../../img/icons");

export default class Transparencia extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={Transparencia_imppath(`./head.png`)}
          alt="Transparencia"
        />
        <div className="w-100 mt-3 Transparencia__contenido">
          <div>
            <Link to="/Articulo63">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Art. 63 Obligaciones Comunes"
              />
            </Link>
            <p className="mt-2">Art. 63 Obligaciones Comunes</p>
          </div>
          <div>
            <Link to="Articulo67">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Art. 67 Obligaciones Específicas"
              />
            </Link>
            <p className="mt-2">Art. 67 Obligaciones Específicas</p>
          </div>
          <div>
            <Link to="Articulo94">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Art. 94 Obligaciones Específicas"
              />
            </Link>
            <p className="mt-2">Art. 94 Obligaciones Específicas</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./2.png`)}
                alt="Convenios"
              />
            </Link>
            <p className="mt-2">Convenios</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./3.png`)}
                alt="Directorio General"
              />
            </Link>
            <p className="mt-2">Directorio General</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./4.png`)}
                alt="Informes anuales"
              />
            </Link>
            <p className="mt-2">Informes anuales</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./5.png`)}
                alt="Aviso de privacidad"
              />
            </Link>
            <p className="mt-2">Aviso de privacidad</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./2.png`)}
                alt="Presentar solicitud"
              />
            </Link>
            <p className="mt-2">Presentar solicitud</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./6.png`)}
                alt="Programas Operativos Anuales"
              />
            </Link>
            <p className="mt-2">Programas Operativos Anuales</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./7.png`)}
                alt="Información Financiera"
              />
            </Link>
            <p className="mt-2">Información Financiera</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./8.png`)}
                alt="Información Contable"
              />
            </Link>
            <p className="mt-2">Información Contable</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./1.png`)}
                alt="Información Jurídica"
              />
            </Link>
            <p className="mt-2">Información Jurídica</p>
          </div>
          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./9.png`)}
                alt="Reglamento interior"
              />
            </Link>
            <p className="mt-2">Reglamento interior</p>
          </div>

          <div>
            <Link to="">
              <img
                className="img-fluid w-100 mt-3"
                src={icons_imgpath(`./9.png`)}
                alt="Índice de expedientes clasificados como reservados"
              />
            </Link>
            <p className="mt-2">
              Índice de expedientes
              <br />
              clasificados como reservados
            </p>
          </div>
        </div>
        <div className="w-100 Transparencia__header mt-5">
          <a
            href="https://www.plataformadetransparencia.org.mx/web/guest/inicio"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-fluid"
              src={Transparencia_imppath(`./pnt.png`)}
              alt="Plataforma Nacional de Transparencia"
            />
          </a>
          <a
            href="http://consultapublicamx.inai.org.mx:8080/vut-web/?idSujetoObigadoParametro=5387&idEntidadParametro=29&idSectorParametro=24"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-fluid"
              src={Transparencia_imppath(`./ot.png`)}
              alt="Obligaciones de Transparencia"
            />
          </a>
        </div>
      </div>
    );
  }
}
