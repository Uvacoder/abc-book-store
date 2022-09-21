import React from 'react';
import KidCarousel from './KidCarousel';

const KidsMain = () => {
    return (
      <div>
        <h1 className="text-3xl text-center m-4">This is Kids Books routes</h1>
        <KidCarousel/>
        <KidCarousel/>
        <KidCarousel/>
      </div>
    );
};

export default KidsMain;