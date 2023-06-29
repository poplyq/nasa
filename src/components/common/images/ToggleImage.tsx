import React from 'react'
interface ToggleImageProps {
  isOpen: boolean
  setIsOpen(arg: boolean): void
  imgUrl: string
}

function ToggleImage({ isOpen, setIsOpen, imgUrl }: ToggleImageProps) {
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return <img className='toogleImage' src={imgUrl} onClick={handleClick} />
}

export default ToggleImage
