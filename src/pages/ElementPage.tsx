import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetDataSearchQuery } from '../store/api/searchApi/serchApi'

const ElementPage = () => {
  const [searchParams] = useSearchParams()
  const { data } = useGetDataSearchQuery(searchParams.get('search'))

  return (
    <div>
      {data &&
        data.cards.map((card) => (
          <div key={card.id}>
            <img src={card.image} alt='' className='searchBlockImg' />
            <div className='searchBlockTitleContainer'>
              <p>{card.title}</p>
              <p>{card.location}</p>
              <p>{card.date}</p>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ElementPage
