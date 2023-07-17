import React from 'react'
import { useAppDispatch } from '../../store/store'
import { Card } from '../../types/response/collection'
import { deleteFavorite } from '../../store/actions/deleteFavorite'
import './cardfavorite.scss'
import { Link } from 'react-router-dom'

interface CardFavoriteProps {
  card: Card
}
const CardFavorite = ({ card }: CardFavoriteProps) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(deleteFavorite(card.id))
  }

  return (
    <div className='cardFavorite'>
      <Link to={`/card?card=${card.id}`} className='cardFavoriteContainer'>
        <img src={card.image} alt='' className='img' />
        <div className='container'>
          <p>{card.title}</p>
          <p>{card.location}</p>
          <p>{card.date}</p>
          <p>{card.description}</p>
        </div>
      </Link>
      <button className='button' onClick={handleClick}>
        Удалить из избранного
      </button>
    </div>
  )
}

export default CardFavorite
