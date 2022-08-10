import React, { Component } from "react";
import carouselITE from "./img/carouselITE.jpg";

let Carousel__img = ["banner_afiliado.jpg", "cineminuto.png"];

const Carousel__imgpath = require.context("./img");

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      url: "",
    };
  }
  render() {
    return (
      <div>
        <div
          id="carouselTopIndex"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carouselITE} className="d-block w-100" alt="" />
            </div>
            {Carousel__img.map((url, index) => {
              return (
                <div key={index} className="carousel-item">
                  <img
                    src={Carousel__imgpath(`./${url}`)}
                    className="d-block w-100"
                    alt={url}
                  />
                </div>
              );
            })}
            {/* ------------------------- */}
            {/* {Carousel__img.map((url, index) => {
              return (
                <div key={index} className="carousel-item active">
                  <img
                    src={Carousel__imgpath(`./${url}`)}
                    className="d-block w-100"
                    alt=""
                  />
                </div>
              );
            })} */}
            {/* ------------------------- */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselTopIndex"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselTopIndex"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
