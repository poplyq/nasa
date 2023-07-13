import React, { useContext, useState } from 'react'
import EmailInput from '../common/inputs/EmailInput'
import PasswordInput from '../common/inputs/PasswordInput'
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../store/slices/userSlice'
import GoogleLogin from '../loginpage/GoogleLogin'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../helpers/context'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useContext(Context)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isPassValid, setIsPassValid] = useState<boolean>(false)

  const register = (e: React.SyntheticEvent) => {
    e.preventDefault()
    auth &&
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          const email = user.user.email
          const uid = user.user.uid
          if (email && uid) {
            dispatch(setUser({ email, uid }))
          }
        })
        .then(() => navigate('/home'))
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
