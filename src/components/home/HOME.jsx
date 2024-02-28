// import { Component } from "react";

// class Home extends Component{
//     username='mohamed';
//     product='pen ';
//     counter = 2
//     btnclick=()=>{
//         // alert('hello world');
//         // console.log(this.counter);
//        let total= this.counter +1;
//        this.counter = total;
// this.setState({counter:total})
//     }
//     render(){
//         return<><h1>ALLAH</h1>
//         <p>welcome <span>{this.username}</span></p>
//         <p>your stock of {this.product }
//            is<strong> {this. counter}</strong></p>
//         <button onClick={(this.btnclick)}>product counter increase </button>
//         </>
//     }
// }
// export default Home;


import React, { Component } from 'react'

export default class HOME extends Component {
  render() {
    return (
      <>
      <div className='cards'>

        <div className='container '>
          <h2 className='text-center'>Choose the license that suits your needs
</h2>
<div className='d-flex justify-content-center'>
<div className='bg-secondary-subtle text-center w-25 ms-5 m-3 p-5 '><strong><h5>Standard<br></br>$49<br></br>Single Site</h5>
<hr></hr><p>Use on one site<br></br>
Use for personal or a client<br></br>
Technical support</p></strong></div>
<div className='bg-danger-subtle
 text-center w-25 m-3 p-5'><strong><h5>Multisite <br></br>$149<br></br>Unlimited Sites</h5><hr></hr>
 <p>Use on unlimited sites
Use for personal or a client
Technical support</p></strong></div>
<div className='bg-black text-center w-25 m-3 text-light p-5'><strong><h5>Extended<br></br>$490<br></br>For paying users</h5>
<hr></hr><p>Use on one site
Paying users allowed
Technical support</p></strong></div>

</div>
        </div>
        </div>
      </>
    )
  }
}

