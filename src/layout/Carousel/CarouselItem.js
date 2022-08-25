const CarouselItem = ({ slide, alt, itemActive }) => {
  return (
    <div className={"carousel-item " + itemActive}>
      <img src={slide} alt={"--" + alt} className="d-block w-100" />
    </div>
  );
};

export default CarouselItem;
