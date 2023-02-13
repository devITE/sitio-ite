import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

export default class Acuerdos extends Component {
  render() {
    return (
      <>
        <TitlePages title="Acuerdos 2015" subTitle="" />

        <div>
          <div className=" w-100 Grid__folder">
            <a
              href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG335-2015.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://itetlax.org.mx/assets/img/imgDemA/1.png"
                className="img-fluid"
                alt="Acuerdo INE 2015"
              />
            </a>
            <div>
              <a
                href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/anexo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://itetlax.org.mx/assets/img/imgDemA/2.png"
                  className="img-fluid"
                  alt="Anexo"
                />
              </a>
            </div>
            <div>
              <a
                href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/ACUERDO_1_CNV_EXT_130815-1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://itetlax.org.mx/assets/img/imgDemA/3.png"
                  className="img-fluid"
                  alt="ACUERDO_1_CNV_EXT_130815-1"
                />
              </a>
            </div>
            <div>
              <a
                href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/anexo2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://itetlax.org.mx/assets/img/imgDemA/4.png"
                  className="img-fluid"
                  alt="Anexo2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/anexo3.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://itetlax.org.mx/assets/img/imgDemA/5.png"
                  className="img-fluid"
                  alt="Anexo 3"
                />
              </a>
            </div>
            <div>
              <a
                href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG824-2015-1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://itetlax.org.mx/assets/img/imgDemA/6.png"
                  className="img-fluid"
                  alt="INE CG824 2015"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
