import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <a href='/'>Home</a>
        </li>
        <li className='nav-item'>
          <a href='/about'>About</a>
        </li>
        <li className='nav-item'>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar