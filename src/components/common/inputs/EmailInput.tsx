import React from 'react'
import { validateEmail } from '../../../helpers/functions/validateEmail'

interface EmailInputProps {
  setEmail(arg: string): void
  email: string | undefined
  setIsValid(arg: boolean): void
}

function EmailInput({ setEmail, email, setIsValid }: EmailInputProps) {
  const validateForm = () => {
    email && setIsValid(validateEmail(email))
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  return (
    <input
      className=''
      type='email'
      value={email}
      onChange={handleChange}
      onBlur={validateForm}
      placeholder='Введите email'
    />
  )
}

export default EmailInput
