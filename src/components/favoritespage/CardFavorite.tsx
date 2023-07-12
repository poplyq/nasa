import React from 'react'
import { useAppDispatch } from '../../store/store'
import { Card } from '../../types/ui/collection'
import { deleteFavorites } from '../../store/actions/deleteFavorite'
import './cardfavorite.scss'
import { Link } from 'react-router-dom'

interface CardFavoriteProps {
  card: Card
}
const CardFavorite = ({ card }: CardFavoriteProps) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(deleteFavorites(card.id))
  }

  return (
    <Link to={`/search?serch=${card.id}`} className='cardFavoriteContainer'>
      <img src={card.image} alt='' className='img' />
      <div className='container'>
        <p>{card.title}</p>
        <p>{card.location}</p>
        <p>{card.date}</p>
        <p>{card.description}</p>
        <button onClick={handleClick}>В избранном</button>
      </div>
    </Link>
  )
}

export default CardFavorite
