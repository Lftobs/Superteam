import { useState, useRef } from 'react'
import './App.css'
import Tutorials from './components/Tutorials'
import { CaseStudies } from './components/CaseStudies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { About } from './components/About'

function App() {
  const [count, setCount] = useState(0)
  
  const style = {
    bg: 'transparent',
    color: 'white'
  }
  return (
    <>
    <section className='pages'>
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
      <About />
      <CaseStudies />

      <Tutorials styles={{}}/>

      <Contact styles={style}/>

    
    </section>
    
    </>
  )
}

export default App
