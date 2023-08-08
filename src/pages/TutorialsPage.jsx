import React from 'react'
import Nav from '../components/Nav'
import Tutorials from '../components/Tutorials'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { style, tutorialsStyle } from '../assets/Helper'


const TutorialsPage = () => {
  return (
    <>
      <Tutorials styles={tutorialsStyle}/>
      <Contact styles={style} />
    </>
  )
}

export default TutorialsPage