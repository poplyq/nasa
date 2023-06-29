import React from 'react'
import { CollectionType } from '../../../../types/ui/collection'
import SearchBlock from './SearchBlock'
import './searchcontainer.scss'
interface SearchComponentProps {
  data: CollectionType
}
const SearchComponent = ({ data }: SearchComponentProps) => {
  return (
    <div className='searchComponentContainer'>
      {data.cards.map((card) => (
        <SearchBlock card={card} key={card.id} />
      ))}
    </div>
  )
}

export default SearchComponent
