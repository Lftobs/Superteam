import React from 'react'
import { CaseStudies } from '../components/Case-studies/CaseStudies.jsx'
import { Contact } from '../components/Contact'
import { style } from '../assets/Helper'

const CasePage= () => {
  
  return (
    <>
      <CaseStudies />
      <Contact styles={style} />  
    </>
  )
}

export default CasePage