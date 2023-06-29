import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetDataSearchQuery } from '../store/api/searchApi/serchApi';

const ElementPage = () => {
 const [searchParams] = useSearchParams();
 const {data} = useGetDataSearchQuery(searchParams.get('search'))
 console.log(data);
 
 
  return (

    <div >
      <img src={data?.items[0].links[0].href} alt='' className='searchBlockImg'/>
     <div className='searchBlockTitleContainer'>
      <p>{data?.items[0].data[0].title}</p>
      <p>{data?.items[0].data[0].location}</p>
      <p>{data?.items[0].data[0].date_created}</p>
      </div>
      </div>

  )
}

export default ElementPage
