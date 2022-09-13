import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import './Review.css'
import 'react-multi-carousel/lib/styles.css';
import { AiFillStar } from 'react-icons/ai';

const Review = () => {
    const [reviews,setReviews]= useState([]);
     useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))

     },[])
  return (

    <div className="">
        <h3 className='text-2xl font-semibold text-center my-8'>Our client review</h3>
   



    <div className="max-w-4xl mx-auto my-32">


    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={5000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>


{
    reviews.map(singleReview => {
        const {img,name,review}=singleReview;
      return  <div class="review-card card card-side bg-base-100 rounded-0 mx-3 h-[200px] ">
        <figure><img className='w-[150px] h-full' src={img} alt=""/></figure>
        <div class="card-body w-full">
            <div class="text-pink-800 flex text-xs">
            <AiFillStar></AiFillStar> 
            <AiFillStar></AiFillStar> 
            <AiFillStar></AiFillStar> 
            <AiFillStar></AiFillStar> 
             </div>
            <p className='text-sm text-gray-500'>{review}</p>
            <div class="card-actions flex justify-end">
           <p className='text-right text-sm'>By- <span className='text-xs font-bold '>{name}</span> </p>
            </div>
        </div>
        </div>
    })
}




</Carousel>
</div>











       
    </div>
  )
}

export default Review
