import React from 'react'
import './Book.css'
import img from '../../assets/images/book.jpg'
import { FaHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const BookDetails = () => {
  return (
    <>

    <div className="container-width my-16 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">

            {/* ....///...... img-section  ....... .....//// */}

            <div className="Details-Img h-full justify-center flex justify-center mx-auto lg:ml-16 w-full flex-2/4">
              <div className="">
              <div className="img-box ease-in">
               <img className='w-[308px] h-[465px] ' src={img} alt="" />
               </div>
               <div className=" mt-2 flex flex-row justify-center items-center space-x-2">
               <div className="p-2 icon-border text-[13px] flex items-center hover:text-red-800 justify-center rounded-full">
               <FaHeart></FaHeart>
               </div>
                <button className='text-[13px] underline'>Add to wishlist</button>
               </div>
               
              </div>
            </div>

             {/* ....///...... content-section  ....... .....//// */}

            <div className="Details-content flex-2/4">
                <h1 className='text-2xl font-semibold mb-1'>Lucy by the Sea: A Novel</h1>
                <p className=''>By <span className='hover:underline text-sm'>Elizabeth Strout</span></p>
                <div className="ratings flex mt-3 items-center space-x-3">
                    <div className="icon flex text-pink-400">
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <BsStarHalf></BsStarHalf>
                    </div>
                    <h1>4.3(6)</h1>

                </div>
                <div className="border border-gray-50">
                <hr />
                </div>

            </div>

        </div>

    </div>



    </>
  )
}

export default BookDetails