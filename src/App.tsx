import './App.css';
import AuthUser from './components/header/authuser/AuthUser';
import Header from './modules/header/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header  user={<AuthUser/>}/>
      <HomePage/>
    </div>
  );
}

export default App;
