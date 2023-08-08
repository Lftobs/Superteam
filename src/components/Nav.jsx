import React from 'react'
import '../assets/styles/components/Nav.css'
import { useNavigate } from 'react-router-dom'


const Nav = () => {
  const navigate = useNavigate()

  return (
    <header>
      <nav>
        <div>
          Superteam security
        </div>
        <ul>
          <li onClick={() => navigate('/')}> Home </li>
          <li> About <span><figure></figure></span> </li>
          <li onClick={() => navigate('case-studies/')}> Case study </li>
          <li onClick={() => navigate('tutorials/')}> Tutorials </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav