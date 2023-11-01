import React from 'react'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../assets/Helper'


export const Footer = ({isActive, handleActive}) => {
  const navigate = useNavigate()
  

  return (
    <footer>
        <div className='top'>
          <h3>Superteam Security</h3>
          <p>Protecting your Solana assets <br/> with expert security assessments <br/> and vulnerability remediation</p>
          <ul>
            <li onClick={() => { navigate('/'), handleActive('home')}} className={isActive=='home' ? "active": ""}> Home </li>
            <li> About </li>
            <li onClick={() => {navigate('case-studies/'), handleActive('case')}} className={isActive=='case' ? "active": ""}> Case study </li>
            <li onClick={() => {navigate('tutorials/'), handleActive('tutorial')}} className={isActive=='tutorial' ? "active": ""}> Tutorials </li>
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
