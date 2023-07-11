import React, { useContext, useState } from 'react'
import EmailInput from '../common/inputs/EmailInput'
import PasswordInput from '../common/inputs/PasswordInput'
import ButtonSubmit from '../common/buttons/ButtonSubmit'
import loginRequest from '../../types/request/loginRequest'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { makeUserResponse } from '../../helpers/functions/makeUserResponse'
import { setUser } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import './login.scss'

import { Context } from '../../helpers/context'

const LoginComponent = () => {
  const auth = useContext(Context)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const dispatch = useDispatch()

  const loginUser = (data: loginRequest) => {
    auth &&
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((user) => makeUserResponse(user))
        .then((user) => dispatch(setUser(user)))
  }
  return (
    <div className='loginContainer'>
      <h3 className='title'>Login</h3>
      <p className='label'> Email</p>
      <EmailInput setEmail={setEmail} email={email} setIsValid={setIsValid} />
      <p className='label'>Password</p>
      <PasswordInput setPassword={setPassword} password={password} placeholder='Введите пароль' />
      <ButtonSubmit
        handleClick={loginUser}
        value={{ email, password } as loginRequest}
        name='Log in'
        isValid={isValid}
        link='/home'
      />
    </div>
  )
}

export default LoginComponent
