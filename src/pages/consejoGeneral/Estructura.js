import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";

const Estructura = () => {
  useEffect(() => {
    document.title = `ITE - Estructura`;
  }, []);
    return (
      <div>
        <TitlePages title="Estructura" subTitle="" />
        <p>
          Para el ejercicio de sus funciones, el Instituto contará con órganos
          directivos, ejecutivos y de vigilancia, así como con órganos y áreas
          técnicas, y con el personal necesario e idóneo para el cumplimiento de
          sus atribuciones y fines.
        </p>
        <p className="text-strong ms-4">
          Los órganos directivos del Instituto son:
        </p>
        <ol type="I" start="1" className="ms-5">
          <li>El Consejo General</li>
          <li>Los Consejos Distritales Electorales;</li>
          <li>Los Consejos Municipales Electorales;</li>
          <li>Las Mesas Directivas de Casilla.</li>
        </ol>
        <p className="text-strong ms-4">
          Los órganos ejecutivos del Instituto son:
        </p>
        <ol type="I" start="1" className="ms-5">
          <li>La Presidencia del Consejo General;</li>
          <li>La Junta General Ejecutiva;</li>
          <li>La Secretaría Ejecutiva;</li>
          <li>
            La Dirección de Organización Electoral, Capacitación y Educación
            Cívica;
          </li>
          <li>
            La Dirección de Prerrogativas, Administración y Fiscalización;
          </li>
          <li>La Dirección de Asuntos Jurídicos;</li>
          <li>La Contraloría General.</li>
        </ol>
        <div className="text-storng ms-4">
          Los órganos de vigilancia del Instituto son:
        </div>
        <ol type="I" start="1" className="ms-5">
          <li>
            La Comisión de Prerrogativas, Partidos Políticos, Administración y
            Fiscalización;
          </li>
          <li>La Comisión de Vigilancia del Registro de Electores;</li>
          <li>La Comisión de Gobierno Interno;</li>
          <li>Las demás que acuerde el Consejo General.</li>
        </ol>
        <p className="text-strong ms-4">
          Las áreas técnicas del Instituto son:
        </p>
        <ol type="I" start="1" className="ms-5">
          <li>De Informática;</li>
          <li>De Comunicación Social y Prensa;</li>
          <li>De Consulta Ciudadana;</li>
          <li>De Transparencia y Acceso a la Información.</li>
        </ol>
      </div>
    );
  }
  export default Estructura;
