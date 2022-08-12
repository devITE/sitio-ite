import React, { Component } from "react";
import carouselITE from "./img/carouselITE.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicator";
// import "./CarouselIndex.css";

export default class carouselAgenda extends Component {
  render() {
    return (
      <div
        id="carouselAgenda"
        className="carousel slide mb-3 w"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselAgenda"
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
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselAgenda"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-dark" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselAgenda"
          data-bs-slide="next"
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} className="text-dark" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
