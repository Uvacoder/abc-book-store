import React from 'react';
import SpecialSlider from '../../SharedCompo/SpecialSection/SpecialSlider';
import ProductCarousel from './ProductCarousel';

const BooksMain = () => {
    return (
      <div className="pt-2 pb-2">
        <h1 className="m-2 text-center text-3xl  md:font-bold text-gray-900">
          The Book Store
        </h1>
        <p className="m-2 text-center text-sm mb-6 text-gray-900">
          Discover the best books to read right now including trending titles,
          bookseller recommendations, new releases and more.
        </p>
        <SpecialSlider/>
        <ProductCarousel />
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