import React from 'react';
import NovelCarousel from './NovelCarousel';

const NovelMain = () => {
  return (
    <div>
      <div className='bg-[#C0E1F4] h-auto w-auto font-bold text-center  py-6 cursor-pointer'>
        <p>Buy One,Get One : 50% Off Hundreds of Books</p>
      </div>
      <div className='bg-[#3D5962] h-auto w-auto  font-bold text-center py-3 cursor-pointer my-3 text-white'>
        <p>Free shipping on orders of $40 or more</p>
      </div>
      <div className='text-center'>
        <p className='text-3xl'>Novels</p>
        <p className='text-sm w-auto'>Discover the best Novels book in the world including best selling and new york times best seller.</p>
      </div>
      <div>
        {/* <div className='m-8'>
          <p className=' divider text-lg font-bold'>Shop by Age</p>
        </div>
        <div className='grid grid-cols-4 gap-x-28 m-10'>
          <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/kids/shop-by-age/Ages_0-2_3x.jpg" alt="" />
          <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/kids/shop-by-age/Ages_3-5_3x.jpg" alt="" />
          <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/kids/shop-by-age/Ages_6-8_3x.jpg" alt="" />
          <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/kids/shop-by-age/Ages_9-12_3x.jpg" alt="" />
        </div> */}
      </div>
      <div className='m-4'>
        <p className=' divider text-xl font-bold m-4'>Top rated Novel Books</p>
        <NovelCarousel />
      </div>

      <div className='m-8'>
        <p className=' divider text-xl font-bold pt-5 pb-4'>New Arrivales Novel Books</p>
        <NovelCarousel />
      </div>

      <div className='m-8'>
        <p className=' divider text-xl font-bold pt-5 pb-4'>All Novel Books</p>
        <NovelCarousel />
      </div>
    </div>
  );
};

export default NovelMain;