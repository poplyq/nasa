import React, { useEffect } from 'react'

import FavoriteCard from '../../modules/favoritespage/FavoriteCard'
import './favorite.scss'
import { getFavorites } from '../../store/actions/getFavorites'
import { getMessageFavorite, getStateFavorites } from '../../store/selectors/selectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store/store'
import { SnackBar } from '../../components/common/snackbar/SnackBar'

const FavoritesPage = () => {
  const favorites = useSelector(getStateFavorites)
  const message = useSelector(getMessageFavorite)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  return (
    <div className='favoritePage'>
      {message && <SnackBar message={message} />}
      {favorites &&
        favorites.map((favorites) => <FavoriteCard key={favorites.search} id={favorites.search} />)}
    </div>
  )
}

export default FavoritesPage
