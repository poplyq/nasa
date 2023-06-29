import React, { useState } from 'react';
import { rovers } from '../../../helpers/variables/rovers';
import RadioInput from '../../../components/common/inputs/RadioInput';
import { cameras } from '../../../helpers/variables/cameras';
import { useGetDataQuery } from '../../../store/api/dataApi/dataApi';
import { makeRequest } from '../../../helpers/functions/makerequest';
import { dataRequest } from '../../../types/request/dataRequest';
import PhotoContainer from '../../../components/homepage/workplace/photocontainer/PhotoContainer';

const FilterModule = () => {
  const [rover, setRover] = useState<string>('spirit');
  const [sol, setSol] = useState<string>('1');
  const [page, setPage] = useState<string>('1');
  const [camera, setCamera] = useState<string>('');
  const [filter, setFilter] = useState<dataRequest>(
    makeRequest({ rover: 'spirit', sol, page, camera})
  );

  const { data } = useGetDataQuery(filter);
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSol(e.currentTarget.value);
  };
  const handleClick = () => {
    setFilter(makeRequest({ rover, sol, page, camera }));
  };
  return (
    <div>
      <p>выберите марсоход</p>
      <RadioInput array={rovers} setElement={setRover} />
      <p> выберете камеру</p>
      <RadioInput array={cameras} setElement={setCamera} />
      <p> выберите день</p>
      <input type="number" onChange={handleInput} value={sol} max={'2000'} />
      <input type="number" onChange={e=>setPage(e.target.value)} value={page} max={'2000'} />

      <button onClick={handleClick}>Button</button>
      {data?.photos.map((photo, id) => (
        <PhotoContainer data={photo} key={id} />
      ))}
    </div>
  );
};

export default FilterModule;
