import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetCardSearchQuery } from '../../store/api/searchApi/searchApi'
import CardSearch from '../../components/searchpage/CardSearch'
import Loader from '../../modules/loader/Loader'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const { data, isSuccess } = useGetCardSearchQuery({ value: searchParams.get('search') })
  if (isSuccess) {
    return <CardSearch card={data} />
  } else {
    return <Loader />
  }
}

export default SearchPage