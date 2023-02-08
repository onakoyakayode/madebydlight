import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../../../Styles/Navbar.css"
import { UilShoppingBag, UilBars, UilTimes } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleStyle = {
    left: showNavbar ? "0" : "-100%",
    transition: showNavbar ? "900ms ease-in-out" : "900ms ease-in-out",
  }

  function handleNav () {
    setShowNavbar(!showNavbar);
  }

  const { amount } = useSelector((store) => store.cart);

  const activePage = window.location.pathname;
  const NavLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)) {
      link.classList.add('active')
    }
  })

  
  return (

    <div>
      <nav>
        <NavLink to='/' className='nav-title'>
              <div className='nav-logo'>
              <img src="./MadeByDlight.jpeg" alt="Dlight" />
              </div>
              <h2>MadeBy'Dlight</h2>
        </NavLink>
        <ul className='nav-items' style={handleStyle}>
          <li className='nav-links'><NavLink to='/main'>Home</NavLink></li>
          <li className='nav-links'><NavLink to='/designer'>Designer</NavLink></li>
          <li className='nav-links'><NavLink to='/shop'>Shop</NavLink></li>
          <li className='nav-links'><NavLink to='/gallery'>Gallery</NavLink></li>
          <li className='nav-links'><NavLink to='/about'>About</NavLink></li>
          <li className='nav-links'><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <div className='cart-icon'>
            <NavLink to='/cartContainer'>
              <UilShoppingBag className="cart-icon-img"/>
              <div className='cart-list'>
                <p className='cart-amount'>{amount}</p>
              </div>
            </NavLink>
        </div> 
        <div onClick={handleNav} className="toggleBtn">
        {showNavbar ? <UilTimes /> : <UilBars /> }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
