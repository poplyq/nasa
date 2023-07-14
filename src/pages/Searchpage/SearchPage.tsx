import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetDataSearchQuery } from '../../store/api/searchApi/searchApi'
import Loader from '../../modules/loader/Loader'
import SearchContainer from '../../modules/searchpage/SearchContainer'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const { data: cards, isSuccess } = useGetDataSearchQuery({ value: searchParams.get('search') })
  console.log(cards)

  if (isSuccess) {
    return <SearchContainer cards={cards.cards} />
  } else {
    return <Loader />
  }
}

export default SearchPage
