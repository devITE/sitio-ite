import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import ModalIMG from "../../../layout/ModalIMG";
import { dataGaleria2018 } from "../../../assets/data/dataGaleria";
import "../EnlacesStyle.css";
export default class Galeria2018 extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Galería Fotográfica 2018" />
        <div className="accordion accordion-flush" id="metasMSPEN">
          {dataGaleria2018.map((accordionsItem) => (
            <div key={accordionsItem.id} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-collapse" + accordionsItem.flushID}
                  aria-expanded="false"
                  aria-controls={"flush-collapse" + accordionsItem.flushID}
                >
                  {accordionsItem.titleItem}
                </button>
              </h2>
              <div
                id={"flush-collapse" + accordionsItem.flushID}
                className="accordion-collapse collapse"
                data-bs-parent="#metasMSPEN"
              >
                <div className="accordion-body">
                  {accordionsItem.children.map((infoGaleria) => (
                    <div key={infoGaleria.id}>
                      <h1>{accordionsItem.titleItem}</h1>
                      <h4>{infoGaleria.nameActivity}</h4>
                      <h4>{infoGaleria.dateActivity}</h4>
                      <div className="Galeria__responsive">
                        {infoGaleria.subChilden.map((contentGalery) => (
                          <div
                            key={contentGalery.id}
                            className="Galeria__responsive-item"
                          >
                            <a
                              href="/#"
                              rel="noreferrer"
                              data-bs-toggle="modal"
                              data-bs-target={"#" + contentGalery.alt}
                            >
                              <img
                                src={contentGalery.link}
                                alt={contentGalery.alt}
                                className="img-fluid rounded"
                              />
                            </a>
                            <ModalIMG
                              idModal={contentGalery.alt}
                              altIMG={contentGalery.alt}
                              linkIMG={contentGalery.link}
                            />
                          </div>
                        ))}
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
