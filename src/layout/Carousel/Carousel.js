// import React from "react";
// import "./Carousel.css";
// export default function CarouselItem() {
//   const slides = [
//     "https://picsum.photos/id/1033/900/400",
//     "https://picsum.photos/id/1032/900/400",
//     "https://picsum.photos/id/1037/900/400",
//     "https://picsum.photos/id/1035/900/400",
//     "https://picsum.photos/id/1036/900/400",
//   ];

//   return (
//     <div className="containerr">
//       <div className="carousell">
//         <div className="carousell-inner">
//           {slides.map((slide, index) => (
//             <div className="carousell-item" key={index}>
//               <img src={slide} alt="" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import CarouselItem from "./CarouselItem";

const Carousel = ({ slides }) => {
  return (
    <div className="carousell">
      <div className="carousell-inner">
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
