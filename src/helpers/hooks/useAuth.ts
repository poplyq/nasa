import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { errorUser, logout, setUser } from '../../store/slices/userSlice'
import LoginRequest from '../../types/request/loginRequest'

const useAuth = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const sigInGoogle = useCallback(() => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        user.email && token && dispatch(setUser({ email: user.email }))
        navigate('/home')
      })
      .catch(() => {
        dispatch(errorUser('Не удалось войти'))
      })
  }, [auth, dispatch, navigate])

  const signIn = useCallback(
    ({ email, password }: LoginRequest) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          const email = user.user.email
          const uid = user.user.uid
          if (email && uid) {
            dispatch(setUser({ email, uid }))
            navigate('/')
          }
        })
        .catch(() => dispatch(errorUser('Error')))
    },
    [auth, dispatch, navigate],
  )
  const signUp = useCallback(
    ({ email, password }: LoginRequest) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          const email = user.user.email
          const uid = user.user.uid
          if (email && uid) {
            dispatch(setUser({ email, uid }))
          }
        })
        .then(() => navigate('/'))
    },

    [auth, dispatch, navigate],
  )
  const logOut = useCallback(() => {
    signOut(auth)
      .then(() => dispatch(logout()))
      .then((user) => user)
  }, [auth, dispatch])

  return { sigInGoogle, signIn, signUp, logOut }
}
export default useAuth
