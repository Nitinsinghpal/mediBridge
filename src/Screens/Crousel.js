import React from "react";
import "./Crousel.css";
import doc from "../Images/Doctor-With-MicroScope.jpg";
import assuredImg from '../Images/Assured.png'
function Crousel() {
  return (
    <div className="crousel">
      <div className="left-slide">❰</div>
      <div className="crousel-main">
        <div className="crousel-image">
          <img className="polygon" src={doc} />
        </div>
        <div className="crousel-text">
          <img src={assuredImg}/>
         <p className="crousel-para"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          culpa a obcaecati magnam tenetur voluptatibus qui quo fuga itaque
          veniam, ex aliquid saepe omnis recusandae quod explicabo architecto
          magni molestias! Dolore, quia aspernatur quod commodi facilis ab rem
          unde expedita exercitationem at omnis architecto earum distinctio
          eaque praesentium vitae pariatur obcaecati? Debitis, excepturi!
          Sapiente, dolor quo praesentium modi porro consequuntur?
          </p>
          <div className="step-images">
            <div className="step1">
              step1
              <p className="s-Q1">Quality Check</p>
              </div>
            <div className="step2">
              step2
              <p className="s-Q1">Quality Check</p>
              </div>
            <div className="step3">
              step3
            <p className="s-Q1">Quality Check</p>
            </div>
            <div className="step4">
              step4
            <p className="s-Q1">Quality Check</p>

              </div>

{/* <img src={}/>
<img src={}/>
<img src={}/>
<img src={}/> */}

          </div>
        </div>
      </div>
      <div className="right-slide">❱</div>
    </div>
  );
}

export default Crousel;

// import React, { useState } from "react";
// import "./Crousel.css";
// import doc from "../Images/Doctor-With-MicroScope.jpg";
// import assuredImg from "../Images/Assured.png";
// function Crousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     { url:doc, assuredUrl: assuredImg, title: "beach" },
//     { url:doc, assuredUrl: assuredImg, title: "boat" },
//     { url:doc, assuredUrl: assuredImg, title: "forest" },
//     { url:doc, assuredUrl: assuredImg, title: "city" },
//     { url:doc, assuredUrl: assuredImg, title: "italy" },
//   ];

//   // const slideStyles = {
//   //   width: "16%",
//   //   height: "100%",
//   //   backgroundSize: "cover",
//   //   backgroundPosition: "center",
//   // };

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (slideIndex) => {
//     debugger;
//     setCurrentIndex(slideIndex);
//   };
//   // const slideStylesWidthBackground = {
//   //   ...slideStyles,
//   //   backgroundImage: `url(${slides[currentIndex].url})`,
//   //   margin: "37px 0px 0px 160px",
//   // };

//   return (
// <>
//      {slides.map((d) =>{
//       debugger
//        <div className="crousel">
//       <div className="left-slide">❰</div>
//       <div className="crousel-main">
//         <div className="crousel-image">
//           <img className="polygon" src={doc} />
//         </div>
//         <div className="crousel-text">
//           <img src={assuredImg}/>
//          <p className="crousel-para"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//           culpa a obcaecati magnam tenetur voluptatibus qui quo fuga itaque
//           veniam, ex aliquid saepe omnis recusandae quod explicabo architecto
//           magni molestias! Dolore, quia aspernatur quod commodi facilis ab rem
//           unde expedita exercitationem at omnis architecto earum distinctio
//           eaque praesentium vitae pariatur obcaecati? Debitis, excepturi!
//           Sapiente, dolor quo praesentium modi porro consequuntur?
//           </p>
//           <div className="step-images">
//             <div className="step1">
//               step1
//               <p className="s-Q1">Quality Check</p>
//               </div>
//             <div className="step2">
//               step2
//               <p className="s-Q1">Quality Check</p>
//               </div>
//             <div className="step3">
//               step3
//             <p className="s-Q1">Quality Check</p>
//             </div>
//             <div className="step4">
//               step4
//             <p className="s-Q1">Quality Check</p>

//               </div>

// {/* <img src={}/>
// <img src={}/>
// <img src={}/>
// <img src={}/> */}

//           </div>
//         </div>
//       </div>
//       <div className="right-slide">❱</div>
//     </div>

//      })}
//      </>
//   );
// }

// export default Crousel;
