import React from 'react'
import { RoutesType } from './routes'
import { Route, Routes } from 'react-router-dom'

interface RouterProps {
  routes: RoutesType[]
}
const Router = ({ routes }: RouterProps) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} key={route.path} element={<route.component />} />
      ))}
    </Routes>
  )
}

export default Router
