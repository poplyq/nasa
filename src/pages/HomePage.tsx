import React from 'react'
import './home.css'
import PictureOfDay from '../modules/homepage/pod/PictureOfDay'
// import FilterModule from '../modules/homepage/filtermodule/FilterModule'
import Searchmodule from '../modules/homepage/filtermodule/Searchmodule'
import { ErrorBoundary } from 'react-error-boundary'
import { PodBoundary } from '../helpers/fallbacks/PodBoundary'

const HomePage = () => {
  return (
    <div className='containerPhoto'>
      <ErrorBoundary FallbackComponent={PodBoundary}>
        <PictureOfDay />
      </ErrorBoundary>
      <FilterModule />
      <Searchmodule />
    </div>
  )
}

export default HomePage
