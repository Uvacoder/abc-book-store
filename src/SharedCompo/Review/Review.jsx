import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Review.css'

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
    <div className='grid grid-cols-3 gap-3 max-w-7xl mx-auto my-16'>
       

        {
            reviews.map(singleReview => {
                const {img,name,review}=singleReview;
                // return <div className="border p-3">
                //    <div className="flex items-center space-x-3">
                //    <div className="w- h-[100px] rounded-full">
                //         <img src={img} alt="" />
                //     </div>
                //     <div className="review">
                //         <p className='text-gray-400 text-sm'>{review}</p>
                //     </div>
                //    </div>
                //    <p>By- <span className='text-black text-semibold'>{name}</span> </p>
                // </div>
              return  <div class="review-card card card-side bg-base-100 rounded-0 ">
                <figure><img className='w-[150px] h-full' src={img} alt=""/></figure>
                <div class="card-body w-full">
                    <h2 class="text-pink-800">5 star</h2>
                    <p className='text-sm text-gray-500'>{review}</p>
                    <div class="card-actions flex justify-end">
                   <p className='text-right text-sm'>By- <span className='text-xs font-bold '>{name}</span> </p>
                    </div>
                </div>
                </div>
            })
        }



    </div>
    </div>
  )
}

export default Review
