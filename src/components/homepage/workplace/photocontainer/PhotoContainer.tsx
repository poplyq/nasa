import React from 'react'
import { Photos } from '../../../../types/ui/photos'
import './photocontainer.scss'
interface PhotoContainerProps {
  data: Photos
  key: number
}
const PhotoContainer = ({ data }: PhotoContainerProps) => {
  const handleClick = () => {
    console.log()
  }
  return (
    <div className='imgContainer'>
      <img src={data.img_src} className='img' alt='' />
      <div className='textContainer'>
        {data.earth_date}
        <button onClick={handleClick}>В избранное</button>
      </div>
    </div>
  )
}

export default PhotoContainer
