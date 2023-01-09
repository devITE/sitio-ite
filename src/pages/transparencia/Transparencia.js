import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";
import Modal from "../../layout/Modal/Modal";
import { Link } from "react-router-dom";
import ListBadge from "../../layout/ListBadge";
import { dataReglamento, dataJuridico } from "../../data/dataTransparencia";
import "./Transparencia.css";

export default class Transparencia extends Component {
  render() {
    return (
      <>
        <TitlePages title="Transparencia" subTitle="" />
        <div className="w-100 mt-3 Content__grid">
          <div>
            <Link to="/Articulo63">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/1.png"
                alt="Art. 63 Obligaciones Comunes"
              />
            </Link>
            <p className="mt-2">Art. 63 Obligaciones Comunes</p>
          </div>
          <div>
            <Link to="/Articulo67">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/1.png"
                alt="Art. 67 Obligaciones Específicas"
              />
            </Link>
            <p className="mt-2">Art. 67 Obligaciones Específicas</p>
          </div>
          <div>
            <Link to="/Articulo94">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/1.png"
                alt="Art. 94 Obligaciones Específicas"
              />
            </Link>
            <p className="mt-2">Art. 94 Obligaciones Específicas</p>
          </div>
          <div>
            <Link to="/Convenios">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/2.png"
                alt="Convenios"
              />
            </Link>
            <p className="mt-2">Convenios</p>
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/transparencia/1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/3.png"
                alt="Directorio General"
              />
            </a>
            <p className="mt-2">Directorio General</p>
          </div>
          <div>
            <Link to="/InformesAnuales">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/4.png"
                alt="Informes anuales"
              />
            </Link>
            <p className="mt-2">Informes anuales</p>
          </div>
          <div>
            <Link to="/AvisosPrivacidad">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/5.png"
                alt="Aviso de privacidad"
              />
            </Link>
            <p className="mt-2">Aviso de privacidad</p>
          </div>
          <div>
            <Link to="/FormatoSolicitud">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/2.png"
                alt="Presentar solicitud"
              />
            </Link>
            <p className="mt-2">Presentar solicitud</p>
          </div>
          <div>
            <Link to="/POA">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/6.png"
                alt="Programas Operativos Anuales"
              />
            </Link>
            <p className="mt-2">Programas Operativos Anuales</p>
          </div>
          <div>
            <Link to="/InformacionFinanciera">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/7.png"
                alt="Información Financiera"
              />
            </Link>
            <p className="mt-2">Información Financiera</p>
          </div>
          <div>
            <Link to="/InformacionContable">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/8.png"
                alt="Información Contable"
              />
            </Link>
            <p className="mt-2">Información Contable</p>
          </div>
          <div>
            <a href="/#" data-bs-toggle="modal" data-bs-target="#modalJuridico">
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/1.png"
                alt="Información Jurídica"
              />
            </a>
            <p className="mt-2">Información Jurídica</p>
          </div>
          <div>
            <a
              data-bs-toggle="modal"
              href="/#"
              data-bs-target="#modalReglamento"
            >
              <img
                className="img-fluid w-100 mt-3"
                src="https://itetlax.org.mx/assets/img/icons/9.png"
                alt="Reglamento interior"
              />
            </a>
            <p className="mt-2">Reglamento interior</p>
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
              src="https://itetlax.org.mx/assets/img/icons/pnt.png"
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
              src="https://itetlax.org.mx/assets/img/icons/ot.png"
              alt="Obligaciones de Transparencia"
            />
          </a>
        </div>
        <Modal
          idModal="modalReglamento"
          titleModal="Reglamento Interior ITE"
          sizeModal=""
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataReglamento} />
          }
        />
        <Modal
          idModal="modalJuridico"
          titleModal="Información Jurídica"
          sizeModal=""
          contentModal={
            <ListBadge ifNumbered={""} listsBadgeItem={dataJuridico} />
          }
        />
      </>
    );
  }
}
