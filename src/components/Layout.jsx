import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <>
      <Nav /> 
      <Outlet />
      {/* <Contact styles={style} /> */}
      <Footer />
    </>
  )
}
