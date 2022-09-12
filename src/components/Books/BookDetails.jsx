import React from 'react'
import './Book.css'
import img from '../../assets/images/book.jpg'
import { FaHeart } from 'react-icons/fa';

const BookDetails = () => {
  return (
    <>

    <div className="container-width my-16 mx-auto ">
        <div className="grid grid-cols-2 mx-auto">

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

             {/* ....///...... img-section  ....... .....//// */}

            <div className="Details-content flex-2/4">
                <h1>Add to Wishlist Lucy by the Sea: A Novel</h1>

            </div>

        </div>

    </div>



    </>
  )
}

export default BookDetails