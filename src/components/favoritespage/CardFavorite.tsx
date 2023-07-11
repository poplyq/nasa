import React from 'react'
import { useAppDispatch } from '../../store/store'
import { Card } from '../../types/ui/collection'
import { deleteFavorites } from '../../store/actions/deleteFavorite'
interface CardFavoriteProps {
  card: Card
}
const CardFavorite = ({ card }: CardFavoriteProps) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(deleteFavorites(card.id))
  }
  return (
    <div>
      <img src={card.image} alt='' className='searchBlockImg' />
      <div className='searchBlockTitleContainer'>
        <p>{card.title}</p>
        <p>{card.location}</p>
        <p>{card.date}</p>
        <p>{card.description}</p>
        <button onClick={handleClick}>В избранном</button>
      </div>
    </div>
  )
}

export default CardFavorite
