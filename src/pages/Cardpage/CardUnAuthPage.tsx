import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetCardSearchQuery } from '../../store/api/searchApi/searchApi'
import Loader from '../../modules/loader/Loader'
import CardBlock from '../../components/cardpage/CardBlock'

const CardUnAuthPage = () => {
  const [searchParams] = useSearchParams()
  const { data: card, isSuccess } = useGetCardSearchQuery({ value: searchParams.get('card') })
  if (isSuccess) {
    return <CardBlock card={card[0]} />
  } else {
    return <Loader />
  }
}
export default CardUnAuthPage
