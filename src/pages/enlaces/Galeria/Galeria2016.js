import React, { useEffect } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Accordion from "../../../layout/Accordion/Accordion";
import AccordionItem from "../../../layout/Accordion/AccordionItem";
import ModalIMG from "../../../layout/Modal/ModalIMG";
import { dataGaleria2016 } from "../../../data/dataGaleria";

export const Galeria2016 = () => {
  useEffect(() => {
    document.title = `Galeria 2016`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Galería Fotográfica 2016" />
      <Accordion idAccordion="galeria2016">
        {dataGaleria2016.map((infoAccordion) => (
          <AccordionItem
            key={infoAccordion.id}
            flushID={infoAccordion.flushID}
            titleItem={infoAccordion.titleItem}
            contentItem={
              <Accordion
                idAccordion={infoAccordion.flushID + infoAccordion.id}
                clasName="w-75 mx-auto"
              >
                {infoAccordion.children.map((subInfo) => (
                  <AccordionItem
                    key={subInfo.id}
                    flushID={subInfo.id}
                    titleItem={subInfo.nameActivity}
                    contentItem={
                      <div>
                        <h3 className="text-center">{subInfo.nameActivity}</h3>
                        <div className="Galeria__responsive">
                          {subInfo.subChilden.map((itemGalery) => (
                            <div
                              key={itemGalery.id}
                              className="Galeria__responsive-item"
                            >
                              <a
                                href="/#"
                                rel="noreferrer"
                                data-bs-toggle="modal"
                                data-bs-target={"#" + itemGalery.alt}
                              >
                                <img
                                  src={itemGalery.link}
                                  alt={itemGalery.alt}
                                  className="img-fluid rounded"
                                />
                              </a>
                              <ModalIMG
                                idModal={itemGalery.alt}
                                altIMG={itemGalery.alt}
                                linkIMG={itemGalery.link}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                    idAccordion={infoAccordion.flushID + infoAccordion.id}
                  />
                ))}
              </Accordion>
            }
            idAccordion="galeria2016"
          />
        ))}
      </Accordion>
    </>
  );
};

export default Galeria2016;
