const CarouselVertItem = ({ alt, link }) => {
  return (
    <div className="CarouselVert-tag m-1">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={link}
          alt={"--" + alt}
          className="img-fluid rounded-3 shadow"
        />
      </a>
    </div>
  );
};

export default CarouselVertItem;
