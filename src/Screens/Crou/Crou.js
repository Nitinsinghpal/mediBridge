import React from 'react'
import './Crou.css'
import assuredImg from '../../Images/Assured.png'
import doc from '../../Images/Doctor-With-MicroScope.jpg'
function Crou() {
  var _counter = 0;

  const img1 = `${0 * 100}%`;
  const img2 = `${1 * 100}%`;
  const img3 = `${2 * 100}%`;
  const img4 = `${3 * 100}%`;
  var imgLeft = [img1,img2,img3,img4]

  let img1trans = `${_counter * 100}%`;
  let img2trans = `${_counter * 100}%`;
  let img3trans = `${_counter * 100}%`;
  let img4trans = `${_counter * 100}%`;


      const slides = [
        {img:<img src='https://picsum.photos/id/236/300/500' class='slide polygon' id='imgst1' />,assuredUrl: assuredImg},
        {img:<img src='https://picsum.photos/id/237/300/500' class='slide polygon' id='imgst2' />,assuredUrl: assuredImg},
        {img:<img src='https://picsum.photos/id/238/300/500' class='slide polygon' id='imgst3'  />,assuredUrl: assuredImg},
{img:<img src='https://picsum.photos/id/239/300/500' class='slide polygon'   id='imgst4'  />,assuredUrl: assuredImg}
  ];

  

   const goNext = () =>{
       _counter++;
       if (_counter<4) {
         slideImage()
       }else{
        _counter=3;
       }
   }
   
   const goPrev = () =>{
       _counter--;
       if (_counter>=0) {
         slideImage()
       }else{
        _counter=0
       }
   }
    const slideImage = () =>{

        console.log(slides)
        var el =document.getElementsByClassName('crousel')
       slides.map((slide,index) =>{
        if (index == 0) {
          debugger

          el[index].style.transform = `translateX(-${_counter * 100}%)`
        }else if (index == 1) {
          el[index].style.transform = `translateX(-${_counter * 100}%)`
          
        }else if (index == 2) {
          el[index].style.transform = `translateX(-${_counter * 100}%)`
          
        }else if (index == 3) {
          el[index].style.transform = `translateX(-${_counter * 100}%)`
          
        }
       })
    }
    
  return (
    <>
    <main>
{slides.map((d,i) => (
   <div className="crousel" style={{left:imgLeft[i]}}>
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
 
))
}
</main>

<div class="nav">
    <button onClick={goPrev}>Prev</button>
    <button onClick={goNext}>Next</button>

</div>
</>
  )
}

export default Crou














// import React from 'react'
// import './Crou.css'
// function Crou() {

//       const slides = [
//     { url:"https://picsum.photos/id/236/1000/500", title: "beach" },
//     { url:"https://picsum.photos/id/236/1000/500", title: "boat" },
//     { url:"https://picsum.photos/id/236/1000/500", title: "forest" },
//     { url:"https://picsum.photos/id/236/1000/500", title: "city" },
//     { url:"https://picsum.photos/id/236/1000/500", title: "italy" },
//   ];

//     //const slides = document.querySelectorAll('.slide')
//     var counter = 0;
//    console.log(slides)
//     slides.forEach((slide,index)=>{
//         debugger
//    slide.style.left = `${index * 100}%`;
//     })
   
//    const goNext = () =>{
//        counter++;
//        slideImage()
//    }
   
//    const goPrev = () =>{
//     console.log(slides)
//        counter--;
//        slideImage()
//    }
//     const slideImage = () =>{
//         debugger;
//         console.log(slides)
//        slides.map((slide) =>{
//    slide.style.transform = `translateX(-${counter * 100}%)`
//        })
//     }
//   return (
//     <>
//     <main>
// {slides.map((d) =>{
//     <img src={d.url} class="slide" alt="" srcset="" />

// })}
//     {/* <img src="https://picsum.photos/id/236/1000/500" class="slide" alt="" srcset="" />
//     <img src="https://picsum.photos/id/237/1000/500" class="slide" alt="" srcset="" />
//     <img src="https://picsum.photos/id/238/1000/500" class="slide" alt="" srcset="" />
//     <img src="https://picsum.photos/id/239/1000/500" class="slide" alt="" srcset="" /> */}
//     </main>

// <div class="nav">
//     <button onClick={goPrev}>Prev</button>
//     <button onClick={goNext}>Next</button>

// </div>
// </>
//   )
// }

// export default Crou