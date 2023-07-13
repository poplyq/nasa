import React from 'react'
import { privateRoutes, publickRoutes } from './routes'
import Router from './Router'
import { getStateUser } from '../store/selectors/selectors'
import { useSelector } from 'react-redux'

const AppRouter = () => {
  const user = useSelector(getStateUser)
  return user ? <Router routes={privateRoutes} /> : <Router routes={publickRoutes} />
}

export default AppRouter
