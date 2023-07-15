import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetFirstCardSearchQuery } from '../../store/api/searchApi/searchApi'
import Loader from '../../modules/loader/Loader'
import CardBlock from '../../components/cardpage/CardBlock'

const CardUnAuthPage = () => {
  const [searchParams] = useSearchParams()
  const { data: card, isSuccess } = useGetFirstCardSearchQuery({ value: searchParams.get('card') })
  if (isSuccess) {
    return <CardBlock card={card} />
  } else {
    return <Loader />
  }
}
export default CardUnAuthPage
