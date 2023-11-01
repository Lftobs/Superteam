import React, { useState } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { scrollToTop } from '../assets/Helper'


export const Layout = () => {
  const [isActive, setIsActive] = useState('home')
  const handleActive = (tag, top=0) => {  
    setIsActive(tag)
    scrollToTop(top)
  }

  return (
    <>
      
      <Nav isActive={isActive} handleActive={handleActive}/> 
      <Outlet />
      {/* <Contact styles={style} /> */}
      <Footer isActive={isActive} handleActive={handleActive}/>
    </>
  )
}
