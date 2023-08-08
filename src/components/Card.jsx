import '../assets/styles/components/Card.css'


const Card = ({title, content, img}) => {
  return (
    <div className='card'>
      <div className='img'>
          <img src={img} alt='' />
      </div>
      <h3>{title}</h3>
      <p>
          {content}
      </p>
      <a>Read more </a>
    </div>
      
    
  )
}

export default Card