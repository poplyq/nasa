import React, { useState } from 'react';
import ToggleImage from '../../common/images/ToggleImage';
import user from '../../../assets/header/user.png';

const AuthUser = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <ToggleImage isOpen={isOpen} setIsOpen={setIsOpen} imgUrl={user} />;
};

export default AuthUser;
