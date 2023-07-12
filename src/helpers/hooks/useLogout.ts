import { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../../store/slices/userSlice'
import { signOut } from 'firebase/auth'
import { Context } from '../context'

export const useLogout = () => {
  const auth = useContext(Context)
  const dispatch = useDispatch()
  auth &&
    signOut(auth)
      .then(() => dispatch(logout()))
      .then((user) => user)
}
