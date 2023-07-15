import React from 'react'
import { useGetFirstCardSearchQuery } from '../../store/api/searchApi/searchApi'
import Loader from '../loader/Loader'
import CardFavorite from '../../components/favoritespage/CardFavorite'
interface FavoriteCardProps {
  id: string
}
const FavoriteCard = ({ id }: FavoriteCardProps) => {
  const { data, isSuccess } = useGetFirstCardSearchQuery({ value: id })

  if (isSuccess) {
    return <CardFavorite card={data} />
  } else {
    return <Loader />
  }
}

export default FavoriteCard
