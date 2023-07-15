import React from 'react'
import useAuth from '../../helpers/hooks/useAuth'

const GoogleLogin = () => {
  const { sigInGoogle } = useAuth()
  const handleClick = () => {
    sigInGoogle()
  }
  return (
    <div>
      <button className='SubmitButton' onClick={handleClick}>
        Войти с гугл
      </button>
    </div>
  )
}

export default GoogleLogin
