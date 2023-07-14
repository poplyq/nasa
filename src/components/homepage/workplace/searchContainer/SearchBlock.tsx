import React from 'react'
import { Card } from '../../../../types/ui/collection'
import './searchcontainer.scss'
import { useNavigate } from 'react-router-dom'

interface SearchBlockProps {
  card: Card
  setValue(arg: string): void
}
function SearchBlock({ card, setValue }: SearchBlockProps) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/card?card=${card.id}`)
    setValue('')
  }
  return (
    <div className='searchBlock' onClick={handleClick}>
      <img src={card.image} alt='' className='searchBlockImg' />
      <div className='searchBlockTitleContainer'>
        <p>{card.title}</p>
      </div>
    </div>
  )
}

export default SearchBlock
