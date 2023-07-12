import './App.css'
import Header from './modules/header/Header'
import User from './components/header/authuser/User'
import AppRouter from './routing/AppRouter'
import { Suspense } from 'react'
import Loader from './pages/Loader'
import { useRelogin } from './helpers/hooks/useRelogin'

export default function App() {
  useRelogin()
  return (
    <div className='App'>
      <Header user={<User />} />
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  )
}
