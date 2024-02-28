
import React, { Component } from 'react'

export default class Cursol extends Component {
  render() {
    return (
<>
<div className='container  g-5 '>
<h2 className='text-center'>what the people are saying...</h2>
<div className='d-flex'>
<div>
  <img src={require('./../../images/p1.webp')} className="border border-1 rounded-circle  m-5" alt="focus"/>
  <div className='text-center'>
<h5 className='M-5'>tim shoch <br></br>DESIGNER</h5>
<p>Focus theme is great. It really saves<br></br> me time and effort. Thank you so<br></br> much for your help</p></div>
</div>

<div>
<img src={require('./../../images/p2.webp')} className="border border-1 rounded-circle m-5 " alt="focus"/>
<div className='text-center'>
<h5 className='M-5'>mark Mathews <br></br>photographer</h5>
<p>Focus is great. I will refer everyone I<br></br> know. This theme is worth much more<br></br> than I paid. I'm loving it</p></div>
</div>
<div>
<img src={require('./../../images/p3.jpg')} className=" border-1 rounded-circle m-4 " alt="focus"/>
<div className='text-center'>
<h5 className='M-5'>Malan Alankara<br></br>ARCHITECT</h5>
<p>Not able to tell you how happy I am<br></br> with Focus. It's exactly what I've been<br></br> looking for</p></div>
</div>
</div>
</div>


</>
      
    )
  }
}


