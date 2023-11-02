import React, { useState } from 'react'
import '../assets/styles/components/Nav.css'
import { useLocation, useNavigate, useMatch } from 'react-router-dom'
import { scrollToSection } from '../assets/Helper'



const Nav = ({ isActive, handleActive}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isCase = useMatch('/case-studies')
  const isTutorial = useMatch('/tutorials')
  
  return (
    <header>
      <nav>
        <div>
          Superteam security
        </div>
        <ul>
          <li onClick={() => { navigate('/'), handleActive(location.pathname)}} className={location.pathname=='/' ? "active": ""}> Home </li>
          <li onClick={() => navigate('/about')} className={location.pathname=='/about'? 'active': ''}>
            About 
            <span>
              <figure>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke={location.pathname==='/about' ? 'var(--l-bg)': 'var(--grey)' } stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </figure>
            </span> </li>
          <li onClick={() => {navigate('case-studies/'), handleActive(location.pathname)}} className={isCase ? "active": ""}> Case study </li>
          <li onClick={() => {navigate('tutorials/'), handleActive(location.pathname)}} className={isTutorial ? "active": ""}> Tutorials </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav