import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
     <footer className='g-5 bg-secondary-subtle justify-content-center'>
<div className='text-center'>
all & copy;are reserved {new Date().getFullYear()}
</div>
     </footer>
    )
  }
}

