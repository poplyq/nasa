import React, { useEffect, useState } from 'react'
import EmailInput from '../common/inputs/EmailInput'
import PasswordInput from '../common/inputs/PasswordInput'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../store/slices/userSlice'
import { makeUserResponse } from '../../helpers/functions/makeUserResponse'
import GoogleLogin from '../loginpage/GoogleLogin'
import { useNavigate } from 'react-router-dom'
import { SnackBar } from '../common/snackbar/SnackBar'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isPassValid, setIsPassValid] = useState<boolean>(false)
  const [isPassConValid, setIsPassConValid] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [confirmPass, setConfirmPass] = useState<string>('')

  const register = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => makeUserResponse(user))
      .then((user) => dispatch(setUser(user)))
      .then(() => navigate('/home'))
  }
  useEffect(() => {
    password === confirmPass ? setErrorMessage('') : setErrorMessage('Пароли не совпадают')
  }, [confirmPass, password])
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
        <PasswordInput
          setPassword={setConfirmPass}
          password={confirmPass}
          placeholder='Повторите пароль'
          setIsValid={setIsPassConValid}
        />
        <button
          type='submit'
          disabled={!(isEmailValid && isPassValid && isPassConValid && !Boolean(errorMessage))}
        >
          Sign up
        </button>
      </form>
      <GoogleLogin />
      {errorMessage && <SnackBar message={errorMessage} />}
    </div>
  )
}

export default SignUp
