import React from 'react'
import { CollectionType } from '../../../../types/response/collection'
import SearchBlock from './SearchBlock'
import './searchcontainer.scss'
interface SearchComponentProps {
  data: CollectionType
  setValue(arg: string): void
}
const SearchComponent = ({ data, setValue }: SearchComponentProps) => {
  return (
    <div className='searchComponentContainer'>
      {data.cards.map((card) => (
        <SearchBlock card={card} key={card.id} setValue={setValue} />
      ))}
      {data.cards.length < 1 && <p>По вашему запросу ничего не найдено</p>}
    </div>
  )
}

export default SearchComponent
