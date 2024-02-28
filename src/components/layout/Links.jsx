import React, { Component } from 'react'

export default class Links extends Component {
  render() {
    return (
        <>
      <div className='bg-secondary-subtle py-5'>
       <div className='container'>
       <div className="container text-center">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col "><h3>About</h3>
<p><a className="link-opacity-25-hover text-black text-decoration-none " href="#">Team</a></p>
<p><a className="link-opacity-50-hover text-black text-decoration-none" href="#">career</a></p>
<p><a className="link-opacity-75-hover text-black text-decoration-none" href="#">blog</a></p>
<p><a className="link-opacity-100-hover text-black text-decoration-none" href="#">privacy policy</a></p></div>
    <div className="col">
    <h3>services</h3>
    <p><a className="link-opacity-25-hover text-black text-decoration-none" href="#">Branding</a></p>
<p><a className="link-opacity-50-hover text-black text-decoration-none" href="#">Design</a></p>
<p><a className="link-opacity-75-hover text-black text-decoration-none" href="#">Photography</a></p>
<p><a className="link-opacity-100-hover text-black text-decoration-none" href="#">UX/UI</a></p>
    </div>
    <div className="col">
    <h3>Social</h3>
    <p><a className="link-opacity-25-hover text-black text-decoration-none" href="#">Twitter</a></p>
<p><a className="link-opacity-50-hover text-black text-decoration-none" href="#">Instagram</a></p>
<p><a className="link-opacity-75-hover text-black text-decoration-none" href="#">Dribbble</a></p>
<p><a className="link-opacity-100-hover text-black text-decoration-none" href="#">Facebook</a></p>
    </div>
    <div class="col">
<h3>Company</h3>
<p>Focus is a portfolio theme based on Bootstrap 5 and created by


<span>
<a className="bg-black-hover text-black ms-2 p-1   " href="#"><strong>webvy.</strong></a></span>

 </p>
    </div>
  </div>
</div>
       </div> 
      </div>
      </>
    )
  }
}
