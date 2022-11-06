import React, { Component } from "react";
import imagenes from "../../img/imgcivica/cultura_civica.png";
import imagenes1 from "../../img/imgcivica/infantil.png";

export default class ParlamentoInfantil extends Component {
  render() {
    return (
      <div>
        <img src={imagenes} className="img-fluid w-100" alt="Cultura Cívica" />
        <hr className="borde" />
        <div className="col-md-6">
          <img
            src={imagenes1}
            className="img-fluid style-ec"
            alt="Parlamento Infantil"
          />
          <h2 className="element-style">Parlamento Infantil</h2>
        </div>
        <div className="col-md-12 estilo text-justify">
          <br />
          <p>
            Cada año el&nbsp;
            <span className="pink-text2">
              Instituto Tlaxcalteca de Elecciones
            </span>
            &nbsp;colabora con aliados estratégicos como el Congreso del Estado,
            la Secretaría de Educación Pública del Estado, la Comisión Estatal
            de Derechos Humanos, COESPO-SIPINNA, Sistema DIF Estatal, entre
            otros, para convocar a la niñez tlaxcalteca a participar en la
            <span className="pink-text2">
              &nbsp;edición anual del Parlamento Infantil
            </span>
            .
          </p>
          <p>¿Cómo participar?</p>
          <ol>
            <p>
              <li>
                Revisar la convocatoria que emita la Comisión Organizadora.
              </li>
              <li>
                Reunir los requisitos que se piden, estar cursando el 5° o 6°
                año de primaria, elaborar una participación respecto de un tema
                de interés para mejorar tu entorno escolar o comunitario; la
                Dirección de tu escuela presenta la solicitud y la autorización
                de uso de imagen descargables en la página del ITE.
              </li>
              <li>
                Participar en la primera etapa con la exposición del trabajo
                elaborado.
              </li>
              <li>
                Participar en la Convención Estatal, organizada por el ITE, en
                donde se eligen a las niñas y niños que integrarán el Parlamento
                Infantil.
              </li>
              <li>
                De resultar electa o electo, participar en la capacitación
                impartida por la Comisión Organizadora.
                <br />
              </li>
              <li>Presentar tus propuestas en el Parlamento Infantil.</li>
              <li>Las y los Parlamentarios electos, reciben una constancia.</li>
            </p> </ol>
            <p>
              <span className="pink-text2">Datos de contacos:</span>
            </p>
            <p>
              Dirección de Organización Electoral, Capacitación y Educación
              Cívica
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
