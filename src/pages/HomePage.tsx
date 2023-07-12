import React from 'react'
import './home.css'
import PictureOfDay from '../modules/homepage/pod/PictureOfDay'
import { ErrorBoundary } from 'react-error-boundary'
import { PodBoundary } from '../helpers/callbacks/PodBoundary'

const HomePage = () => {
  return (
    <div className='containerPhoto'>
      <ErrorBoundary FallbackComponent={PodBoundary}>
        <PictureOfDay />
      </ErrorBoundary>
    </div>
  )
}

export default HomePage
