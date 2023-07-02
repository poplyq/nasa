import './App.css'
import Header from './modules/header/Header'
import User from './components/header/authuser/User'
import AppRouter from './routing/AppRouter'

function App() {
  return (
    <div className='App'>
      <Header user={<User />} />
      <AppRouter />
    </div>
  )
}

export default App
