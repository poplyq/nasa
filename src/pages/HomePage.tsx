import React from 'react';
import './home.css';
import PictureOfDay from '../modules/homepage/pod/PictureOfDay';
import FilterModule from '../modules/homepage/filtermodule/FilterModule';

const HomePage = () => {
  return (
    <div className="containerPhoto">
      <PictureOfDay />
      <FilterModule />
    </div>
  );
};

export default HomePage;
