import React from 'react'
import logo from '../../assets/header/logo.svg'
import './header.scss'
import LinkImg from '../../components/common/images/LinkImg'
import Searchmodule from '../searchmodule/Searchmodule'
import User from '../../components/header/authuser/User'

function Header() {
  return (
    <div className='headerContainer'>
      <LinkImg imgUrl={logo} link='/home' />
      <Searchmodule />
      <User />
    </div>
  )
}

export default Header
