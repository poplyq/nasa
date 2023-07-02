import React from 'react'
import { useAppSelector } from '../store/store'
import { Routes } from 'react-router-dom'
import { privateRoutes, publickRoutes } from './routes'
import Router from './Router'

const AppRouter = () => {
  const { user } = useAppSelector((state) => state.userState)
  return user ? (
    <Routes>
      <Router routes={privateRoutes} />
    </Routes>
  ) : (
    <Routes>
      <Router routes={publickRoutes} />
    </Routes>
  )
}

export default AppRouter
