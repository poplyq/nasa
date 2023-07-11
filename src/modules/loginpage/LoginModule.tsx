import React from 'react'
import LoginComponent from '../../components/loginpage/LoginComponent'
import NavigationLogin from '../../components/loginpage/NavigationLogin'
import GoogleLogin from '../../components/loginpage/GoogleLogin'
import './login.scss'

const LoginModule = () => (
  <div className='loginModule'>
    <LoginComponent />
    <NavigationLogin />
    <GoogleLogin />
  </div>
)

export default LoginModule
