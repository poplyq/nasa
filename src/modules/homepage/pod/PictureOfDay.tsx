import { useGetPhotoOfDayQuery } from '../../../store/api/dataApi/dataApi'
import './pod.scss'

const PictureOfDay = () => {
  const { data, refetch } = useGetPhotoOfDayQuery()
  const handleClick = () => {
    refetch()
  }
  return (
    <div className='pictureOfDay'>
      <h2 className='podTitle'> Astronomy Picture of the Day</h2>
      <p>
        <a href='https://apod.nasa.gov/apod/archivepix.html'>Discover the cosmos!</a>Each day a
        different image or photograph of our fascinating universe is featured, along with a brief
        explanation written by a professional astronomer.
      </p>
      {data &&
        data.map((picture) => (
          <div key={picture.date} className='podContainer'>
            <img src={picture.hdurl} alt={`${picture.title}`} className='img' height={'1000'} />
            <div className='podText'>
              <p className='title'>{picture.title}</p>
              <p>{picture.explanation}</p>
              <p>{picture.date}</p>
            </div>
            <button className='button' onClick={handleClick}>
              Random photo
            </button>
          </div>
        ))}
    </div>
  )
}

export default PictureOfDay
