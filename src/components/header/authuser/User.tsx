import React, { useState } from 'react'
import ToggleImage from '../../common/images/ToggleImage'
import userIcon from '../../../assets/header/user.png'
import AuthBlock from '../unauthuser/AuthBlock'
import UnAuthBlock from '../unauthuser/UnAuthBlock'
import './user.scss'
import { getStateUser } from '../../../store/selectors/selectors'
import { useSelector } from 'react-redux'

const User = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const user = useSelector(getStateUser)
  const closeWindow = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ToggleImage isOpen={isOpen} setIsOpen={setIsOpen} imgUrl={userIcon} />
      {isOpen &&
        (user ? (
          <AuthBlock user={user} closeWindow={closeWindow} />
        ) : (
          <UnAuthBlock closeWindow={closeWindow} />
        ))}
      {isOpen && <div className='userBarWrapper' onClick={() => setIsOpen(false)}></div>}
    </>
  )
}

export default User
