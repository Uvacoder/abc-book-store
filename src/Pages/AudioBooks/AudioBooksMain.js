import React from 'react';
import banner from '../../Assets/Images/audio-books.jpg'

const AudioBooksMain = () => {
    return (
      <div>
        <h1 className="text-3xl text-center m-4">This is Audio Books routes</h1>
        <img src={banner} alt="Banner" />
      </div>
    );
};

export default AudioBooksMain;