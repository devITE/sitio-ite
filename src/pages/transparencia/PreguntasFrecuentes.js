import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";
import "./Transparencia.css";

export default class PreguntasFrecuentes extends Component {
  render() {
    return (
      <>
        <TitlePages title="Transparencia" subTitle="Preguntas Frecuentes" />

        <div className="mt-3">
          <ol type="I" start="1">
            <li className="Preguntas__list">
              ¿Dónde puedo consultar los Resultados Electorales de las
              Elecciones celebradas en el Estado de Tlaxcala?
            </li>
            <strong>Respuesta:</strong>
            <p>
              Te informamos que el Instituto Tlaxcalteca de Elecciones, es
              responsable del ejercicio de la función estatal de preparación,
              organización, desarrollo, vigilancia y validez de los procesos de
              elección para renovar los poderes Legislativo y Ejecutivo del
              Estado, los ayuntamientos y las presidencias de comunidad
              (artículo 20 de la Ley de Instituciones y Procedimientos
              Electorales Para el Estado de Tlaxcala).
            </p>
            <p>
              Consulta los resultados electorales de las elecciones de
              Gubernaturas, Diputaciones, Ayuntamientos y Presidencias de
              Comunidad en el siguiente enlace:
            </p>
            <p className="text-center">
              <Link
                className="btn btn-ite"
                to="/ProcesosElectorales"
                target="_blank"
                rel="noreferrer"
              >
                Procesos Electorales
              </Link>
            </p>
            <li className="Preguntas__list">
              ¿Cómo puedo saber quiénes se registraron como candidatos/as a un
              cargo de elección en el Estado de Tlaxcala?
            </li>
            <strong>Respuesta:</strong>
            <p>
              El artículo 8 fracción II de la Ley de Instituciones y
              Procedimientos Electorales para el Estado de Tlaxcala, señala que
              es un derecho poder ser votado para todos los cargos de elección
              popular y para ser nombrado para desempeñar cualquier otro empleo
              o comisión, teniendo las cualidades que establezca la Constitución
              Local las demás leyes aplicables.
            </p>
            <p>
              El derecho de solicitar el registro de candidatos ante la
              autoridad electoral corresponde a los partidos políticos, así como
              a los ciudadanos que soliciten su registro de manera independiente
              a aquéllos y cumplan con los requisitos, condiciones y términos
              que determinen las leyes aplicables.
            </p>
            <p>
              Puedes consultar los acuerdos del Consejo General del Instituto
              Tlaxcalteca de Elecciones mediante los que se aprobaron registros
              de candidaturas a diferentes cargos de elección, dando clic en el
              siguiente enlace:
            </p>
            <li className="Preguntas__list">
              ¿Dónde puedo consultar la Lista Nominal y el Padrón Electoral?
            </li>
            <strong>Respuesta:</strong>
            <p>
              De conformidad con lo dispuesto por los artículos 41, base V,
              apartado B, inciso a, numeral 3, de la Constitución Política de
              los Estados Unidos Mexicanos, y 32, numeral 1, inciso a), fracción
              III de la Ley General de Instituciones y Procedimientos
              Electorales, es atribución del Instituto Nacional Electoral para
              los procesos electorales federales y locales formar y administrar
              el padrón electoral y la lista nominal de electores. Por lo que
              puedes solicitar esta información a dicho Órgano Electoral.
            </p>
            <p>
              Puedes presentar tu solicitud dirigida al Instituto Nacional
              Electoral accediendo al siguiente enlace:
            </p>
            <p className="text-center">
              <a
                className="btn btn-ite"
                href="https://listanominal.ine.mx/scpln/"
                target="_blank"
                rel="noreferrer"
              >
                Lista nominal y padrón electoral
              </a>
            </p>
            <li className="Preguntas__list">
              ¿Cuál es el presupuesto otorgado al Instituto Tlaxcalteca de
              Elecciones?
            </li>
            <strong>Respuesta:</strong>
            <p>
              Te informamos que al Instituto Tlaxcalteca de Elecciones le es
              aprobado un presupuesto cada ejercicio fiscal, por parte del
              Congreso del Estado, mediante el cual cumple con sus funciones,
              gran parte de este recuso se otorga a los partidos políticos.
            </p>
            <p>
              Te invitamos a que conozcas el presupuesto otorgado a nuestro
              Instituto:
            </p>

            <div className="table-responsive">
              <table className="table text-center table-striped table-hover w-50 mx-auto">
                <thead>
                  <tr>
                    <th scope="col">Ejercicio</th>
                    <th scope="col">Presupuesto otorgado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2004</td>
                    <td>$108,507,780.07</td>
                  </tr>
                  <tr>
                    <td>2006</td>
                    <td>$64,286,489.25</td>
                  </tr>
                  <tr>
                    <td>2009</td>
                    <td>$53,893,915.90</td>
                  </tr>
                  <tr>
                    <td>2010</td>
                    <td>$164,378,440.48</td>
                  </tr>
                  <tr>
                    <td>2012</td>
                    <td>$39,937,209.30</td>
                  </tr>
                  <tr>
                    <td>2015</td>
                    <td>$44,874,797.00</td>
                  </tr>
                  <tr>
                    <td>2016</td>
                    <td>$125,000,000.00</td>
                  </tr>
                  <tr>
                    <td>2017</td>
                    <td>$51,000,000.00</td>
                  </tr>
                  <tr>
                    <td>2018</td>
                    <td>$75,000,000.00</td>
                  </tr>
                  <tr>
                    <td>2019</td>
                    <td>$80,000,000.00</td>
                  </tr>
                  <tr>
                    <td>2020</td>
                    <td>$83,042,151.03</td>
                  </tr>
                  <tr>
                    <td>2021</td>
                    <td>$185,782,415.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <li className="Preguntas__list">
              ¿Cuál es el monto de las Prerrogativas otorgadas a los Partidos
              Políticos?
            </li>
            <strong>Respuesta:</strong>
            <p>
              Con fundamento en el artículo 76, fracción IV, de la Ley de
              Instituciones y Procedimientos Electorales Para el Estado de
              Tlaxcala, el Instituto Tlaxcalteca de Elecciones a través de la
              Dirección de Prerrogativas, Administración y Fiscalización es el
              encargado de otorgar las prerrogativas a los Partidos Políticos.
              Estas prerrogativas se desprenden del recurso otorgado al
              Instituto Tlaxcalteca de Elecciones.
            </p>
            <p>
              Consulta las prerrogativas que el Instituto Tlaxcalteca de
              Elecciones ha otorgado a los partidos políticos.
            </p>
            <div className="table-responsive align-middle">
              <table className="table table-striped table-hover text-center">
                <thead>
                  <tr>
                    <th rowSpan="2">PARTIDO POLÍTICO</th>
                    <th colSpan="7">EJERCICIO</th>
                  </tr>
                  <tr>
                    <th>2014</th>
                    <th>2016</th>
                    <th>2017</th>
                    <th>2018</th>
                    <th>2019</th>
                    <th>2020</th>
                    <th>2021</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">Partido Acción Nacional</th>
                    <td>$6,796,004.00</td>
                    <td>$13,592,008.00</td>
                    <td>$7,313,104.00</td>
                    <td>$8,214,120.96</td>
                    <td>$6,806,348.16</td>
                    <td>$6,227,110.07</td>
                    <td>$9,224,124.08</td>
                  </tr>
                  <tr>
                    <th scope="row">Partido Revolucionario Institucional</th>
                    <td>$7,862,157.00</td>
                    <td>$13,758,783.00</td>
                    <td>$5,398,590.00</td>
                    <td>$6,062,049.96</td>
                    <td>$3,710,541.24</td>
                    <td>$3,269,389.65</td>
                    <td>$4,832,677.55</td>
                  </tr>
                  <tr>
                    <th scope="row">Partido de la Revolución Democrática</th>
                    <td>$6,136,724.00</td>
                    <td>$6,136,724.00</td>
                    <td>$6,597,287.00</td>
                    <td>$7,410,108.96</td>
                    <td>$4,148,805.00</td>
                    <td>$3,688,104.90</td>
                    <td>$5,454,360.93</td>
                  </tr>
                  <tr>
                    <th scope="row">Partido del Trabajo</th>
                    <td></td>
                    <td></td>
                    <td>$2,766,206.00</td>
                    <td>$3,107,022.96</td>
                    <td>$5,462,544.96</td>
                    <td>$4,943,246.37</td>
                    <td>$7,317,919.98</td>
                  </tr>
                  <tr>
                    <th scope="row">Partido Verde Ecologista de México</th>
                    <td>$2,364,431.00</td>
                    <td>$2,364,431.00</td>
                    <td>$2,707,311.00</td>
                    <td>$3,041,550.96</td>
                    <td>$3,706,266.48</td>
                    <td>$3,265,305.60</td>
                    <td>$4,826,613.79</td>
                  </tr>
                  <tr>
                    <th scope="row">Movimiento Ciudadano</th>
                    <td>$2,401,274.00</td>
                    <td>$2,221,177.00</td>
                    <td>$2,351,341.00</td>
                    <td>$2,641,032.96</td>
                    <td>$4,297,298.88</td>
                    <td>$3,829,975.32</td>
                    <td>$5,665,001.65</td>
                  </tr>
                  <tr>
                    <th scope="row">Morena</th>
                    <td>$1,149,376.00</td>
                    <td>$1,149,376.00</td>
                    <td>$4,273,854.00</td>
                    <td>$4,800,419.06</td>
                    <td>$18,417,674.16</td>
                    <td>$17,320,520.01</td>
                    <td>$25,694,956.22</td>
                  </tr>
                  <tr>
                    <th scope="row">Nueva Alianza</th>
                    <td>$3,075,406.00</td>
                    <td>$3,075,406.00</td>
                    <td>$3,338,845.00</td>
                    <td>$3,751,199.04</td>
                    <td>$3,555,725.86</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Nueva Alianza Tlaxcala</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$3,357,698.80</td>
                    <td>$4,963,793.69</td>
                  </tr>
                  <tr>
                    <th scope="row">Encuentro Social</th>
                    <td>$1,149,376.00</td>
                    <td>$1,149,376.00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$1,646,037.19</td>
                  </tr>
                  <tr>
                    <th scope="row">Encuentro Social Tlaxcala</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$3,009,081.86</td>
                    <td>$4,446,188.11</td>
                  </tr>
                  <tr>
                    <th scope="row">Partido Alianza Ciudadana</th>
                    <td>$4,032,930.00</td>
                    <td>$4,032,936.00</td>
                    <td>$4,035,292.00</td>
                    <td>$4,532,457.00</td>
                    <td>$969,780.86</td>
                    <td>$1,029,693.32</td>
                    <td>$1,646,037.19</td>
                  </tr>
                  <tr>
                    <th scope="row">Partido Socialista</th>
                    <td>$3,344,856.00</td>
                    <td>$3,344,856.00</td>
                    <td>$2,967,908.00</td>
                    <td>$3,333,569.04</td>
                    <td>$969,780.86</td>
                    <td>$1,029,693.32</td>
                    <td>$1,646,037.19</td>
                  </tr>
                  <tr>
                    <th scope="row">Impacto Social "Sí"</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$514,846.66</td>
                    <td>$1,646,037.19</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <li className="Preguntas__list">
              ¿Dónde puedo consultar el Registro de Representantes ante mesas
              directivas de casilla?
            </li>
            <strong>Respuesta:</strong>
            <p>
              Te informamos que con base en los artículos 262 de la Ley General
              de Instituciones y Procedimientos Electorales, 254 del Reglamento
              de Elecciones del Instituto Nacional Electoral, el registro de
              representantes generales y ante mesas directivas de casilla, de
              partidos políticos y candidaturas independientes, en cualquier
              proceso electoral federal o local, sean estos ordinarios o
              extraordinarios, está a cargo del Instituto Nacional Electoral a
              través de sus Consejos Locales y Distritales.
            </p>
            <p>
              Puedes presentar tu solicitud dirigida al Instituto Nacional
              Electoral accediendo al siguiente enlace:
            </p>
            <p className="text-center">
              <a
                className="btn btn-ite"
                href="https://portalanterior.ine.mx/archivos3/portal/historico/contenido/Acreditacion_y_Presenciade_Representantes_de_Partidos_Politicos_ante_casillas/"
                target="_blank"
                rel="noreferrer"
              >
                Registro de Representantes ante mesas directivas de casilla
              </a>
            </p>
            <li className="Preguntas__list">
              ¿Qué mecanismos de Participación Ciudadana se han ejercido en el
              Estado de Tlaxcala?
            </li>
            <strong>Respuesta:</strong>
            <p>
              La Ley de Consulta Ciudadana para el Estado de Tlaxcala fue
              publicada en el Periódico Oficial del Gobierno del Estado de
              Tlaxcala el 26 de julio de 2006, y entró en vigor el 01 de enero
              de 2007. Esta Ley regula los procesos de Iniciativa Popular,
              Consulta Popular, Plebiscito, Referéndum y Voz Ciudadana en el
              Cabildo.
            </p>
            <p>
              Desde la entrada en vigor y hasta la fecha
              <strong>
                no se ha ejercido alguno de los mecanismos de participación
                ciudadana que contempla la Ley
              </strong>
              .
            </p>
            <p>
              Te invitamos a que conozcas más a fondo los mecanismos de
              participación ciudadana que contempla nuestra ley, accediendo al
              siguiente enlace:
            </p>
          </ol>
          <p className="text-center">
            <a
              className="btn btn-ite"
              href="https://participacion-ciudadana.itetlax.org.mx/"
              target="_blank"
              rel="noreferrer"
            >
              Microstio Participación Ciudadana
            </a>
          </p>
        </div>
      </>
    );
  }
}
