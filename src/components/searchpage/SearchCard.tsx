import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../types/response/collection'
interface SearchCardProps {
  card: Card
}
const SearchCard = ({ card }: SearchCardProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/card?card=${card.id}`)
  }
  return (
    <div className='searchCard' onClick={handleClick}>
      <img src={card.image} alt='' className='img' />
      <div className='title'>
        <p>{card.title}</p>
      </div>
    </div>
  )
}
export default SearchCard
