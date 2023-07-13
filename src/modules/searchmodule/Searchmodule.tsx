import React, { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'
import SearchComponent from '../../components/homepage/workplace/searchContainer/SearchComponent'
import { useGetDataSearchQuery } from '../../store/api/searchApi/searchApi'
import './searchmodule.scss'
import logo from './search.png'

const Searchmodule = () => {
  const [value, setValue] = useState<string>('')
  const newValue = useDebounce<string>(value, 500)
  const [search, setSearch] = useState<string>('')
  const { data } = useGetDataSearchQuery({ value: search })
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    setSearch(newValue)
  }, [newValue])
  const open = () => {
    setIsOpen(true)
  }
  return (
    <div className='searchModule'>
      <input type='text' value={value} onChange={handleChange} className='input' onFocus={open} />
      {isOpen && search && <div className='wrapper' onClick={() => setIsOpen(false)} />}
      <img className='img' src={logo} />
      {isOpen && search && data?.cards && <SearchComponent data={data} setValue={setValue} />}
    </div>
  )
}
export default Searchmodule
