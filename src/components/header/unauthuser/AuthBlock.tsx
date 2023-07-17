import React from 'react'
import { UserResponse } from '../../../types/response/user'
import { Link } from 'react-router-dom'
import './authblock.scss'
import useAuth from '../../../helpers/hooks/useAuth'

interface AuthBlockProps {
  user: UserResponse
  closeWindow(): void
}
const AuthBlock = ({ user, closeWindow }: AuthBlockProps) => {
  const { logOut } = useAuth()
  const handleClick = () => {
    logOut()
    closeWindow()
  }
  return (
    <div className='authBlock'>
      <p>{user.email}</p>
      <Link to={'/favorites'} className='linkButton' onClick={() => closeWindow()}>
        Избранное
      </Link>
      <Link to={'/history'} className='linkButton' onClick={() => closeWindow()}>
        История
      </Link>
      <button className='linkButton' onClick={handleClick}>
        Выйти из учетной записи
      </button>
    </div>
  )
}

export default AuthBlock
