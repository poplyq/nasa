import React, { useState } from 'react'
import { useDebounce } from './useDebounce'
import SearchComponent from '../../components/homepage/workplace/searchContainer/SearchComponent'
import { useGetDataSearchQuery } from '../../store/api/searchApi/searchApi'
import './searchmodule.scss'
import logo from './search.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getStateUser } from '../../store/selectors/selectors'
import { sendSearch } from '../../helpers/functions/sendSearch'

const Searchmodule = () => {
  const [value, setValue] = useState<string>('')
  const user = useSelector(getStateUser)
  const navigate = useNavigate()
  const newValue = useDebounce<string>(value, 500)
  const { data } = useGetDataSearchQuery({ value: newValue })
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const open = () => {
    setIsOpen(true)
  }

  const handleClick = () => {
    user && sendSearch(user.email, value)
    setValue('')
    navigate(`/search?search=${value}`)
  }
  return (
    <div className='searchModule'>
      <input type='text' value={value} onChange={handleChange} className='input' onFocus={open} />
      <button className='button' onClick={handleClick}>
        Search
      </button>
      {isOpen && value && <div className='wrapper' onClick={() => setIsOpen(false)} />}
      <img className='img' src={logo} />
      {isOpen && value && data?.cards && <SearchComponent data={data} setValue={setValue} />}
    </div>
  )
}
export default Searchmodule
