import React from 'react';
import "./loader.css"

const Loader = () => {
    return (
      <div className='flex justify-center'>
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
};

export default Loader;