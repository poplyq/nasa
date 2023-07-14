import { Card } from '../../types/ui/collection'
import SearchCard from '../../components/searchpage/SearchCard'
import './searchcontainer.scss'

interface SearchContainerProps {
  cards: Card[]
}
const SearchContainer = ({ cards }: SearchContainerProps) => {
  return (
    <div className='searchContainer'>
      {cards.length > 0 ? (
        cards.map((card) => <SearchCard card={card} key={card.id} />)
      ) : (
        <p>Поиск не дал результатов</p>
      )}
    </div>
  )
}

export default SearchContainer
