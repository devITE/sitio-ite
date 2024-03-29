import React, { useEffect } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Accordion from "../../../layout/Accordion/Accordion";
import AccordionItem from "../../../layout/Accordion/AccordionItem";
import Carousel from "../../../layout/Carousel/Carousel/Carousel";
import CarouselItemIMG from "../../../layout/Carousel/Carousel/CarouselItemIMG";
import { dataGaleria } from "../../../data/dataOIC";

export const GaleriaOIC = () => {
  useEffect(() => {
    document.title = `Galeria OIC`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Órgano Interno de Control - Galeria" />
      <Accordion idAccordion="galeriaOIC">
        {dataGaleria.map((infoAccordion) => (
          <AccordionItem
            key={infoAccordion.id}
            flushID={infoAccordion.flushID}
            titleItem={infoAccordion.titleItem}
            contentItem={infoAccordion.children.map((infoCarousel) => (
              <div className="w-75 mx-auto">
                <Carousel
                  key={infoCarousel.id}
                  idCarousel={infoCarousel.carouselID}
                >
                  {infoCarousel.subChildren.map((itemsCarousel) => (
                    <CarouselItemIMG
                      key={itemsCarousel.id}
                      imgUrl={itemsCarousel.imgUrl}
                      alt={itemsCarousel.alt}
                      itemActive={itemsCarousel.itemActive}
                      url={itemsCarousel.url}
                      linkToo={itemsCarousel.linkToo}
                    />
                  ))}
                </Carousel>
              </div>
            ))}
            idAccordion="galeriaOIC"
          />
        ))}
      </Accordion>
    </>
  );
};

export default GaleriaOIC;
