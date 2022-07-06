import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
     <div className='navbar'>
    <nav className='navlink'>
        <div className='main-logo'>
        {/* <img src={logo} alt='logo' className='logo' /> */}
        <Link to="/" className='link'>Home</Link>
        <Link to="/event" className='link'>Event</Link>
        </div>
        <form className='navform'>
          <input  type="search" placeholder="Search Event"
             onChange={(e) => console.log(e.target.value)} 
          />
          <input  type="submit" value="recherche"/>
        </form>
    </nav>

    </div>
        
    </div>
  )
}
