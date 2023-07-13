import React from 'react'
import './inputs.scss'
import { validatePassword } from '../../../helpers/functions/validatePassword'
import PropTypes from 'prop-types'

interface PasswordInputProps {
  password: string
  setPassword(arg: string): void
  placeholder: string
  setIsValid(arg: boolean): void
}

function PasswordInput({ password, setPassword, placeholder, setIsValid }: PasswordInputProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
    setIsValid(validatePassword(e.currentTarget.value))
  }

  return (
    <input
      type='password'
      className='passwordInput'
      value={password}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

export default PasswordInput

PasswordInput.propTypes = {
  password: PropTypes.string,
  placeholder: PropTypes.string,
  setPassword: PropTypes.func,
  setIsValid: PropTypes.func,
}
