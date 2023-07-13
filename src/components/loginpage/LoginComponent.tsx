import React, { useContext, useState } from 'react'
import EmailInput from '../common/inputs/EmailInput'
import PasswordInput from '../common/inputs/PasswordInput'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { errorUser, setUser } from '../../store/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './login.scss'
import { Context } from '../../helpers/context'

import { SnackBar } from '../common/snackbar/SnackBar'
import { useNavigate } from 'react-router-dom'
import { getStateError } from '../../store/selectors/selectors'

const LoginComponent = () => {
  const auth = useContext(Context)
  const navigate = useNavigate()
  const error = useSelector(getStateError)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isPassValid, setIsPassValid] = useState<boolean>(false)
  const dispatch = useDispatch()

  const loginUser = (e: React.SyntheticEvent) => {
    e.preventDefault()
    auth &&
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          const email = user.user.email
          const uid = user.user.uid
          if (email && uid) {
            dispatch(setUser({ email, uid }))
          }
        })
        .then(() => navigate('/home'))
        .catch(() => dispatch(errorUser('Error')))
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
