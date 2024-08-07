import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";
import "./Integracion.css";

const TabButton = ({ id, target, label, active }) => (
  <button
    className={`btn btn-ite ${active ? "active" : ""}`}
    id={id}
    data-bs-toggle="pill"
    data-bs-target={target}
    type="button"
    role="tab"
    aria-controls={target.slice(1)}
    aria-selected={active}
  >
    {label}
  </button>
);

const GridItem = ({ href, imgSrc, altText, title, name }) => (
  <div className="rounded grid-4-item bg-secondary bg-opacity-25">
    <a href={href} target="_blank" rel="noreferrer" className="nav-link">
      <div className="bg-ite">
        <img
          src={imgSrc}
          className="shadow_img rounded img-fluid w-75"
          alt={altText}
        />
      </div>
      <div>
        <p>{title}</p>
        <p>{name}</p>
      </div>
    </a>
  </div>
);

const Integración = () => {
  useEffect(() => {
    document.title = "Integración";
  }, []);

  const gridItems = [
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/1.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/1.png",
      altText: "Emmanuel Ávila González",
      title: "Consejero Presidente",
      name: "Lic. Emmanuel Ávila González",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/8.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/2.png",
      altText: "Elizabeth Vázquez Alonso",
      title: "Secretaria Ejecutiva",
      name: "Mtra. Elizabeth Vázquez Alonso",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/2.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/3.png",
      altText: "Erika Periañez Rodríguez",
      title: "Consejera Electoral",
      name: "Lic. Erika Periañez Rodríguez",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/3.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/4.png",
      altText: "Edgar Alfonso Aldave Aguilar",
      title: "Consejero Electoral",
      name: "Lic. Edgar Alfonso Aldave Aguilar",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/4.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/5.png",
      altText: "Janet Cervante Ahuatzi",
      title: "Consejera Electoral",
      name: "Lic. Janet Cervantes Ahuatzi",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/5.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/6.png",
      altText: "Hermenegildo Neria Carreño",
      title: "Consejero Electoral",
      name: "Lic. Hermenegildo Neria Carreño",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/6.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/7.png",
      altText: "Yedith Martínez Pinillo",
      title: "Consejera Electoral",
      name: "Lic. Yedith Martínez Pinillo",
    },
    {
      href: "https://itetlax.org.mx/assets/pdf/CG/7.pdf",
      imgSrc: "https://itetlax.org.mx/assets/img/intCG/8.png",
      altText: "Juan Carlos Minor Marquez",
      title: "Consejero Electoral",
      name: "Mtro. Juan Carlos Minor Marquez",
    },
  ];

  const partyRepresentatives = [
    {
      href: "https://www.pantlaxcala.org.mx/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/1.jpg",
      altText: "pan",
    },
    {
      href: "https://pritlaxcala.org.mx/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/2.png",
      altText: "pri",
    },
    {
      href: "https://www.prd.org.mx/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/3.jpg",
      altText: "prd",
    },
    {
      href: "http://pttlaxcala.com.mx/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/4.jpg",
      altText: "pt",
    },
    {
      href: "https://partidoverdetlaxcala.org/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/5.png",
      altText: "verde",
    },
    {
      href: "https://movimientociudadano.mx/tlaxcala",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/6.png",
      altText: "movimiento ciudadano",
    },
    {
      href: "https://www.partidoalianzaciudadanatlax.com/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/7.jpg",
      altText: "pac",
    },
    {
      href: "https://morena.org/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/8.png",
      altText: "morena",
    },
    {
      href: "https://www.natlaxcala.mx/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/9.png",
      altText: "nueva alianza",
    },
    {
      href: "https://www.redessocialesprogresistas.org/tlaxcala/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/10.jpg",
      altText: "rsp",
    },
    {
      href: "https://www.fuerzapormexicotlx.org/",
      imgSrc: "https://itetlax.org.mx/assets/img/intPP/11.png",
      altText: "fuerza x mexico",
    },
  ];

  return (
    <>
      <Breadcrumbs path={[{ label: "Integración" }]} />
      <TitlePages title="Integración" subTitle="" />
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <TabButton
            id="v-pills-integracion-tab"
            target="#v-pills-integracion"
            label="Integración"
            active
          />
          <TabButton
            id="v-pills-pp-tab"
            target="#v-pills-pp"
            label="Representantes de los Partidos Políticos"
          />
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-integracion"
            role="tabpanel"
            aria-labelledby="v-pills-integracion-tab"
            tabIndex="0"
          >
            <div className="w-100 grid-4">
              {gridItems.map((item, index) => (
                <GridItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-pp"
            role="tabpanel"
            aria-labelledby="v-pills-pp-tab"
            tabIndex="0"
          >
            <div className="w-100 Grid__four">
              {partyRepresentatives.map((rep, index) => (
                <div key={index}>
                  <a href={rep.href} target="_blank" rel="noreferrer">
                    <img
                      src={rep.imgSrc}
                      className="img-fluid hover-ite"
                      alt={rep.altText}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integración;
