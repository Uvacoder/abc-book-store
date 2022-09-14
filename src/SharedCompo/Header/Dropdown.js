import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar2 = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-white'>
            <div className='flex items-center font-lg font-semibold justify-center '>
                <div className='z-50 p-5 md:w-auto w-full flex flex-end h-16'>
                    <div className='text-3xl md:hidden flex flex-end' onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <ul className='md:flex hidden items-center gap-8 font-[poppins] pb-1 '>
                    <NavLinks />
                </ul>
                {/* for mobile  */}
                <ul className={`md:hidden bg-white absolute bottom-0 w-full h-full font-[poppins] py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <NavLinks />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar2;