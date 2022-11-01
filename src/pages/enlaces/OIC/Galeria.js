import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Carousel from "../../../layout/Carousel/Carousel";
import { dataGaleria } from "../../../assets/data/dataOIC";

export default class Galeria extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Órgano Interno de Control - Galeria" />
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
                  {galeriaItems.children.map((infCarousel) => (
                    <div key={infCarousel.id}>
                      <div className="w-50 mx-auto">
                        <Carousel
                          slidesID={infCarousel.carouselID}
                          slides={infCarousel.subChildren}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
