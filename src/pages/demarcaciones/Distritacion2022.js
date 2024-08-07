import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const PdfLink = ({ href, src, alt }) => (
  <div>
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} className="img-fluid" alt={alt} />
    </a>
  </div>
);

const Acuerdos2022 = () => {
  useEffect(() => {
    document.title = `Acuerdos 2022`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Acuerdos Demarcaciones", url: "/Acuerdos" },
          { label: "Acuerdos 2022" },
        ]}
      />
      <TitlePages title="Acuerdos 2022" subTitle="" />

      <div className="w-100 Grid__folder">
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/7.png"
          alt="INE CG612 2022"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022a1.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/8.png"
          alt="INE CG612 2022 ANEXO 1"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022a2.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/9.png"
          alt="INE CG612 2022 ANEXO 2"
        />
        <PdfLink
          href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022a3b.pdf"
          src="https://itetlax.org.mx/assets/img/imgDemA/10.png"
          alt="INE CG612 2022 ANEXO 3B"
        />
      </div>
    </>
  );
};

export default Acuerdos2022;
