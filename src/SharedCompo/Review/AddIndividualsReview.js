import React, { useState } from 'react'
import img from '../../../src/assets/images/book.jpg'
import { AiFillStar } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useForm } from "react-hook-form";

const AddIndividualsReview = () => {
  const [currentValue, setCurrentValue] = useState(0);
    const stars = Array(5).fill(0);

    const handleClick = value => {
      setCurrentValue(value)
      console.log(currentValue);

    }
    


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    <div className="h-screen w-full mx-auto bg-slate-200 relative">
            <div className=" bg-white w-10/12 md:w-9/12 lg:w-8/12 absolute mt-10 mx-auto inset-0 shadow-lg h-5/6">
               <div className="flex flex-col lg:flex-row h-full">
                <div className="Review-Book basis-1/3 w-full p-2 pr-0 bg-slate-100 h-full mx-auto">
                <img className="w-11/12" src={img} />
                    <div className="text-sm mt-5">
                        <h1>Sourcebooks - Court of the Vampire Queen (B&N Exclusive Edition)</h1>
                    </div>
                </div>
                <div className="Review-Form basis-2/3 pt-3 h-full w-full relative mb-3 bg-pink-100">

                    <div className="text-right w-full absolute right-6">
                    <button className=' '><ImCross></ImCross></button>
                    </div>

                    <div className="bg-white mb-3 w-full mt-5">
                    <h1 className='text-xl font-semibold'>My Review for Court of the Vampire Queen (B&N Exclusive Edition)</h1>
                    <h1 className='text-sm mt-2'>Required fields are marked with *</h1>
                    </div>


                  <form className='bg-pink-100'onSubmit={handleSubmit(onSubmit)} >

                  <div className="bg-slate-50 border-y py-4 flex space-x-4 items-center">
                        <h2 className='text-sm font-medium'>Overall Rating*</h2>

                        {
            stars.map((e,i) => {
              return (
                <AiFillStar
                key={i} 
                className={`w-8 cursor-pointer ${currentValue > i ? 'text-yellow-400' : 'text-gray-200'}`}
                onClick={() => handleClick(i+1)}
                />
              )
            })
          }


                        <div className="rating rating-md ">
                        <input type="radio" name="rating-1" className="mask mask-star focus:bg-pink-600" />
                        <input type="radio" name="rating-2" className="mask mask-star focus:bg-pink-600" />
                        <input type="radio" name="rating-3" className="mask mask-star focus:bg-pink-600" />
                        <input type="radio" name="rating-4" className="mask mask-star focus:bg-pink-600" />
                        <input type="radio" name="rating-5" className="mask mask-star focus:bg-pink-600" />
                      </div>
                </div>

                  <div className="flex">
                  <input className='input-bordered border border-1 m-3 outline-0 focus:border-pink-600 py-3 px-6 placeholder-black 'defaultValue="Email" {...register("example")}  type="email" />

                  <input className='input-bordered border border-1 m-3 py-3 outline-0 focus:border-pink-600 px-6 placeholder-black 'defaultValue="Your Name*" {...register("exampleRequired", { required: true })}   type="text" />
                  
                  </div>

                  <div className="">
                    <textarea className='input-bordered border border-1 mx-3 my-2 py-3 outline-0 focus:border-pink-600 px-6 placeholder-black 'defaultValue="Your Review*" {...register("exampleRequired", { required: true })}  name="" id="" cols="58" rows="5"></textarea>
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
