const CarouselItemVideo = ({ itemActive, link, title, id }) => {
  return (
    <div className={"carousel-item " + itemActive}>
      <div className="ratio ratio-16x9">
        <iframe
          id={id}
          title={title}
          src={"https://www.youtube.com/embed/" + link}
        ></iframe>
      </div>
    </div>
  );
};

export default CarouselItemVideo;
