import './App.css'
import Header from './modules/header/Header'
import AppRouter from './routing/AppRouter'
import { Suspense } from 'react'
import Loader from './modules/loader/Loader'
import { useRelogin } from './helpers/hooks/useRelogin'

export default function App() {
  useRelogin()
  return (
    <div className='App'>
      <Header />
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  )
}
