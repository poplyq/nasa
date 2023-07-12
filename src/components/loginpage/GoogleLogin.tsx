import React, { useContext } from 'react'
import { Context } from '../../helpers/context'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { errorUser, setUser } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const GoogleLogin = () => {
  const auth = useContext(Context)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => {
    const provider = new GoogleAuthProvider()
    auth &&
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential?.accessToken
          const user = result.user
          user.email && token && dispatch(setUser({ email: user.email, accessToken: token }))
          navigate('/home')
        })
        .catch(() => {
          dispatch(errorUser('Не удалось войти'))
        })
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
