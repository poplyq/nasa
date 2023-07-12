import { onAuthStateChanged } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import { Context } from '../context'

export const useRelogin = () => {
  const auth = useContext(Context)
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth) {
      onAuthStateChanged(auth, (user) => {
        if (user?.email) {
          dispatch(setUser({ email: user.email, accessToken: user.refreshToken }))
        }
      })
    }
  }, [auth, dispatch])
}
