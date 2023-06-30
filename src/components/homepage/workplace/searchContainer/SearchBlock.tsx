import React from 'react'
import { Card } from '../../../../types/ui/collection'
import './searchcontainer.scss'
import { useNavigate } from 'react-router-dom'

interface SearchBlockProps {
  card: Card
  key: string
}
function SearchBlock({ card }: SearchBlockProps) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/element?search=${card.id}`)
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
