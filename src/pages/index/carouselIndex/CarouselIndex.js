import React, { Component } from "react";
import carouselITE from "./img/carouselITE.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import DataCarouselIndex from "./DataCarouselIndex";

export default class CarouselIndex extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselTopIndex"
          className="carousel slide mb-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carouselITE} className="d-block w-100" alt="" />
            </div>
            <DataCarouselIndex></DataCarouselIndex>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselTopIndex"
            data-bs-slide="prev"
          >
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              size="3x"
              className="text-dark"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselTopIndex"
            data-bs-slide="next"
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              size="3x"
              className="text-dark"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
