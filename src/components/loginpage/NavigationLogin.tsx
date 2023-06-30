import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLogin = () => {
  return (
    <div>
      <Link className='loginLink' to='/passrecover'>
        Забыл пароль? Жми напомним
      </Link>
      <Link className='loginLink' to='/registration'>
        Еще не с нами? Зарегестрируйся
      </Link>
    </div>
  )
}

export default NavigationLogin
