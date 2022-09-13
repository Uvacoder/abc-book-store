import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import Navbar2 from './Dropdown';
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 justify-around relative">
                {/* Website logo or title  */}
                <div className='md:absolute left-16'>
                    <img src={logo} alt="" className='w-10 ' />
                    <Link to="/" className="text-gray-600 normal-case text-3xl font-extrabold font-[poppins]">The House of Books</Link>
                </div>
                {/* input box / search box  */}
                <div className=" absolute ">
                    <div className="flex w-full">
                        <input type="text" placeholder="Search" className=" w-96 h-10 ring-1 ring-gray-500 border-1 p-2 " />
                        <button className='w-18 h-10 ring-1 ring-gray-500 focus:ring-gray-500 bg-gray-500'>
                            <AiOutlineSearch className="w-12 h-6 text-white" />
                        </button>

                    </div>
                </div>

                {/* Cart button  */}
                <div className="absolute right-16 md:block hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className='cursor-pointer'>
                            <div className="indicator">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                                <FaShoppingCart className="h-8 w-7 text-[#a39e9ee7]" />
                                <span className="badge badge-sm indicator-item bg-gray-400">{ }</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        </div>
                    </div>
                </div>
            </div >
        </div >);
};

export default Navbar;

