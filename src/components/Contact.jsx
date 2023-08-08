import React from 'react'

export const Contact = ({styles}) => {
  return (
    <section className='sub' style={{background: styles.bg && styles.bg}}>
        <h3 style={{color: styles.color && styles.color }}>Become a trusted partner of <br></br> the entire Web3 community</h3>
        <button>Speak With Our Team <img src='/arrow-right.svg' /> </button>
    </section>
  )
}
