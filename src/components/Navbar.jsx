import React from 'react'
import env from '../env.json';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>{env.appName}</span>
      <div className='user'>
        <img src='' alt=''/>
        <span>John</span>
        <button>Sign Out</button>
      </div>
    </div>
  )
}

export default Navbar;