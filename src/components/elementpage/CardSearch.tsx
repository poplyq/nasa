import React from 'react'
import { Card } from '../../types/ui/collection'
interface CardSearchProps {
  card: Card
}
const CardSearch = ({ card }: CardSearchProps) => {
  return (
    <div>
      <img src={card.image} alt='' className='searchBlockImg' />
      <div className='searchBlockTitleContainer'>
        <p>{card.title}</p>
        <p>{card.location}</p>
        <p>{card.date}</p>
        <p>{card.description}</p>
      </div>
    </div>
  )
}

export default CardSearch
