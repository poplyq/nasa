import React from 'react'
import { useGetPhotoOfDayQuery } from '../../../store/api/dataApi/dataApi'
import './pod.scss'

const PictureOfDay = () => {
  const { data, refetch } = useGetPhotoOfDayQuery()

  const refrech = () => {
    refetch()
  }
  return (
    <div className='pictureOfDay'>
      <h2 className='podTitle'> Picture of the Day</h2>
      {data?.map((el) => (
        <div key={el.date} className='podContainer'>
          <img src={el.hdurl} alt='' className='img' />
          <p>{el.explanation}</p>
          <p>{el.date}</p>
          <button className='button' onClick={refrech}>
            Cлучайное фото
          </button>
        </div>
      ))}
    </div>
  )
}

export default PictureOfDay
