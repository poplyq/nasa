import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetDataSearchQuery } from '../store/api/searchApi/serchApi'
import ElementComponent from '../components/elementpage/ElementComponent'
import Loader from './Loader'

const ElementPage = () => {
  const [searchParams] = useSearchParams()
  const { data, isSuccess } = useGetDataSearchQuery(searchParams.get('search'))
  if (isSuccess) {
    return <ElementComponent cards={data?.cards} />
  } else {
    return <Loader />
  }
}

export default ElementPage
