import React from 'react'
import { Card } from '../../types/ui/collection'
import './cardblock.scss'

interface CardSearchProps {
  card: Card
  favorite?: string | null
  sendFavorite?(arg: void): void
  isUser?: boolean
}
const CardBlock = ({ card, favorite, sendFavorite, isUser }: CardSearchProps) => {
  const handleClick = () => {
    sendFavorite && sendFavorite()
  }
  return (
    <div className='cardSearchContainer'>
      <img src={card.image} alt='' className='img' />
      <div className='container'>
        <p>{card.title}</p>
        <p>{card.location}</p>
        <p>{card.date}</p>
        <p>{card.description}</p>
        {isUser && (
          <div>
            {favorite === card.id ? (
              <span className='span'> В избранном</span>
            ) : (
              <button onClick={handleClick} className='cardSearchContainerButton'>
                В избранное
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CardBlock
