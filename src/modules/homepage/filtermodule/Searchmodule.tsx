import React, { useEffect, useState } from 'react'
import { useGetDataSearchQuery } from '../../../store/api/searchApi/serchApi'
import { useDebounce } from './useDebounce'
import SearchComponent from '../../../components/homepage/workplace/searchContainer/SearchComponent'

const Searchmodule = () => {
  const [value, setValue] = useState<string>('')
  const newValue = useDebounce<string>(value, 1500)
  const [search, setSearch] = useState<string>('')
  const { data } = useGetDataSearchQuery(search)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    setSearch(newValue)
  }, [newValue])

  return (
    <div>
      <input type='text' value={value} onChange={handleChange} />
      {data?.cards && <SearchComponent data={data} />}
    </div>
  )
}
export default Searchmodule
