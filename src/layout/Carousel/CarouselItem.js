const CarouselItem = ({ slide }) => {
  return (
    <div className="carousel-item">
      <img src={slide} alt="" className="d-block w-100" />
    </div>
  );
};

export default CarouselItem;
