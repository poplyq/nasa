import React, { useEffect } from 'react'
import { getFavorites } from '../../store/actions/getFavorites'
import { useAppDispatch, useAppSelector } from '../../store/store'
import FavoriteCard from '../../modules/favoritespage/FavoriteCard'
import './favorite.scss'

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.favoritesState)
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