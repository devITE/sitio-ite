import CarouselItem from "./CarouselItem";

const Carousel = ({ slides, slidesID }) => {
  return (
    <>
      <div
        id={slidesID}
        className="carousel slide"
        data-ride="carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((slides) => (
            <button
              key={slides.id}
              type="button"
              data-bs-target={"#" + slidesID}
              data-bs-slide-to={slides.id}
              className={slides.buttonActive}
              aria-current={slides.ariaCurrent}
              aria-label={"Slide " + slides.id}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slides) => (
            <CarouselItem
              slide={slides.url}
              key={slides.id}
              alt={slides.alt}
              itemActive={slides.itemActive}
              link={slides.link}
            />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#" + slidesID}
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
          data-bs-target={"#" + slidesID}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
