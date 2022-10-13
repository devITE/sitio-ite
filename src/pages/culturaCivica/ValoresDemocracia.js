import React, { Component } from "react";
import imagenes from "../../img/imgcivica/cultura_civica.png";
import imagenes1 from "../../img/imgcivica/infantil.png";

export default class ValoresDemocracia extends Component {
  render() {
    return (
      <div>
        <img src={imagenes} className="img-fluid w-100" alt="Cultura Cívica" />
        <hr className="borde" />
        <div className="col-md-6">
          <img
            src={imagenes1}
            className="img-fluid style-ec"
            alt="Valores de la democracia"
          />
          <h2 className="element-style">Valores de la democracia</h2>
        </div>
        <div className="col-md-12 estilo text-justify">
          <br />
          <p>
            <span className="pink-text2">
              Instituto Tlaxcalteca de Elecciones (ITE)
            </span>
            &nbsp;colabora con aliados estratégicos como las escuelas de nivel
            básico o medio superior, para desarrollar pláticas de valores de la
            democracia con el objetivo de fortalecer la convivencia escolar a
            través de la práctica diaria de los valores en el entorno escolar;
            de esta manera el ITE contribuye a la construcción de la ciudadanía,
            que en unos años será quién elija a las y los representantes
            populares que darán rumbo al estado.&nbsp;
            <span className="pink-text2">
              Para agendar una plática se requiere:
            </span>
          </p>
          <ol>
            <p>
              <li>
                Oficio de la institución educativa dirigido a la Presidencia del
                ITE.
              </li>
              <li>
                El ITE atenderá la solicitud a través de la Dirección del
                Organización Electoral, Capacitación y Educación Cívica quién
                designará al personal encargado como enlace para el calendarizar
                el desarrollo de la actividad.
              </li>
              <li>
                Una vez calendarizada la actividad el ITE acudirá a la
                Institución escolar a impartir la plática de Valores de la
                Democracia.
              </li>
              <li>
                Al finalizar la plática, el ITE entrega un reconocimiento al
                plantel educativo por ser un agente difusor de los “Valores de
                la Democracia”.
              </li>
            </p>
          </ol>
          <p>
            <span className="pink-text2">Datos de contacos:</span>
          </p>
          <p>
            Dirección de Organización Electoral, Capacitación y Educación Cívica
          </p>
          <p>
            Ex – Fábrica San Manuel S/N, Barrio Nuevo, C.P. 90640, San Miguel
            Contla, Santa Cruz Tlaxcala, Tlaxcala.
          </p>
          <p>
            Correo electrónico:
            <span className="pink-text2">
              &nbsp;organizacionelectoral@itetlax.org.mx
            </span>
          </p>
          <p>Tel. 246 46 50340 ext. 105 y 106</p>
        </div>
      </div>
    );
  }
}
