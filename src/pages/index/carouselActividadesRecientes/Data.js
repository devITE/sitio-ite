const Carousel__pdfpath = require.context("../../../assets/pdf");
// const Carousel__wordpath = require.context("../../../assets/word");

export const imgCarouselIndex = [
  {
    id: 1,
    url: "carouselITE.jpg",
    alt: "Agenda de Asambleas",
    link: Carousel__pdfpath(`./${"1.pdf"}`),
  },
];
