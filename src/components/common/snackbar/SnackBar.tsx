import React, { FC } from 'react'
import './snack.scss'
import img from './google.png'
interface loginComponent {
  message: string
}
export const SnackBar: FC<loginComponent> = ({ message }) => {
  return (
    <figure className='notification'>
      <div className='notification_body'>
        <img src={img} alt='Success' title='Success' className='notification_icon' />
        {message}
      </div>
      <div className='notification_progerss'></div>
    </figure>
  )
}
