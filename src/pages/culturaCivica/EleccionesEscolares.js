import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

const CulturaCivica__path = require.context("../../assets");

export default class EleccionesEscolares extends Component {
  render() {
    return (
      <>
        <TitlePages title="Cultura Cívica" />
        <div className="w-100 d-flex justify-content-between align-items-center">
          <img
            src={CulturaCivica__path(`./${"img/imgcivica/libro.png"}`)}
            className="img-fluid h-25"
            alt="Actividades Lúdicas"
          />
          <h1>Elecciones Escolares</h1>
          <a
            type="button"
            className="btn btn-ite"
            href={CulturaCivica__path(`./${"pdf/ccivica/1.pdf"}`)}
            target="_blank"
            rel="noreferrer"
          >
            Manual de Elecciones Escolares
          </a>
        </div>
        <p className="text-justify mt-3">
          <span className="text-strong">
            Es una actividad dirigida a las y los integrantes de una Institución
            educativa del nivel básico o medio superior
          </span>
          &nbsp;que involucra a la Dirección, el profesorado y al alumnado que
          participan en el Proceso de la Elección Escolar, con el objetivo
          general de promover y fortalecer la práctica de valores cívicos y la
          cultura democrática entre niñas, niños, adolescentes y jóvenes a
          través de ejercicios cívicos con la finalidad de contribuir a la
          formación de una ciudadanía participativa y comprometida con el
          desarrollo de su comunidad.
        </p>
        <p className="text-justify">
          En este sentido,
          <span className="text-strong">
            &nbsp;el sector estudiantil es orientado por el personal del
            Instituto Tlaxcalteca de Elecciones (ITE)
          </span>
          , para que mediante un proceso democrático elijan a las y los
          integrantes de la sociedad de alumnas y alumnos, consejos
          estudiantiles, comités estudiantiles u otros análogos.
        </p>
        <p className="text-justify">
          Ahora bien, los trabajos desarrollados dotaron de la experiencia
          <span className="text-strong">
            &nbsp;para sistematizar en un documento la ejecución de las
            elecciones escolares obteniendo como producto el Manual de
            Elecciones Escolares del ITE
          </span>
          &nbsp;aprobado en Sesión Pública Ordinaria del Consejo General de
          fecha 31 de agosto del 2020, mediante Acuerdo ITE-CG 28/2020.
        </p>
        <p className="text-justify">
          Sin embargo, por la situación de la pandemia provocada por el
          COVID-19, las autoridades educativas federales y estatales acordaron
          el inicio del ciclo escolar 2020- 2021 para el 24 de agosto de 2020,
          aplicando la estrategia
          <span className="text-strong">&nbsp;“Aprende en casa 2”</span>
          &nbsp;la cual ocupa como eje central los
          <span className="text-strong">
            &nbsp;medios de comunicación como la radio y la televisión para
            comenzar los trabajos con las niñas, niños y adolescentes
          </span>
          ,&nbsp;reforzando con las tecnologías de la información y las
          herramientas digitales.
        </p>
        <p className="text-justify">
          En consecuencia,
          <span className="text-strong">
            &nbsp;el Manual referido contiene un capítulo final en el que
            posibilita el desarrollo de las elecciones escolares para la
            sociedad de alumnas y alumnos
          </span>
          &nbsp;del ciclo vigente mediante la modalidad virtual, este es un
          ejercicio interesante ya que ofrece la oportunidad de continuar con el
          desarrollo de la ciudadanía utilizando los medios digitales
          disponibles.
        </p>
        <h3>Datos de contacto:</h3>
        <p className="text-justify">
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
