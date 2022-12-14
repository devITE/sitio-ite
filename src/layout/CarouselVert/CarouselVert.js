import "./CarouselVert.css";

// const CarouselVet__path = require.context("../../assets");

const CarouselVert = ({ children }) => {
  return (
    <div className="CarouselVert">
      <div className="CarouselVert-content">{children}</div>
    </div>
  );
};

export default CarouselVert;
