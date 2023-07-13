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
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    setIsValid(validateEmail(e.currentTarget.value))
  }

  return (
    <input
      className='emailInput'
      type='email'
      value={email}
      onChange={handleChange}
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
