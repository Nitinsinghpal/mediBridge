import { useState } from "react";
import "./Crousels.css";
// import Assured from '../Images/100%Assured_upscaled.png'

//#region Style
const slideStyles = {
  width: "16%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};
const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

//#endregion

const Crousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "http://localhost:3000/Doctor-With-MicroScope.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/Doctor-With-MicroScope.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/Doctor-With-MicroScope.jpg", title: "italy" },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    debugger;
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    margin: "37px 0px 0px 160px",
  };

  return (
    <div className="container col-6" style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          ❱
        </div>
      </div>
      <div className="row">
      <div className="polygon col-6" style={slideStylesWidthBackground}>
      <span><img /></span>
      </div>
      <div className="col-6 fText">
{/* <span><img src={Assured}/></span> */}
      <div className="">Hello how are you</div>
      </div>
      </div>
      

      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crousels;

// import React from "react";
// import micro from "../Images/Doctor With MicroScope.jpg"
// import './Crousels.css'
// function Crousels() {
//   return (
//     <div
//       id="carouselExampleCaptions"
//       class="carousel slide mt-5 mx-5"
//       data-bs-ride="false"
//     >
//       <div class="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="0"
//           class="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div class="carousel-inner">
//         <div class="carousel-item active">
//           <div className="col-3">
//             <img
//               src={micro}
//               class="polygon"
//               alt="..."
//             />
//           </div>
//           <div class="carousel-caption d-none d-md-block col-9">
//             <h5 className="textColor">First slide label</h5>
//             <p className="textColor">Some representative placeholder content for the first slide.</p>
//           </div>
//         </div>
//         <div class="carousel-item">
//         <div className="col-3">
//             <img
//               src={micro}
//               class="polygon"
//               alt="..."
//             />
//           </div>
//           <div class="carousel-caption d-none d-md-block col-9">
//             <h5 className="textColor">Second slide label</h5>
//             <p className="textColor">Some representative placeholder content for the first slide.</p>
//           </div>
//         </div>
//         <div class="carousel-item">
//         <div className="col-3">
//             <img
//               src={micro}
//               class="polygon"
//               alt="..."
//             />
//           </div>
//           <div class="carousel-caption d-none d-md-block col-9">
//             <h5 className="textColor">Third slide label</h5>
//             <p className="textColor">Some representative placeholder content for the first slide.</p>
//           </div>
//         </div>
//       </div>
//       <button
//         class="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button
//         class="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

// export default Crousels;
