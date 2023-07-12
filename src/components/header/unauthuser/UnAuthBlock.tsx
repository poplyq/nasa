import React from 'react'
import { Link } from 'react-router-dom'
import './authblock.scss'
interface UnAuthBlockProps {
  closeWindow(arg: void): void
}
const UnAuthBlock = ({ closeWindow }: UnAuthBlockProps) => {
  return (
    <div className='authBlock'>
      <Link to={'/login'} className='linkButton' onClick={() => closeWindow()}>
        Войти
      </Link>
      <Link to={'/signup'} className='linkButton' onClick={() => closeWindow()}>
        Зарегистрироваться
      </Link>
    </div>
  )
}

export default UnAuthBlock
