import React from 'react'
import Loader from '../../modules/loader/Loader'
import { useLogout } from '../../helpers/hooks/useLogout'

const LogoutPage = () => {
  useLogout()
  return <Loader />
}

export default LogoutPage
