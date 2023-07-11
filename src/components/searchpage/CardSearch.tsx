import React, { useEffect, useState } from 'react'
import { Card } from '../../types/ui/collection'
import { getIsFavorites } from '../../store/actions/getIsFavorites'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { sendFavorite } from '../../store/actions/sendFavorite'
interface CardSearchProps {
  card: Card
}
const CardSearch = ({ card }: CardSearchProps) => {
  const dispatch = useAppDispatch()
  const { favorite } = useAppSelector((state) => state.favoritesState)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

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
    <div>
      <img src={card.image} alt='' className='searchBlockImg' />
      <div className='searchBlockTitleContainer'>
        <p>{card.title}</p>
        <p>{card.location}</p>
        <p>{card.date}</p>
        <p>{card.description}</p>
        {isFavorite ? <p> В избранном</p> : <button onClick={handleClick}>В избранное</button>}
      </div>
    </div>
  )
}

export default CardSearch
