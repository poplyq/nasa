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
  }
  const validateForm = () => {
    console.log(validatePassword(password))

    password && setIsValid(validatePassword(password))
  }
  return (
    <input
      type='password'
      className='passwordInput'
      value={password}
      onChange={handleChange}
      onBlur={validateForm}
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
