import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

export default class ValoresDemocracia extends Component {
  render() {
    return (
      <>
        <TitlePages
          title="Cultura Cívica"
          subTitle="Valores de la Democracia"
        />
        <p className="mt-3">
          El{" "}
          <span className="text-strong">
            Instituto Tlaxcalteca de Elecciones (ITE)
          </span>
          &nbsp;colabora con aliados estratégicos como las escuelas de nivel
          básico o medio superior, para desarrollar pláticas de valores de la
          democracia con el objetivo de fortalecer la convivencia escolar a
          través de la práctica diaria de los valores en el entorno escolar; de
          esta manera el ITE contribuye a la construcción de la ciudadanía, que
          en unos años será quién elija a las y los representantes populares que
          darán rumbo al estado.&nbsp;
          <span className="text-strong">
            Para agendar una plática se requiere:
          </span>
        </p>
        <ol>
          <li>
            Oficio de la institución educativa dirigido a la Presidencia del
            ITE.
          </li>
          <li>
            El ITE atenderá la solicitud a través de la Dirección del
            Organización Electoral, Capacitación y Educación Cívica quién
            designará al personal encargado como enlace para el calendarizar el
            desarrollo de la actividad.
          </li>
          <li>
            Una vez calendarizada la actividad el ITE acudirá a la Institución
            escolar a impartir la plática de Valores de la Democracia.
          </li>
          <li>
            Al finalizar la plática, el ITE entrega un reconocimiento al plantel
            educativo por ser un agente difusor de los “Valores de la
            Democracia”.
          </li>
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
