import React from 'react'
import { useAppSelector } from '../store/store'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes } from './routes'


const AppRouter = () => {
    const {user} = useAppSelector(state=>state.userState)
  return user ? (
<Routes>
    {
        privateRoutes.map((value)=>
        <Route path={value.path} element={value.component}/>
        )
    }
</Routes>
  ) : (
    <Routes>
        
    </Routes>
  )
}

export default AppRouter
