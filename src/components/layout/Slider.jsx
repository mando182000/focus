// import { Component } from "react";

// class ABOUT extends Component{
//     btnclick=()=>{
//         alert('hello world');
//     }
//     render(){
//         return<><h1>ALLAH</h1>
//         <button onClick={(this.btnclick)}>click me</button>
//         </>
//     }
// }
// export default ABOUT;
// import React, { Component } from 'react'

// export default class cursol extends Component {
//   render() {
//     return (
//       <div>
//         <div id="carouselExample" className="carousel slide">
//   <div className="carousel-inner">
//     <div className="carousel-item active ">
//       <img src="./images/images.png" className="d-block w-25 " alt="allah" />
//     </div>
  
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
      <>
      <div className='cards'>
      <div className="section1">
      <div className='container pt-5 my-5 text-light text-center'>
      <h1 className=' pe-1 mt-5 '>create an awesome <br/><u>design</u> portfolio</h1>
        
        <p className='pt-5'>focus is a clean and elgentable- bootstrap theme for designeners,<br/>
        architets,photogrpher,and creative people.
        
        </p>
       
        <button type="button" className="btn btn-danger mt-5  p-4 px-5 text-capitalize">Buy Now</button>
        <div className="footer ">
<div className='d-flex p-5 '>
  <div className='p-3'>
        <figure className="figure w-100 ">
  <img src={require('./../../images/focus-word-motion-rays-25702558.webp')} className="figure-img img-fluid rounded " alt="focus"/>
  <figcaption className="figure-caption text-light text-center">Architecture</figcaption>
</figure></div>
<div className='p-3'>
        <figure className="figure w-100 ">
  <img src={require('./../../images/focus-word-motion-rays-25702558.webp')} className="figure-img img-fluid rounded " alt="focus"/>
  <figcaption className="figure-caption text-light text-center">interior DESIGN</figcaption>
</figure></div>
<div>
  

</div>


</div>
<div className='d-flex p-5'>
  <div className='p-3'>
        <figure className="figure w-100 ">
  <img src={require('./../../images/focus-word-motion-rays-25702558.webp')} className="figure-img img-fluid rounded " alt="focus"/>
  <figcaption className="figure-caption text-light text-center">photography</figcaption>
</figure></div>
<div className='p-3'>
        <figure className="figure w-100">
  <img src={require('./../../images/focus-word-motion-rays-25702558.webp')} className="figure-img img-fluid rounded " alt="focus"/>
  <figcaption className="figure-caption text-light text-center "><b>web Design</b></figcaption>
</figure></div>
<div>

</div>
</div>

</div>
<div className='text-center'>
<button type="button" class="btn btn-outline-light p-3 text-center center  m-5 p-3 px-5 text-capitalize ">view all pages</button></div>

      </div>
      </div>
      </div>
   
      </>
      
    )
  }
}