import React from 'react'
import { IUser } from '../../../types/ui/user'
import { Link } from 'react-router-dom'
import './authblock.scss'

interface AuthBlockProps{
    user: IUser
}
const AuthBlock = ({user}: AuthBlockProps) => {
  return (
    <div className='authBlock'>
        <p>{user.email}</p>
      <Link to={'/favorites'}>Избранное</Link>
      <Link to={'/history'}>История</Link>
      <Link to={'/logout'}> Выйти из учетной записи</Link>
    </div>
  )
}

export default AuthBlock;
