import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

const Acuerdos = () => {
  useEffect(() => {
    document.title = `ITE - Acuerdos`;
  }, []);
    return(
      <>
        <TitlePages title="Acuerdos" subTitle="" />
        
          <div>
          <div className=" w-100 Grid__folder">
            <div>
              <Link to="/Distritacion2015">
                <img
                  src="https://itetlax.org.mx/assets/img/imgDemA/13.png"
                  className="img-fluid"
                  alt="Distritación 2015"
                />
              </Link>
              <p className="text-strong">Distritación 2015</p>
            </div>
            <div>
              <Link to="/Distritacion2022">
                <img
                  src="https://itetlax.org.mx/assets/img/imgDemA/14.png"
                  className="img-fluid"
                  alt="Distritación 2022"
                />
              </Link>
              <p className="text-strong">Distritación 2022</p>
            </div>
          </div>

          {/* <a
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
          </div>
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
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://itetlax.org.mx/assets/img/imgDemA/7.png"
                className="img-fluid"
                alt="INE CG612 2022"
              />
            </a>
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022a1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://itetlax.org.mx/assets/img/imgDemA/8.png"
                className="img-fluid"
                alt="INE CG612 2022 ANEXO 1"
              />
            </a>
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022a2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://itetlax.org.mx/assets/img/imgDemA/9.png"
                className="img-fluid"
                alt="INE CG612 2022 ANEXO 2"
              />
            </a>
          </div>
          <div>
            <a
              href="https://itetlax.org.mx/assets/pdf/demarcaciones/acuerdos/INE-CG612-2022a3b.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://itetlax.org.mx/assets/img/imgDemA/10.png"
                className="img-fluid"
                alt="INE CG612 2022 ANEXO 3B"
              />
            </a> */}
        </div>
      </>
    );
  }
  export default Acuerdos;
