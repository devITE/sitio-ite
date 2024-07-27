import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Modal from "../../layout/Modal/Modal";
import { Link } from "react-router-dom";
import ListBadge from "../../layout/ListBadge";
import { dataReglamento, dataJuridico } from "../../data/dataTransparencia";
import "./Transparencia.css";
import Breadcrumbs from "../../layout/Breadcrumbs";

const TransparenciaItem = ({ to, href, imgSrc, imgAlt, text }) => (
  <div>
    {to ? (
      <Link to={to}>
        <img className="img-fluid w-100 mt-3" src={imgSrc} alt={imgAlt} />
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer">
        <img className="img-fluid w-100 mt-3" src={imgSrc} alt={imgAlt} />
      </a>
    )}
    <p className="mt-2">{text}</p>
  </div>
);

const Transparencia = () => {
  useEffect(() => {
    document.title = `Transparencia`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[{ label: "Home", url: "/" }, { label: "Transparencia" }]}
      />
      <TitlePages title="Transparencia" subTitle="" />
      <div className="w-100 mt-3 Content__grid">
        <TransparenciaItem
          to="/Articulo63"
          imgSrc="https://itetlax.org.mx/assets/img/icons/1.png"
          imgAlt="Art. 63 Obligaciones Comunes"
          text="Art. 63 Obligaciones Comunes"
        />
        <TransparenciaItem
          to="/Articulo67"
          imgSrc="https://itetlax.org.mx/assets/img/icons/1.png"
          imgAlt="Art. 67 Obligaciones Específicas"
          text="Art. 67 Obligaciones Específicas"
        />
        <TransparenciaItem
          to="/Articulo94"
          imgSrc="https://itetlax.org.mx/assets/img/icons/1.png"
          imgAlt="Art. 94 Obligaciones Específicas"
          text="Art. 94 Obligaciones Específicas"
        />
        <TransparenciaItem
          to="/Convenios"
          imgSrc="https://itetlax.org.mx/assets/img/icons/2.png"
          imgAlt="Convenios"
          text="Convenios"
        />
        <TransparenciaItem
          href="https://itetlax.org.mx/assets/pdf/transparencia/1.pdf"
          imgSrc="https://itetlax.org.mx/assets/img/icons/3.png"
          imgAlt="Directorio General"
          text="Directorio General"
        />
        <TransparenciaItem
          to="/InformesAnuales"
          imgSrc="https://itetlax.org.mx/assets/img/icons/4.png"
          imgAlt="Informes anuales"
          text="Informes anuales"
        />
        <TransparenciaItem
          to="/AvisosPrivacidad"
          imgSrc="https://itetlax.org.mx/assets/img/icons/5.png"
          imgAlt="Aviso de privacidad"
          text="Aviso de privacidad"
        />
        <TransparenciaItem
          to="/FormatoSolicitud"
          imgSrc="https://itetlax.org.mx/assets/img/icons/2.png"
          imgAlt="Presentar solicitud"
          text="Presentar solicitud"
        />
        <TransparenciaItem
          to="/POA"
          imgSrc="https://itetlax.org.mx/assets/img/icons/6.png"
          imgAlt="Programas Operativos Anuales"
          text="Programas Operativos Anuales"
        />
        <TransparenciaItem
          to="/InformacionFinanciera"
          imgSrc="https://itetlax.org.mx/assets/img/icons/7.png"
          imgAlt="Información Financiera"
          text="Información Financiera"
        />
        <TransparenciaItem
          to="/InformacionContable"
          imgSrc="https://itetlax.org.mx/assets/img/icons/8.png"
          imgAlt="Información Contable"
          text="Información Contable"
        />
        <TransparenciaItem
          href="/#"
          imgSrc="https://itetlax.org.mx/assets/img/icons/1.png"
          imgAlt="Información Jurídica"
          text="Información Jurídica"
        />
        <TransparenciaItem
          href="/#"
          imgSrc="https://itetlax.org.mx/assets/img/icons/9.png"
          imgAlt="Reglamento interior"
          text="Reglamento interior"
        />
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
};

export default Transparencia;
