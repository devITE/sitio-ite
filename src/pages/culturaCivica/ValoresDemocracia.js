import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const TextParagraph = ({ children, strongText }) => (
  <p>
    {children}
    {strongText && <span className="text-strong">{strongText}</span>}
  </p>
);

const SchedulingStep = ({ step }) => <li>{step}</li>;

export const ValoresDemocracia = () => {
  useEffect(() => {
    document.title = `Valores de la Democracia`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Cultura Cívica", url: "/CulturaCivica" },
          { label: "Valores de la Democracia" },
        ]}
      />
      <TitlePages title="Cultura Cívica" subTitle="Valores de la Democracia" />
      <TextParagraph strongText="Para agendar una plática se requiere:">
        El{" "}
        <span className="text-strong">
          Instituto Tlaxcalteca de Elecciones (ITE)
        </span>
        &nbsp;colabora con aliados estratégicos como las escuelas de nivel
        básico o medio superior, para desarrollar pláticas de valores de la
        democracia con el objetivo de fortalecer la convivencia escolar a través
        de la práctica diaria de los valores en el entorno escolar; de esta
        manera el ITE contribuye a la construcción de la ciudadanía, que en unos
        años será quién elija a las y los representantes populares que darán
        rumbo al estado.
      </TextParagraph>
      <ol>
        <SchedulingStep step="Oficio de la institución educativa dirigido a la Presidencia del ITE." />
        <SchedulingStep step="El ITE atenderá la solicitud a través de la Dirección del Organización Electoral, Capacitación y Educación Cívica quién designará al personal encargado como enlace para calendarizar el desarrollo de la actividad." />
        <SchedulingStep step="Una vez calendarizada la actividad, el ITE acudirá a la Institución escolar a impartir la plática de Valores de la Democracia." />
        <SchedulingStep step="Al finalizar la plática, el ITE entrega un reconocimiento al plantel educativo por ser un agente difusor de los “Valores de la Democracia”." />
      </ol>
      <h3>Datos de contacto:</h3>
      <p>
        Dirección de Organización Electoral, Capacitación y Educación Cívica
        <br /> Ex – Fábrica San Manuel S/N, Barrio Nuevo, C.P. 90640, San Miguel
        Contla, Santa Cruz Tlaxcala, Tlaxcala.
        <br />
        Correo electrónico:{" "}
        <span className="text-strong">
          organizacionelectoral@itetlax.org.mx
        </span>
        <br />
        Tel. 246 46 50340 ext. 105 y 106
      </p>
    </>
  );
};

export default ValoresDemocracia;
