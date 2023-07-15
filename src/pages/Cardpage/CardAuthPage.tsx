import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetFirstCardSearchQuery } from '../../store/api/searchApi/searchApi'
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
  const { data: card, isSuccess } = useGetFirstCardSearchQuery({ value: searchParams.get('card') })
  const favorite = useSelector(getStateFavorite)

  useEffect(() => {
    card && dispatch(getIsFavorite(card.id))
  }, [card, dispatch])

  const handleClick = () => {
    card && dispatch(postFavorite(card.id))
  }

  if (isSuccess) {
    return <CardBlock card={card} isUser={true} sendFavorite={handleClick} favorite={favorite} />
  } else {
    return <Loader />
  }
}

export default CardAuthPage
