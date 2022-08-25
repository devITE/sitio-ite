import CarouselItem from "./CarouselItem";
//import CarouselIndicator from "./CarouselIndicator";

const Carousel = ({ slides, slidesID }) => {
  return (
    <>
      {console.log("SLIDES", slides, "\n", "SLIDEID", slidesID)}
      <div id={slidesID} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((slides) => (
            // <CarouselIndicator key={slides.id} />
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
