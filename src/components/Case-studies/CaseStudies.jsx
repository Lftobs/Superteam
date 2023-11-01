import React from 'react'
import { caseStudies } from '../../assets/Helper'
import Card from './Card'



export const CaseStudies = () => {
  return (
    <section className='case-studies'>
        <div className='txt'>
          <h2>Hack CaseStudies</h2>
          <p>
            Solana's growing popularity increases the risk of hacks and exploits, leading to significant losses for investors and developers. Discover the most recent and significant hacks in Solana's history.
          </p>
        </div>
        <div className='cards-section'>
          <div className='cards'>
            { caseStudies.map((d, id) => (
                <Card title={d.title} content={d.content} img={d.img} id={d.id} key={id}/>
              ))
            }
            
          </div>
        </div>
    </section>
  )
}
