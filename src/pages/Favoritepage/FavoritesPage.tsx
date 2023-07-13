import React, { useEffect } from 'react'

import FavoriteCard from '../../modules/favoritespage/FavoriteCard'
import './favorite.scss'
import { getFavorites } from '../../store/actions/getFavorites'
import { getStateFavorites } from '../../store/selectors/selectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store/store'

const FavoritesPage = () => {
  const favorites = useSelector(getStateFavorites)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  return (
    <div className='favoritePage'>
      {favorites &&
        favorites.map((favorite) => <FavoriteCard key={favorite.search} id={favorite.search} />)}
    </div>
  )
}

export default FavoritesPage
