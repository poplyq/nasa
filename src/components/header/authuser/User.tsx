import React, { useState } from 'react'
import ToggleImage from '../../common/images/ToggleImage'
import userIcon from '../../../assets/header/user.png'
import AuthBlock from '../unauthuser/AuthBlock'
import UnAuthBlock from '../unauthuser/UnAuthBlock'
import { useAppSelector } from '../../../store/store'

const User = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { user } = useAppSelector((state) => state.userState)
  return (
    <>
      <ToggleImage isOpen={isOpen} setIsOpen={setIsOpen} imgUrl={userIcon} />
      {isOpen && (user ? <AuthBlock user={user} /> : <UnAuthBlock />)}
    </>
  )
}

export default User
