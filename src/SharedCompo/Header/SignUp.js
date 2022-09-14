import React from 'react';
import { CgProfile } from 'react-icons/cg'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <div className='bg-white pt-2'>
            <section className='flex justify-end'>
                <div className='flex'>
                    {/* myprofile /sign in / create account */}
                    <div className=' flex px-3 text-left md:cursor-pointer group'>
                        <div className=' flex'>
                            <CgProfile className='h-5 w-5'></CgProfile>
                            <span className='text-sm px-2 pb-2'>MY ACCOUNT</span>
                        </div>
                        <div className='absolute top-16 hidden group-hover:block hover:block  z-10 w-40 h-22 p-4 border border-gray-500 text-center bg-white '>
                            <button className='absolute w-20 h-8 bg-green-700 font-semibold text-sm top-2 text-white left-10 '><Link to='#'>Sign In</Link></button><br />
                            <Link className='underline underline-offset-1 pt-4' to='#'>Create Account</Link>
                        </div>
                    </div>
                    {/* wishlist /cart  */}
                    <div className='flex items-center justify-center font-[poppins] mr-8 cursor-pointer'>
                        <MdOutlineFavoriteBorder className='h-7 w-5 pb-2'></MdOutlineFavoriteBorder>
                        <span className='text-sm px-2 pb-2'>WISHLIST</span>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Navbar1;