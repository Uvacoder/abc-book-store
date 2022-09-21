import React from 'react';
import StationaryCarousel from './StationaryCarousel';

const StationaryMain = () => {
    return (
      <div>
        <h1 className="text-3xl text-center m-4">
          This is Stationary &#38; Gifts routes
        </h1>
        <StationaryCarousel/>
        <StationaryCarousel/>
        <StationaryCarousel/>
      </div>
    );
};

export default StationaryMain;