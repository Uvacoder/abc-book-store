import React from 'react';
import ProductCarousel from './ProductCarousel';

const BooksMain = () => {
    return (
      <div className="pt-2 pb-2">
        <h1 className="m-2 text-center text-2xl text-gray-900">
          Top Rated General Books
        </h1>
        <ProductCarousel/>
        <h1 className="m-2 text-center text-2xl text-gray-900">
          New Arrivals Books
        </h1>
        <ProductCarousel />
        <h1 className="m-2 text-center text-2xl text-gray-900">
          All General Books
        </h1>
        <ProductCarousel />
      </div>
    );
};

export default BooksMain;