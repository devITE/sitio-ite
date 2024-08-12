import React, { useEffect } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import Accordion from "../../layout/Accordion/Accordion";
import Breadcrumbs from "../../layout/Breadcrumbs";

export const PersonasDiscapacidad = () => {
  useEffect(() => {
    document.title = `Personas con Discapacidad`;
  }, []);
  return (
    <>
      <Breadcrumbs
        path={[{ label: "Enlaces" }, { label: "Personas con Discapacidad" }]}
      />
      <NavbarEnlaces title="Personas con Discapacidad" />
      <Accordion idAccordion="PersonasDiscapacidad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="Home__video-embed ratio ratio-16x9 w-100">
                <audio controls>
                  <source
                    src="https://itetlax.org.mx/assets/video/ine/24.mp3"
                    type="audio/mpeg"
                  />
                  Tu navegador no soporta la reproducción de audio.
                </audio>
              </div>
              <h5 className="mt-3 text-center">Discapacidad Visual</h5>
            </div>
            <div className="col-md-4">
              <div className="Home__video-embed ratio ratio-16x9 w-100">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/tInMt-0VNJM"
                  title="Convocatoria a Consejos Distritales LSM"
                  allowFullScreen
                ></iframe>
              </div>
              <h5 className="mt-3 text-center">
                Convocatoria a Consejos Distritales LSM{" "}
              </h5>
            </div>
          </div>
        </div>
      </Accordion>
    </>
  );
};

export default PersonasDiscapacidad;
