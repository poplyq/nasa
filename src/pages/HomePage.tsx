import React, { useState } from 'react'
import './home.css'
import PictureOfDay from '../modules/homepage/pod/PictureOfDay'
import { ErrorBoundary } from 'react-error-boundary'
import { PodBoundary } from '../helpers/callbacks/PodBoundary'
import FilterModule from '../modules/homepage/filtermodule/FilterModule'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <div className='containerPhoto'>
      <ErrorBoundary FallbackComponent={PodBoundary}>
        <PictureOfDay />
      </ErrorBoundary>
      <button onClick={handleClick}>марсоход</button>
      {isOpen && <FilterModule />}
    </div>
  )
}

export default HomePage
