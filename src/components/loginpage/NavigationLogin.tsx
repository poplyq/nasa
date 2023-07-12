import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLogin = () => {
  return (
    <div className='linkContainer'>
      <Link className='loginLink' to='/home'>
        Не хочешь входить в аккаунт?
      </Link>
      <Link className='loginLink' to='/registration'>
        Еще не с нами? Зарегестрируйся
      </Link>
    </div>
  )
}

export default NavigationLogin
