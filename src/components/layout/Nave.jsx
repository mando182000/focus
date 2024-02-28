import React, { Component } from 'react'

export default class Nave extends Component {
  render() {
    return (
      <>
      
      <div>
        <nav class="navbar navbar-expand-lg bg-black text-light  fixed-top  navbar navbar-outline-light  border " >
  <div className="container">
  <i class="fa-brands fa-pinterest "></i>
    <a className="navbar-brand font  text-light pe-5" href="#">focus</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent list style ">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-3 ">
        <li className="nav-item">
          <a className="pe-5 nav-link active text-light " aria-current= "page" href="#">pages</a>
        </li>
        <li className="nav-item">
          <a className="pe-5 nav-link active text-light" href="#">style</a>
        </li>
        <li className="nav-item">
          <a className="pe-5 nav-link text-light" href="#">Docs</a>
          
        </li>
       
        
      </ul>
     <hr />
    </div>
    
  </div>
  
</nav>
<hr />
      </div>
      
      
      </>   
    )
  }
}

