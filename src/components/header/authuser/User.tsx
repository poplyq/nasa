import React, { useState } from 'react';
import ToggleImage from '../../common/images/ToggleImage';
import userIcon from '../../../assets/header/user.png';
import { IUser } from '../../../types/ui/user';
import AuthBlock from '../unauthuser/AuthBlock';
import UnAuthBlock from '../unauthuser/UnAuthBlock';
interface UserProps{
user?: IUser
}
const User = ({user}: UserProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    <ToggleImage isOpen={isOpen} setIsOpen={setIsOpen} imgUrl={userIcon} />
    {
     isOpen && (user ? <AuthBlock user={user}/> : <UnAuthBlock/>)
    }
    </>
    ) 
};

export default User;
