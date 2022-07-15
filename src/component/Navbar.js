import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <a className='appName'>Delicious</a>
        <ul>
            <li>
                <a className='home'>Home</a>
            </li>
            <li>
                <a className='logout'>LogOut</a>
            </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar