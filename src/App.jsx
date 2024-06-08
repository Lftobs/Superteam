import { useState, useRef, useEffect } from 'react'
import './App.css'
import Tutorials from './components/Tutorial/Tutorials'
import { CaseStudies } from './components/Case-studies/CaseStudies'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { useParams } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const {about} = useParams()
  
  const style = {
    bg: 'transparent',
    color: 'white'
  }

  useEffect(() =>{
    if (about) {
      const section = document.getElementById(about)
      section ? section.scrollIntoView({behavior: 'smooth'}) : null
    }
  }, [about])

  return (
    <>
    <section className='pages'>
      <section className='hero'>
        <div className="pat"></div>
        <div className="pat2"></div>
        <div className='h-content'>
          <div className='h-text'>
            <h2>
              Collections of Hacks on the <span>Solana Protocols</span> 
            </h2>
            <p>
              Protecting your Solana assets with expert security assessments and vulnerability remediation
            </p>
            <button>Find Out More <span><figure></figure></span></button>
          </div>
          <div className='h-img'><img src="/Solana SOL Coin.svg" alt="" /></div>
        </div>
      </section>
      <About id={about}/>
      <CaseStudies />

      <Tutorials styles={{}}/>

      <Contact styles={style}/>

    
    </section>
    
    </>
  )
}

export default App
