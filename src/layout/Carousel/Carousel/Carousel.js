import React from "react";
import PropTypes from "prop-types";

export default function Carousel({ idCarousel, children }) {
  return (
    <div
      id={idCarousel}
      className="carousel slide"
      data-ride="carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">{children}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#" + idCarousel}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + idCarousel}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// Validación de props
Carousel.propTypes = {
  idCarousel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
