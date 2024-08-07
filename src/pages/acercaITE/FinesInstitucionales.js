import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const FinesInstitucionales = () => {
  useEffect(() => {
    document.title = `Fines Institucionales`;
  }, []);
  return (
    <>
      <Breadcrumbs path={[{ label: `Fines Institucionales` }]} />
      <TitlePages title="Fines Institucionales" subTitle="" />
      <p>
        La Ley de Instituciones y Procedimientos Electorales para el Estado de
        Tlaxcala establece como fines institucionales los siguientes:
      </p>

      <ol type="I" start="1" className="ms-3">
        <li>
          Contribuir al desarrollo de la vida democrática de los ciudadanos
          residentes en el Estado.
        </li>
        <li>
          Promover, fomentar y preservar el fortalecimiento democrático del
          sistema de partidos políticos y la participación electoral de los
          candidatos independientes.
        </li>
        <li>
          Promover, fomentar y preservar el ejercicio de los derechos
          político-electorales y la vigilancia en el cumplimiento de sus
          obligaciones.
        </li>
        <li>Velar por la autenticidad y efectividad del sufragio.</li>
        <li>
          Garantizar la celebración libre, auténtica y periódica de las
          elecciones para renovar los poderes Legislativo y Ejecutivo, así como
          los ayuntamientos y las presidencias de comunidad.
        </li>
        <li>
          Velar por la libertad, autenticidad y efectividad del sufragio y el
          voto popular.
        </li>
        <li>Llevar a cabo la promoción del sufragio y el voto.</li>
        <li>Difundir la cultura política democrática y la educación cívica.</li>
        <li>
          Difundir, planear, desarrollar y realizar los procesos de consulta
          ciudadana de acuerdo con lo que prescriben la Constitución Local y las
          leyes aplicables.
        </li>
      </ol>
    </>
  );
};
export default FinesInstitucionales;
