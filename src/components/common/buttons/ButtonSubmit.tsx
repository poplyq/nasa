import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ButtonSubmitProps<T> {
  value: T
  handleClick: (arg: T) => void
  name: string
  isValid?: boolean
  link?: string
}
function ButtonSubmit<T>({ value, handleClick, name, isValid, link }: ButtonSubmitProps<T>) {
  const navigate = useNavigate()

  const handleClickFunc = () => {
    handleClick(value)
    link && navigate(link)
  }
  return (
    <button className='SubmitButton' disabled={!isValid} onClick={handleClickFunc}>
      {name}
    </button>
  )
}

export default ButtonSubmit
