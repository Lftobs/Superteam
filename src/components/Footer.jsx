import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'



export const Footer = ({isActive, handleActive}) => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)

  return (
    <footer>
        <div className='top'>
          <h3>Superteam Security</h3>
          <p>Protecting your Solana assets <br/> with expert security assessments <br/> and vulnerability remediation</p>
          <ul>
            <li onClick={() => { navigate('/'), handleActive(location.pathname)}} className={location.pathname=='/' ? "active": ""}> Home </li>
            <li onClick={() => navigate('/about')} className={location.pathname=='/about'? 'active': ''}> About </li>
            <li onClick={() => {navigate('case-studies/'), handleActive(location.pathname)}} className={location.pathname=='/case-studies/' ? "active": ""}> Case study </li>
            <li onClick={() => {navigate('tutorials/'), handleActive(location.pathname)}} className={location.pathname=='/tutorials/' ? "active": ""}> Tutorials </li>
          </ul>
        </div>
        <div className='bottom'>
          <p>© 2023 Superteam Security. All rights reserved. </p>
          <div className='socials'>
            <span> <img src='/insta.svg' /> </span>
            <span> <img src='/twitter.svg' /> </span>
            <span> <img src='/linkedin.svg' /> </span>
            <span> <img src='/fb.svg' /> </span>
            <span> <img src='/Vector (1).svg' /> </span>
          </div>
        </div>
    </footer>
  )
}
