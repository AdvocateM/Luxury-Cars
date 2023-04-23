import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as Offer } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as Explore } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as Person } from '../assets/svg/personOutlineIcon.svg'

function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  const path = (r) => {
    if (r == location.pathname) {
      return true
    }
  }
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItems' onClick={() => navigate('/')}><Explore fill={path('/') ? '#2c2c2c' : "#8f8f8f"} with='36px' height='36px' /><p className={path('/') ? 'navbarListItemNameActive' : "navbarListItemName"}>Explore</p></li>
          <li className='navbarListItems' onClick={() => navigate('/offers')}><Offer fill={path('/offers') ? '#2c2c2c' : "#8f8f8f"} with='36px' height='36px' /><p className={path('/offers') ? 'navbarListItemNameActive' : "navbarListItemName"}>Offer</p></li>
          <li className='navbarListItems' onClick={() => navigate('/profile')}><Person fill={path('/profile') ? '#2c2c2c' : "#8f8f8f"} with='36px' height='36px' /><p className={path('/profile') ? 'navbarListItemNameActive' : "navbarListItemName"}>Profile</p></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Nav
