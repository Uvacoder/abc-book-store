import React from 'react'
import img from '../../../src/assets/images/book.jpg'
import { AiFillStar } from 'react-icons/ai';

const AddIndividualsReview = () => {
  return (
    <>
    <div className="h-screen w-full mx-auto bg-slate-200 relative">
            <div className=" bg-white w-10/12 md:w-9/12 lg:w-8/12 absolute mt-10 mx-auto inset-0 shadow-lg h-5/6">
               <div className="flex flex-col lg:flex-row h-full">
                <div className="Review-Book basis-1/3 w-full p-2 pr-0 bg-slate-100 h-full mx-auto">
                    <img src={img} className='w-11/12' alt="" />
                    <div className="text-sm mt-5">
                        <h1>Sourcebooks - Court of the Vampire Queen (B&N Exclusive Edition)</h1>
                    </div>
                </div>
                <div className="Review-Form basis-2/3 mt-5 h-full bg-pink-100">
                    <div className="bg-white mb-3">
                    <h1 className='text-xl font-semibold'>My Review for Court of the Vampire Queen (B&N Exclusive Edition)</h1>
                    <h1 className='text-sm mt-2'>Required fields are marked with *</h1>
                    </div>
                    <div className="bg-slate-50 border-y py-4 flex space-x-4 items-center">
                        <h2 className='text-sm font-medium'>Overall Rating*</h2>
                        <div class="text-pink-800 flex text-sm">
                        <AiFillStar className=''></AiFillStar>
                        <AiFillStar className=''></AiFillStar> 
                        <AiFillStar className=''></AiFillStar> 
                        <AiFillStar className=''></AiFillStar> 
                        <AiFillStar className=''></AiFillStar> 
                     </div>
                    </div>
                  <form className='bg-pink-100' >
                  <div className="flex">
                  <input className='input-bordered border border-1 m-3 outline-0 focus:border-pink-600 py-3 px-6 placeholder-black '  placeholder='Email' type="email" />
                  <input className='input-bordered border border-1 m-3 py-3 outline-0 focus:border-pink-600 px-6 placeholder-black '  placeholder='Name' type="text" />
                  </div>
                  <div className="">
                    <textarea className='input-bordered border border-1 mx-3 my-2 py-3 outline-0 focus:border-pink-600 px-6 placeholder-black ' placeholder='Your Review' name="" id="" cols="58" rows="5"></textarea>
                  </div>
                  <div className="mx-3 mt-1">
                   <button className='px-12 py-3 text-white bg-blue-600 text-sm font-medium hover:bg-pink-600'>Submit</button>
                  </div>
                  </form>
                   
                </div>

               </div>
            </div>
    </div>


    </>
  )
}

export default AddIndividualsReview
