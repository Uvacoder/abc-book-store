import React from 'react'
import './Book.css'
import img from '../../assets/images/book.jpg'
import { FaHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf,BsExclamation } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BookDetails = () => {

const priceRange=[
  { name:'Hancover',price:'12.00$'},
  { name:'E-book',price:'20.00$'},
  { name:'Audio-book',price:'14.00$'},
  { name:'large-print',price:'24.00$'},
  { name:'Audio-cd',price:'40.00$'}
]

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

            <div className="Details-content flex-2/4 px-5 md:px-10 lg:px-0">
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

                <div className="border border-gray-50 mt-4 mb-1">
                <hr />
                </div>
                <p className='font-bold text-[14px]'>Hardcover</p>

                <div className="price flex items-center space-x-2 my-2 lg:my-0">
                  <h1 className='text-3xl font-bold'>$24.99</h1>
                 <div className=" space-x-2 flex items-center">
                 <span className='text-sm line-through mt-1'>$28.00 </span> 
                 <h1 className='text-pink-600 font-semibold'>Save 11%</h1>
                 </div>
                </div>

                <div className="price-range">
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-2 ">
                    {
                      priceRange.map(priceBox=>{
                        // console.log(priceBox);
                        const {name,price}= priceBox;
                       return <div className=" p-2 border hover:border-1 hover:border-gray-700  hover:bg-slate-100 text-center leading-5 text-sm lg:mt-4 mb-0 xl:mb-2">
                          <h1>{name}</h1>
                          <h1 className='font-medium'>{price}</h1>
                        </div>
                      })
                    }
                  </div>
                </div>

               <div className="mb-5">
               <button className='text-xs text-green-800 hover:underline'>View All Available Formats & Editions</button>
               </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" />
                  <Link to='/' className='text-sm font-medium hover:underline'>Ship This Item — Qualifies for Free Shipping</Link>
                  <button className='p-1 border rounded-full px-1 text-xl hover:bg-pink-700'> <BsExclamation></BsExclamation> </button>
                </div>

                <div className="leading-none">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" />
                  <Link to='/' className='text-sm hover:underline'>Buy Online, Pick up in Store</Link>
                  <button className='p-1 border rounded-full px-1 text-xl hover:bg-pink-700'> <BsExclamation></BsExclamation> </button>
                </div>
                <button className='text-green-800 hover:underline text-sm ml-5'>Check Availability at Nearby Stores</button>
               </div>

               <div className="btn-groups flex md:flex-row flex-col md:space-x-3 my-4 space-y-3 md:space-y-0">
                <button className='py-2 px-8 bg-blue-700 uppercase font-medium text-white hover:bg-opacity-80'>Pre-Order</button>
                <button className='py-2 px-8 border border-1 border-black hover:text-white hover:bg-black font-medium'>Sign In To Purches Instantly</button>
               </div>

               <div className="flex items-center space-x-2">
                <button className='text-xl'> <FiTruck></FiTruck> </button>
                <p className='text-sm'>Available for Pre-Order. This item will be available on <span className='font-semibold'>September 20, 2022</span> </p>
               </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default BookDetails