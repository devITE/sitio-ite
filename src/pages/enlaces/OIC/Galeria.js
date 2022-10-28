import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Carousel from "../../../layout/Carousel/Carousel";
// import Accordion from '../../../layout/Accordion'
import { dataGaleria } from "../../../assets/data/dataOIC";
export default class Galeria extends Component {
  render() {
    return (
      <div className="mb-5">
        <NavbarEnlaces />
        <div className="Enlances__title mb-3">
          Órgano Interno de Control - Galeria
        </div>
        <div className="accordion accordion-flush" id="GaleriaAccordion">
          {dataGaleria.map((galeriaItems) => (
            <div key={galeriaItems.id} className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-" + galeriaItems.nameItem}
                  aria-expanded="false"
                  aria-controls={"flush-" + galeriaItems.nameItem}
                >
                  {galeriaItems.titleItem}
                </button>
              </h2>
              <div
                id={"flush-" + galeriaItems.nameItem}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {galeriaItems.children.map((infCarousel) =>
                    //   <h1 key={infCarousel.id}>{infCarousel.carouselID}</h1>
                    // <span key={infCarousel.id}></span>
<>{console.log(infCarousel.id)}</>)}
                    {infCarousel.subChildren.map((imgGaleria) => (
                      <h1 key={imgGaleria.id}>
                        {infCarousel.carouselID}, {imgGaleria.link}
                      </h1>

                      //   <Carousel
                      //     slides={imgGaleria}
                      //     slidesID={infCarousel.carouselID}
                      //   />
                    )}
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
