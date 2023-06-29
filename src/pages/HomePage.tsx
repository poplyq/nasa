import React from 'react'
import './home.css'
import PictureOfDay from '../modules/homepage/pod/PictureOfDay'
import FilterModule from '../modules/homepage/filtermodule/FilterModule'
import Searchmodule from '../modules/homepage/filtermodule/Searchmodule'

const HomePage = () => {
  return (
    <div className='containerPhoto'>
      <PictureOfDay />
      <FilterModule />
      <Searchmodule />
    </div>
  )
}

export default HomePage
