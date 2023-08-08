import Carousel from "./Carousel"
import '../assets/styles/components/Tutorial.css'
import { useRef } from "react"
import { tutorials as cft } from "../assets/Helper"
import { useNavigate } from "react-router-dom"

const Tutorials = ({styles}) => {
    const carouselRef = useRef()
    const prev = (len, index) => {
          carouselRef.current.scrollBy(-365, 0)
    }

    const next = (len) => {
        
            carouselRef.current.scrollBy(365, 0)
        
    }
  
    return (
    <section className='tutorials' style={{background: styles.bg && styles.bg }} >
        <div className='tutorials-txt'>
          <h2 style={{color: styles.color && styles.color}}>CTFs Tutorials</h2>
          <p style={{color: styles.color2 && styles.color2 }}>
            Participate in these series of challenges to enhance your technical skills, and knowledge of cybersecurity concepts in defending defend against a wide range of attacks.
          </p>
        </div>
        {/* <div className='container'> */}
        <div className='carousel' ref={carouselRef}>
            { cft?.map((d, index) => {return (
                <Carousel index={index} title={d.title} img={d.img} no={d.no} txt={d.content} styles={styles} />
            )})}
            
          
        </div>
        <div className='controls'>
            <span className='left' onClick={prev}> <img src='/Icon.svg'/> </span>
            <div className="dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className='right' onClick={next}> <img src='/Icon2.svg'/> </span>
        </div>
    </section>
  )
}

export default Tutorials