import React, { useEffect, useState } from 'react'
import { Card } from '../../types/ui/collection'
import { getIsFavorites } from '../../store/actions/getIsFavorites'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { sendFavorite } from '../../store/actions/sendFavorite'
import './cardsearch.scss'

interface CardSearchProps {
  card: Card
}
const CardSearch = ({ card }: CardSearchProps) => {
  const dispatch = useAppDispatch()
  const { favorite } = useAppSelector((state) => state.favoritesState)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { user } = useAppSelector((state) => state.userState)

  useEffect(() => {
    dispatch(getIsFavorites(card.id))
  }, [card.id, dispatch])

  useEffect(() => {
    if (favorite === card.id) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [card.id, favorite])

  const handleClick = () => {
    dispatch(sendFavorite(card.id))
    setIsFavorite(true)
  }

  return (
    <div className='cardSearchContainer'>
      <img src={card.image} alt='' className='img' />
      <div className='container'>
        <p>{card.title}</p>
        <p>{card.location}</p>
        <p>{card.date}</p>
        <p>{card.description}</p>
        {user &&
          (isFavorite ? (
            <span className='span'> В избранном</span>
          ) : (
            <button onClick={handleClick} className='button'>
              В избранное
            </button>
          ))}
      </div>
    </div>
  )
}

export default CardSearch
