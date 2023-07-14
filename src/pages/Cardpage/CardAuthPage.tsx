import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetCardSearchQuery } from '../../store/api/searchApi/searchApi'
import Loader from '../../modules/loader/Loader'
import CardBlock from '../../components/cardpage/CardBlock'
import { getIsFavorite } from '../../store/actions/getIsFavorite'
import { getStateFavorite } from '../../store/selectors/selectors'
import { postFavorite } from '../../store/actions/postFavorite'
import { useAppDispatch } from '../../store/store'
import { useSelector } from 'react-redux'

const CardAuthPage = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const { data: card, isSuccess } = useGetCardSearchQuery({ value: searchParams.get('card') })
  const favorite = useSelector(getStateFavorite)

  useEffect(() => {
    card && dispatch(getIsFavorite(card[0].id))
  }, [card, dispatch])

  const handleClick = () => {
    card && dispatch(postFavorite(card[0].id))
  }

  if (isSuccess) {
    return <CardBlock card={card[0]} isUser={true} sendFavorite={handleClick} favorite={favorite} />
  } else {
    return <Loader />
  }
}

export default CardAuthPage
