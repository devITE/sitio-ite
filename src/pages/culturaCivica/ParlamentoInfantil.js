import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";

const TextParagraph = ({ children, strongText }) => (
  <p>
    {children}
    {strongText && <span className="text-strong">{strongText}</span>}
  </p>
);

const ParticipationStep = ({ step }) => <li>{step}</li>;

export const ParlamentoInfantil = () => {
  useEffect(() => {
    document.title = `Parlamento Infantil`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Cultura Cívica", url: "/CulturaCivica" },
          { label: "Parlamento Infantil" },
        ]}
      />
      <TitlePages title="Cultura Cívica" subTitle="Parlamento Infantil" />
      <TextParagraph strongText="edición anual del Parlamento Infantil.">
        Cada año el&nbsp;
        <span className="text-strong">Instituto Tlaxcalteca de Elecciones</span>
        &nbsp;colabora con aliados estratégicos como el Congreso del Estado, la
        Secretaría de Educación Pública del Estado, la Comisión Estatal de
        Derechos Humanos, COESPO-SIPINNA, Sistema DIF Estatal, entre otros, para
        convocar a la niñez tlaxcalteca a participar en la
      </TextParagraph>
      <h3>¿Cómo participar?</h3>
      <ol>
        <ParticipationStep step="Revisar la convocatoria que emita la Comisión Organizadora." />
        <ParticipationStep step="Reunir los requisitos que se piden, estar cursando el 5° o 6° año de primaria, elaborar una participación respecto de un tema de interés para mejorar tu entorno escolar o comunitario; la Dirección de tu escuela presenta la solicitud y la autorización de uso de imagen descargables en la página del ITE." />
        <ParticipationStep step="Participar en la primera etapa con la exposición del trabajo elaborado." />
        <ParticipationStep step="Participar en la Convención Estatal, organizada por el ITE, en donde se eligen a las niñas y niños que integrarán el Parlamento Infantil." />
        <ParticipationStep step="De resultar electa o electo, participar en la capacitación impartida por la Comisión Organizadora." />
        <ParticipationStep step="Presentar tus propuestas en el Parlamento Infantil." />
        <ParticipationStep step="Las y los Parlamentarios electos, reciben una constancia." />
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

export default ParlamentoInfantil;
