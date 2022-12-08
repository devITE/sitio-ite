import React, { Component } from "react";
import imagenes from "./img/acuerdos.png";
import imagenes1 from "./img/ine2015.png";
import imagenes2 from "./img/anexo.png";
import imagenes3 from "./img/acuerdo130815.png";
import imagenes4 from "./img/anexo2.png";
import imagenes5 from "./img/anexo3.png";
import imagenes6 from "./img/ine8242015.png";
import imagenes7 from "./img/ine6122022.png";
import imagenes8 from "./img/ine612a1.png";
import imagenes9 from "./img/ine612a2.png";
import imagenes10 from "./img/ine612a3b.png";

const pdf_estructura = require.context(
  "../../assets/pdf/demarcaciones/acuerdos/"
);

export default class Acuerdos extends Component {
  render() {
    return (
      <div>
        <img src={imagenes} className="img-fluid w-100" alt="Acuerdos" />
        <hr className="borde" />
        <div className="w-100 acuerdos">
          <div className="">
            <a
              href={pdf_estructura(`./${"INE-CG335-2015.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes1}
                className="img-fluid Demarcaciones__item"
                alt="Acuerdo INE 2015"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"anexo.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes2}
                className="img-fluid Demarcaciones__item"
                alt="Anexo"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"ACUERDO_1_CNV_EXT_130815-1.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes3}
                className="img-fluid Demarcaciones__item"
                alt="ACUERDO_1_CNV_EXT_130815-1"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"anexo2.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes4}
                className="img-fluid Demarcaciones__item"
                alt="Anexo2"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"anexo3.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes5}
                className="img-fluid Demarcaciones__item"
                alt="Anexo 3"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"INE-CG824-2015-1.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes6}
                className="img-fluid Demarcaciones__item"
                alt="INE CG824 2015"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"INE-CG612-2022.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes7}
                className="img-fluid Demarcaciones__item"
                alt="INE CG612 2022"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"INE-CG612-2022a1.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes8}
                className="img-fluid Demarcaciones__item"
                alt="INE CG612 2022 ANEXO 1"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"INE-CG612-2022a2.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes9}
                className="img-fluid Demarcaciones__item"
                alt="INE CG612 2022 ANEXO 2"
              />
            </a>
          </div>
          <div className="">
            <a
              href={pdf_estructura(`./${"INE-CG612-2022a3b.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagenes10}
                className="img-fluid Demarcaciones__item"
                alt="INE CG612 2022 ANEXO 3B"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
