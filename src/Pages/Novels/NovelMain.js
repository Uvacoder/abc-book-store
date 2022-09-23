import React from 'react';
import NovelCarousel from './NovelCarousel';

const NovelMain = () => {
    return (
      <div>
        <h1 className="text-3xl text-center m-4">This is Novel Books routes</h1>
        <NovelCarousel/>
        <NovelCarousel/>
        <NovelCarousel/>
      </div>
    );
};

export default NovelMain;