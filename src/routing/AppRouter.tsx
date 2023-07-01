import React from 'react'
import { useAppSelector } from '../store/store'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publickRoutes } from './routes'

const AppRouter = () => {
  const { user } = useAppSelector((state) => state.userState)
  return user ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.component />} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publickRoutes.map((route) => (
        <Route path={route.path} element={<route.component />} key={route.path} />
      ))}
    </Routes>
  )
}

export default AppRouter
