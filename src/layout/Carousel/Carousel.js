import CarouselItem from "./CarouselItem";

const Carousel = ({ slides }) => {
  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/id/10/900/400"
            className="d-block w-100"
            alt="..."
          />
        </div>
        {slides.map((slides) => (
          <CarouselItem slide={slides.url} key={slides.id} alt={slides.alt} />
        ))}
        {console.log("---", slides)}
      </div>
    </div>
  );
};

export default Carousel;
