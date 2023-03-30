import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";

const Acuerdos2022 = () => {
  useEffect(() => {
    document.title = `Acuerdos 2022`;
  }, []);
    return (
      <>
        <TitlePages title="Acuerdos 2022" subTitle="" />

        <div>
          <div className=" w-100 Grid__folder">
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
            </a>
             </div>
          </div>
        </div>
      </>
    );
  }
  export default Acuerdos2022;
