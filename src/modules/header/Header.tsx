import React, { FC, ReactNode } from 'react';
import logo from '../../assets/header/logo.svg';

import './header.scss';
import LinkImg from '../../components/common/images/LinkImg';

interface HeaderProps {
  settings?: ReactNode;
  user: ReactNode;
}

function Header(props: HeaderProps) {
  return (
    <div className="headerContainer">
      <LinkImg imgUrl={logo} link="/home" />
      <div>
        {props.settings}
        {props.user}
      </div>
    </div>
  );
}

export default Header;
