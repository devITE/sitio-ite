import React, { useEffect } from "react";
// import ListBadge from "../../layout/ListBadge";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import Accordion from "../../layout/Accordion/Accordion";
// import AccordionItem from "../../layout/Accordion/AccordionItem";
// import { dataMSPEN } from "../../data/dataMSPEN";

export const PersonasDiscapacidad = () => {
  useEffect(() => {
    document.title = `Personas con Discapacidad`;
  }, []);
  return (
    <>
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
        {/* {dataMSPEN.map((infoAccordion) => (
          <AccordionItem
            key={infoAccordion.id}
            flushID={infoAccordion.flushID}
            titleItem={infoAccordion.titleItem}
            contentItem={
              <ListBadge
                ifNumbered={""}
                listsBadgeItem={infoAccordion.children}
              />
            }
            idAccordion="PersonasDiscapacidad"
          />
        ))} */}
      </Accordion>
    </>
  );
};

export default PersonasDiscapacidad;
