import React from 'react'
import LoginComponent from '../../components/loginpage/LoginComponent'
import NavigationLogin from '../../components/loginpage/NavigationLogin'
import GoogleLogin from '../../components/loginpage/GoogleLogin'

const LoginModule = () => (
  <div>
    <LoginComponent />
    <NavigationLogin />
    <GoogleLogin />

  </div>
)

export default LoginModule
