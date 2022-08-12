import React, { Component } from "react";
import { imgCarouselIndex } from "./Data.js";

const Carousel__imgpath = require.context("./img");

export default class CarouselItem extends Component {
  render() {
    return (
      <div>
        {imgCarouselIndex.map((imgCarouselIndex) => {
          return (
            <div key={imgCarouselIndex.id} className="carousel-item">
              <a target="_blank" href={imgCarouselIndex.link} rel="noreferrer">
                <img
                  src={Carousel__imgpath(`./${imgCarouselIndex.url}`)}
                  className="d-block w-100"
                  alt={imgCarouselIndex.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
