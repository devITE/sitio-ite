import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";
import Timer from "../../layout/Timer";
import ModalInit from "../../layout/Modal/ModalInit";
import Carousel from "../../layout/Carousel/Carousel/Carousel";
import CarouselItemIMG from "../../layout/Carousel/Carousel/CarouselItemIMG";
import { dataCarousel } from "../../data/dataDESPEN";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default class DESPEN extends Component {
  render() {
    return (
      <>
        <ModalInit
          imgLink="https://itetlax.org.mx/assets/despen/img/banner.jpg"
          url=""
          linkToo=""
        />

        <TitlePages title="Convocatoria DESPEN 2022" subTitle="" />
        <div className="w-75 shadow rounded mx-auto">
          <img
            src="https://itetlax.org.mx/assets/despen/img/banner.jpg"
            className="img-fluid w-100"
            alt="Convocatoria DESPEN"
          />
        </div>
        <h3 className="mt-5 bottom_title">Avisos</h3>
        <div className="w-50 mx-auto">
          <Carousel idCarousel="carouselActividadesRecientes">
            {dataCarousel.map((cAR) => (
              <CarouselItemIMG
                key={cAR.id}
                imgUrl={cAR.url}
                alt={cAR.alt}
                itemActive={cAR.itemActive}
                link={cAR.link}
              />
            ))}
          </Carousel>
        </div>
        <h3 className="mt-5 bottom_title">Recordatorio</h3>
        <div className="mt-3 w-50 shadow rounded mx-auto">
          <img
            src="https://itetlax.org.mx/assets/despen/img/recordatorio3dic.jpg"
            className="img-fluid w-100"
            alt="Recordatorio"
          />
        </div>
        <h3 className="text-center mt-5 mb-3">
          Tiempo restante para la aplicación del examen de de conocimientos
        </h3>
        <Timer />
        <h3 className="mt-5 bottom_title">Información Relevante</h3>
        <p>
          Convocatoria del Concurso Público 2022-2023 de ingreso del sistema de
          los OPLE. Para mayor información puede dar click{" "}
          <a
            href="https://www.ine.mx/comunidad-ine/convocatoria-concurso-publico-2022-2023-de-ingreso-sistema-ople/"
            target="_blank"
            rel="noreferrer"
          >
            aquí
          </a>
        </p>
        <p>
          Para poder acceder a la liga de registro del Concurso Público puede
          dar click{" "}
          <a
            href="https://concurso-publico-spen.ine.mx/#/"
            target="_blank"
            rel="noreferrer"
          >
            aquí
          </a>
        </p>
        <div className="table-responsive">
          <table className="table table-striped table-hover w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Archivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Convocatoria del Concurso Público 2022</td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/1.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>Anexo Único: Distribución de plazas vacantes</td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/2.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Acuerdo de la Junta General Ejecutiva del Instituto Nacional
                  Electoral por el que se aprueba la Convocatoria del Concurso
                  Público 2022-2023
                </td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/3.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Acuerdo de la Junta General Ejecutiva del Instituto Nacional
                  Electoral por el que se aprueba la declaratoria de plazas
                  vacantes del Servicio Profesional Electoral Nacional
                </td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/4.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 table-responsive">
          <table className="table table-striped table-hover w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">Fechas relevantes y preguntas frecuentes</th>
                <th scope="col">Archivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Folleto informativo</td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/5.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>Infografía</td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/6.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>Preguntas frecuentes</td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/7.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Acuerdo de la Junta General Ejecutiva del Instituto Nacional
                  Electoral por el que se aprueba la declaratoria de plazas
                  vacantes del Servicio Profesional Electoral Nacional
                </td>
                <td>
                  <a
                    href="https://itetlax.org.mx/assets/despen/pdf/4.pdf"
                    className="btn btn-danger"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
