import React from 'react'
import { Link } from 'react-router-dom'
import './authblock.scss'

const UnAuthBlock = () => {
  return (
    <div className='authBlock'>
      <Link to={'/login'} className='linkButton'>
        Войти
      </Link>
      <Link to={'/signup'} className='linkButton'>
        Зарегистрироваться
      </Link>
    </div>
  )
}

export default UnAuthBlock
