import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

export default class ParlamentoJuvenil extends Component {
  render() {
    return (
      <>
        <TitlePages title="Cultura Cívica" subTitle="Parlamento Juvenil" />
        <p>
          El&nbsp;
          <span className="text-strong">
            Instituto Tlaxcalteca de Elecciones
          </span>
          colabora con el Congreso del Estado y el Instituto Tlaxcalteca de la
          Juventud, para convocar a las juventudes tlaxcaltecas a participar en
          <span className="text-strong">
            la edición anual del parlamento juvenil
          </span>
          , en el cual se escucha la voz de las y los jóvenes a través de sus
          propuestas de iniciativa o reformas y ensayos.
        </p>
        <h3>¿Cómo participar?</h3>
        <ol>
          <li>Revisar la convocatoria que emita la Comisión Organizadora.</li>
          <li>
            Reunir los requisitos que se piden, estar cursando el 5° o 6° año de
            primaria, elaborar una participación respecto de un tema de interés
            para mejorar tu entorno escolar o comunitario; la Dirección de tu
            escuela presenta la solicitud y la autorización de uso de imagen
            descargables en la página del ITE.
          </li>
          Revisar la convocatoria que emita la Comisión Organizadora.
          <li>
            Reunir los requisitos, como edad, presentar una iniciativa de ley o
            bien para regular temas de interés social, pertenecer a una
            asociación civil, solo en el caso de participar por el principio de
            representación proporcional, descargar la solicitud de inscripción,
            una identificación oficial, un comprobante de domicilio y
            presentarlos ante el Congreso del Estado o en la Dirección del
            Organización Electoral, Capacitación y Educación Cívica del ITE.
          </li>
          <li>
            Realizar la exposición de la iniciativa ante las y los integrantes
            del jurado calificador.
          </li>
          <li>
            De resultar seleccionada o seleccionado, participar en la
            capacitación que imparte la Comisión Organizadora.
          </li>
          <li>Presentar tus propuestas en el Parlamento Juvenil.</li>
          <li>Las y los jóvenes parlamentarios electos reciben constancia.</li>
        </ol>
        <h3>Datos de contacto:</h3>
        <p>
          Dirección de Organización Electoral, Capacitación y Educación Cívica
          <br /> Ex – Fábrica San Manuel S/N, Barrio Nuevo, C.P. 90640, San
          Miguel Contla, Santa Cruz Tlaxcala, Tlaxcala.
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
  }
}
