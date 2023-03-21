import { Link } from "react-router-dom";

const CarouselItemIMG = ({ imgUrl, alt, itemActive, url, linkToo }) => {
  return (
    <div className={"carousel-item " + itemActive}>
      {(url === "") & (linkToo === "") ? (
        <img className="img-fluid" src={imgUrl} alt={alt} />
      ) : (url === "") & (linkToo !== "") ? (
        <Link to={linkToo}>
          <img className="img-fluid" src={imgUrl} alt={alt} />
        </Link>
      ) : (
        <a href={url} target="_blank" rel="noreferrer">
          <img className="img-fluid" src={imgUrl} alt={alt} />
        </a>
      )}
    </div>
  );
};

export default CarouselItemIMG;
