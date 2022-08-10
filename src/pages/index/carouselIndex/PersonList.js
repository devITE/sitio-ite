import React, { Component } from "react";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes.",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook.",
  },
];

const imgCarouselIndex = [
  {
    id: 1,
    url: "banner_afiliado.jpg",
    alt: "AFILIADOS",
  },

  {
    id: 2,
    url: "cineminuto.png",
    alt: "CINEMINUTO",
  },
];

export default class PersonList extends Component {
  render() {
    return (
      <div>
        <div>
          {imgCarouselIndex.map((imgCarouselIndex) => {
            return (
              <h5 key={imgCarouselIndex.id}>
                {imgCarouselIndex.name} - {imgCarouselIndex.description}
              </h5>
            );
          })}
        </div>
        <div>
          {products.map((products) => {
            return (
              <h1 key={products.id}>
                {products.name} - {products.description}
              </h1>
            );
          })}
        </div>
      </div>
    );
  }
}
