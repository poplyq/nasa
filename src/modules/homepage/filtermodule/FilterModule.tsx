import React, { useState } from 'react'
import {rovers} from '../../../helpers/variables/rovers'
import RadioInput from '../../../components/common/inputs/RadioInput';
import { cameras } from '../../../helpers/variables/cameras';
import {  useGetDataQuery } from '../../../store/api/dataApi/dataApi';
import { makeRequest } from '../../../helpers/functions/makerequest';
import { dataRequest } from '../../../types/request/dataRequest';
import PhotoContainer from '../../../components/homepage/workplace/photocontainer/PhotoContainer';
interface FilterModuleProps{

}

const FilterModule = () => {
  const [rover, setRover] = useState<string>('spirit');
  const [sol, setSol] = useState<string>('1');
  const [page, setPage] = useState<number>(1);
  const [camera, setCamera] = useState<string>('');
  const [filter, setFilter] = useState<dataRequest >(makeRequest({ rover: 'spirit', sol: sol, page: 1, camera:camera}))

  const { isSuccess, data } = useGetDataQuery(filter);
  const handleInput = (e:React.FormEvent<HTMLInputElement>) => {
    setSol(e.currentTarget.value)
  }
  const handleClick = () =>{
setFilter(makeRequest({ rover: rover, sol: sol, page: 1, camera:camera}))


  }
  return (
    <div>
      <p>выберите марсоход</p>
      <RadioInput array={rovers} setElement={setRover}/>
      <p> выберете камеру</p>
      <RadioInput array={cameras} setElement={setCamera}/>
      <p> выберите день</p>
      <input type='number' onChange={handleInput} value={sol} max={'2000'}/>
      <button onClick={handleClick}>Button</button>
      {
        data?.photos.map((photo, id)=>(
          <PhotoContainer data={photo} key={id}/>
        ))
      }
    </div>
  )
}

export default FilterModule
