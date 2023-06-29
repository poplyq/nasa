import React from 'react'

interface PasswordInputProps {
  password: string
  setPassword(arg: string): void
  placeholder: string
}

function PasswordInput({ password, setPassword, placeholder }: PasswordInputProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  return (
    <input
      type='password'
      className=''
      value={password}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

export default PasswordInput
