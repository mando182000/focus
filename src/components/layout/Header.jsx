import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <>
      <div className='bg-black'>
      <div className='container text-center my-5  py-5 bg-black text-light'>
        <h1  className='py-5'>frequently asked question</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <h2> <strong>Do i need to know to code to use this theme ? </strong></h2>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show bg-black text-light" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
    <strong>Yes, you should have some familiarity with HTML and CSS. And to use the development tools, you need basic knowledge of the terminal/command line</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item bg-black text-light">
    <h2 className="accordion-header  ">
      <button className="accordion-button collapsed bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h2> <strong>can i use this theme for my clients? </strong></h2>

      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse bg-black" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes, the Bootstrap Themes license allows you to use the product for personal or for a client.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-black text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <h2> <strong>How do i get help with this theme ? </strong></h2>

      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body bg-black text-light">
      <strong>Support for the theme is given for 6 months after you purchase the theme and is specific to questions around functionality, bugs, and basic implementation.</strong>    </div>
    </div>
  </div>
</div>

      </div>
      </div>
      </>
    )
  }
}


