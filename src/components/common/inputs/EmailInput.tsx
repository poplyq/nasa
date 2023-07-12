import React from 'react'
import { validateEmail } from '../../../helpers/functions/validateEmail'
import './inputs.scss'
import PropTypes from 'prop-types'

interface EmailInputProps {
  setEmail(arg: string): void
  email: string
  setIsValid(arg: boolean): void
}

function EmailInput({ setEmail, email, setIsValid }: EmailInputProps) {
  const validateForm = () => {
    setIsValid(validateEmail(email))
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  return (
    <input
      className='emailInput'
      type='email'
      value={email}
      onChange={handleChange}
      onBlur={validateForm}
      placeholder='Enter email'
    />
  )
}

export default EmailInput

EmailInput.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  setIsValid: PropTypes.func,
}
