import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetCardSearchQuery } from '../store/api/searchApi/serchApi'
import ElementComponent from '../components/searchpage/CardSearch'
import Loader from './Loader'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const { data, isSuccess } = useGetCardSearchQuery({ value: searchParams.get('search') })
  if (isSuccess) {
    return <ElementComponent card={data} />
  } else {
    return <Loader />
  }
}

export default SearchPage
