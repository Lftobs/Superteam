import { useNavigate } from 'react-router-dom'
import '../../assets/styles/components/Case-studies/Card.css'
import { scrollToTop } from '../../assets/Helper'



const Card = ({title, content, img, id}) => {
  const navigate = useNavigate()
  
  return (
    <div className='card'>
      <div className='img'>
          <img src={img} alt='' />
      </div>
      <h3>{title}</h3>
      <p>
          {content}
      </p>
      <a onClick={() => {navigate(`/case-studies/${id}`, {state: {data: {img: img, title: title}}}), scrollToTop()}}>Read more </a>
    </div>
      
    
  )
}

export default Card