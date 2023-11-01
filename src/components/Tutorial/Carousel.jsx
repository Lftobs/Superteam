import { useNavigate } from 'react-router-dom'
import '../../assets/styles/components/Tutorial/Carousel.css'
import { scrollToTop } from '../../assets/Helper'

const Carousel = ({ index, img, txt, title, no, styles}) => {
    const navigate = useNavigate()
  
    return (
    <div className='carousel-card' style={{background: styles.bg && styles.bg, border: styles.bg && `1px solid white`  }}>
        <div className='img' key={index}>
            <img src={img} alt='' />
        </div>
        <div className='txt'>
            <div className='title'>
                <h3 style={{color: styles.color && styles.color}}>{title}</h3>
                <h3 className='no'>{no}</h3>
            </div>
            <p style={{color: styles.color2 && styles.color2 }}>
                {txt}
            </p>
            
        </div>
        <button onClick={() => {navigate(`/tutorials/${index}`, {state: {data: {img: img, title: title, no: no}}}), scrollToTop()}}> Get Started <img src='/arrow-right2.svg' /> </button>
    </div>
  )
}



export default Carousel