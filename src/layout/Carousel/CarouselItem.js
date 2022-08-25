const CarouselItem = ({ slide, alt, itemActive, link }) => {
  return (
    <div className={"carousel-item " + itemActive}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={slide} alt={"--" + alt} className="d-block w-100" />
      </a>
    </div>
  );
};

export default CarouselItem;
