import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className='top'>
          <h3>Superteam Security</h3>
          <p>Protecting your Solana assets <br/> with expert security assessments <br/> and vulnerability remediation</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Case Studies</li>
            <li>Tutorials</li>
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
