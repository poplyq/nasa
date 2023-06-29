import React from 'react';
import { Photos } from '../../../../types/ui/photos';
interface PhotoContainerProps {
  data: Photos;
  key: number;
}
const PhotoContainer = ({ data }: PhotoContainerProps) => {
  const handleClick = () => {};
  return (
    <div>
      <img src={data.img_src} className="imagephoto" alt=''/>
      {data.earth_date}
      <button onClick={handleClick}>В избранное</button>
    </div>
  );
};

export default PhotoContainer;
