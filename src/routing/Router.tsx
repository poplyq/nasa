import React from 'react'
import { RoutesType } from './routes'
import { Route } from 'react-router-dom'

interface RouterProps {
  routes: RoutesType[]
}
const Router = ({ routes }: RouterProps) => {
  return (
    <>
      {routes.map((route) => (
        <Route path={route.path} key={route.path} element={<route.component />} />
      ))}
    </>
  )
}

export default Router
