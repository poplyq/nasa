import React from 'react'
import { Card } from '../../../../types/ui/collection'
import './searchcontainer.scss'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../store/store'
import { sendSearch } from '../../../../helpers/functions/sendSearch'

interface SearchBlockProps {
  card: Card
  key: string
}
function SearchBlock({ card }: SearchBlockProps) {
  const { user } = useAppSelector((state) => state.userState)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/search?search=${card.id}`)
    user && sendSearch(user.email, card.id, card.title)
  }
  return (
    <div className='searchBlock' onClick={handleClick}>
      <img src={card.image} alt='' className='searchBlockImg' />
      <div className='searchBlockTitleContainer'>
        <p>{card.title}</p>
        <p>{card.location}</p>
        <p>{card.date}</p>
      </div>
    </div>
  )
}

export default SearchBlock
