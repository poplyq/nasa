import React from 'react'
import { Card } from '../../types/ui/collection'
interface ElementProps {
  cards: Card[] | undefined
}
const ElementComponent = ({ cards }: ElementProps) => {
  return (
    <div>
      {cards?.map((card) => (
        <div key={card.id}>
          <img src={card.image} alt='' className='searchBlockImg' />
          <div className='searchBlockTitleContainer'>
            <p>{card.title}</p>
            <p>{card.location}</p>
            <p>{card.date}</p>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ElementComponent
