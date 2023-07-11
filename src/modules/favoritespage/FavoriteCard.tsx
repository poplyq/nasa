import React from 'react'
import { useGetCardSearchQuery } from '../../store/api/searchApi/serchApi'
import Loader from '../../pages/Loader'
import CardFavorite from '../../components/favoritespage/CardFavorite'
interface FavoriteCardProps {
  id: string
}
const FavoriteCard = ({ id }: FavoriteCardProps) => {
  const { data, isSuccess } = useGetCardSearchQuery({ value: id })
  if (isSuccess) {
    return <CardFavorite card={data} />
  } else {
    return <Loader />
  }
}

export default FavoriteCard
