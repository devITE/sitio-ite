const CarouselItemIMG = ({ imgUrl, alt, itemActive, link }) => {
  return (
    <div className={"carousel-item " + itemActive}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt={"--" + alt} className="d-block w-100" />
      </a>
    </div>
  );
};

export default CarouselItemIMG;
