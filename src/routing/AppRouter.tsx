import React from 'react'
import { useAppSelector } from '../store/store'
import { privateRoutes, publickRoutes } from './routes'
import Router from './Router'

const AppRouter = () => {
  const { user } = useAppSelector((state) => state.userState)
  return user ? <Router routes={privateRoutes} /> : <Router routes={publickRoutes} />
}

export default AppRouter
