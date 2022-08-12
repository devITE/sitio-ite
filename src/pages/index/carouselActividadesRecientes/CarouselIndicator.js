import React, { Component } from "react";
import { imgCarouselIndex } from "./Data.js";

export default class CarouselIndicator extends Component {
  render() {
    return (
      <>
        {imgCarouselIndex.map((imgCarouselIndex) => {
          return (
            <button
              key={imgCarouselIndex.id}
              type="button"
              data-bs-target="#carouselTopIndex"
              data-bs-slide-to={imgCarouselIndex.id}
              aria-label={`Slide ${imgCarouselIndex.id}`}
            ></button>
          );
        })}
      </>
    );
  }
}
