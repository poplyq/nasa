import React from 'react'
import { IUser } from '../../../types/ui/user'
import { Link } from 'react-router-dom'
import './authblock.scss'

interface AuthBlockProps {
  user: IUser
  closeWindow(arg: void): void
}
const AuthBlock = ({ user, closeWindow }: AuthBlockProps) => {
  return (
    <div className='authBlock'>
      <p>{user.email}</p>
      <Link to={'/favorites'} className='linkButton' onClick={() => closeWindow()}>
        Избранное
      </Link>
      <Link to={'/history'} className='linkButton' onClick={() => closeWindow()}>
        История
      </Link>
      <Link to={'/logout'} className='linkButton' onClick={() => closeWindow()}>
        Выйти из учетной записи
      </Link>
    </div>
  )
}

export default AuthBlock
