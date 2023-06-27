import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './images.scss'

interface LinkImgProps{
    imgUrl: string
    link: string
}
function LinkImg ({imgUrl, link}:LinkImgProps) {
  return (

<Link to={link}>
    <img src={imgUrl} className='headerLogo' alt=''/>
</Link>
  )
}

export default LinkImg
