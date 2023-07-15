import React, { useState } from 'react'
import EmailInput from '../common/inputs/EmailInput'
import PasswordInput from '../common/inputs/PasswordInput'

import GoogleLogin from '../loginpage/GoogleLogin'
import useAuth from '../../helpers/hooks/useAuth'

const SignUp = () => {
  const { signUp } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isPassValid, setIsPassValid] = useState<boolean>(false)

  const register = (e: React.SyntheticEvent) => {
    e.preventDefault()
    signUp({ email, password })
  }

  return (
    <div className='loginContainer'>
      <h3 className=''>Регистрация</h3>
      <p className=''> Почта</p>
      <form onSubmit={register}>
        <EmailInput setEmail={setEmail} email={email} setIsValid={setIsEmailValid} />
        <p className='loginPassword'>Пароль</p>
        <PasswordInput
          setPassword={setPassword}
          password={password}
          placeholder='Введите пароль'
          setIsValid={setIsPassValid}
        />
        <button type='submit' disabled={!(isEmailValid && isPassValid)}>
          Sign up
        </button>
      </form>
      <GoogleLogin />
    </div>
  )
}

export default SignUp
