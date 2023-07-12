import React, { ReactNode } from 'react'
import logo from '../../assets/header/logo.svg'
import './header.scss'
import LinkImg from '../../components/common/images/LinkImg'
import Searchmodule from '../homepage/filtermodule/Searchmodule'

interface HeaderProps {
  settings?: ReactNode
  user: ReactNode
}

function Header(props: HeaderProps) {
  return (
    <div className='headerContainer'>
      <LinkImg imgUrl={logo} link='/home' />
      <Searchmodule />
      <div>{props.user}</div>
    </div>
  )
}

export default Header
