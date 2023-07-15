import React, { useState } from 'react'
import EmailInput from '../common/inputs/EmailInput'
import PasswordInput from '../common/inputs/PasswordInput'
import { useSelector } from 'react-redux'
import './login.scss'
import { SnackBar } from '../common/snackbar/SnackBar'
import { getStateError } from '../../store/selectors/selectors'
import useAuth from '../../helpers/hooks/useAuth'

const LoginComponent = () => {
  const error = useSelector(getStateError)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isPassValid, setIsPassValid] = useState<boolean>(false)
  const { signIn } = useAuth()

  const loginUser = (e: React.SyntheticEvent) => {
    e.preventDefault()
    signIn({ email, password })
  }
  return (
    <div className='loginContainer'>
      <form onSubmit={loginUser}>
        <h3 className='title'>Login</h3>
        <p className='label'> Email</p>
        <EmailInput setEmail={setEmail} email={email} setIsValid={setIsEmailValid} />
        <p className='label'>Password</p>
        <PasswordInput
          setPassword={setPassword}
          password={password}
          placeholder='Введите пароль'
          setIsValid={setIsPassValid}
        />
        <button type='submit' disabled={!(isEmailValid && isPassValid)}>
          Log in
        </button>
      </form>
      {error && <SnackBar message='Wrong Login or Password' />}
    </div>
  )
}

export default LoginComponent
