const CarouselItem = ({ slide, alt }) => {
  return (
    <div className="carousel-item">
      <img src={slide} alt={"--" + alt} className="d-block w-100" />
    </div>
  );
};

export default CarouselItem;
