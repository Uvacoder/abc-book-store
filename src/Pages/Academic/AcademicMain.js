import React from 'react';
import ProductCarousel from './ProductCarousel';

const AcademicMain = () => {
    return (
      <div className="pt-2 pb-2">
        <div className="divider font-bold text-2xl m-2 text-gray-900">
          Top Rated Academic Books
        </div>
        <ProductCarousel />
        <div className="divider font-bold text-2xl m-2 text-gray-900">
          New Arrivals Books
        </div>
        <ProductCarousel />
        <div className="divider font-bold text-2xl m-2 text-gray-900">
          All Academic Books
        </div>
        <ProductCarousel />
      </div>
    );
};

export default AcademicMain;