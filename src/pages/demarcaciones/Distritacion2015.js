import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

// Componente reutilizable para los enlaces con imágenes
const PdfLink = ({ href, src, alt }) => (
  <div>
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} className="img-fluid" alt={alt} />
    </a>
  </div>
);

const Acuerdos2015 = () => {
  useEffect(() => {
    document.title = `Acuerdos 2015`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Acuerdos Demarcaciones", url: "/Acuerdos" },
          { label: "Acuerdos 2015" },
        ]}
      />
      <TitlePages title="Acuerdos 2015" subTitle="" />

      <div className="w-100 Grid__folder">
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG335-2015.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/1.png"
          alt="Acuerdo INE 2015"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/anexo.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/2.png"
          alt="Anexo"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/ACUERDO_1_CNV_EXT_130815-1.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/3.png"
          alt="ACUERDO_1_CNV_EXT_130815-1"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/anexo2.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/4.png"
          alt="Anexo2"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/anexo3.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/5.png"
          alt="Anexo 3"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG824-2015-1.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/6.png"
          alt="INE CG824 2015"
        />
      </div>
    </>
  );
};

export default Acuerdos2015;
