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
      <Link to={'/favorites'} onClick={() => closeWindow()}>
        Избранное
      </Link>
      <Link to={'/history'} onClick={() => closeWindow()}>
        История
      </Link>
      <Link to={'/logout'} onClick={() => closeWindow()}>
        Выйти из учетной записи
      </Link>
    </div>
  )
}

export default AuthBlock
