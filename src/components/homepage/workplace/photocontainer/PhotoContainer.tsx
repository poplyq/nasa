import React from 'react';
import { IPhotos } from '../../../../types/ui/photos';
interface PhotoContainerProps {
  data: IPhotos;
  key: number;
}
const PhotoContainer = ({ data }: PhotoContainerProps) => {
  const handleClick = () => {};
  return (
    <div>
      <img src={data.img_src} className="imagephoto" />
      {data.earth_date}
      <button onClick={handleClick}>В избранное</button>
    </div>
  );
};

export default PhotoContainer;
