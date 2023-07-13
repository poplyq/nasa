import React from 'react'
import { Card } from '../../../../types/ui/collection'
import './searchcontainer.scss'
import { useNavigate } from 'react-router-dom'

import { sendSearch } from '../../../../helpers/functions/sendSearch'
import { getStateUser } from '../../../../store/selectors/selectors'
import { useSelector } from 'react-redux'

interface SearchBlockProps {
  card: Card
  setValue(arg: string): void
}
function SearchBlock({ card, setValue }: SearchBlockProps) {
  const user = useSelector(getStateUser)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/card?card=${card.id}`)
    setValue('')
    user && sendSearch(user.email, card.id, card.title)
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
