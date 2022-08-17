import React, { Component } from "react";
import carouselITE from "./img/carouselITE.jpg";
import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicator";
export default class CarouselIndex extends Component {
  render() {
    return (
      <div
        id="carouselTopIndex"
        className="carouselTopIndex__size carousel slide mb-3 w"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselTopIndex"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <CarouselIndicator></CarouselIndicator>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselITE} className="d-block w-100" alt="" />
          </div>
          <CarouselItem></CarouselItem>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTopIndex"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselTopIndex"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
