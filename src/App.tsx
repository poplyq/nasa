import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthUser from './components/header/authuser/AuthUser'
import Header from './modules/header/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import ElementPage from './pages/ElementPage'

function App() {
  return (
    <div className='App'>
      <Header user={<AuthUser />} />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<RegistrationPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='element' element={<ElementPage />} />
      </Routes>
    </div>
  )
}

export default App
