import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar2 = () => {
    return (
        <nav className='bg-white'>
            <div className='flex items-center font-lg font-semibold justify-around'>
                <ul className='flex items-center gap-8 font-[poppins]'>
                    <li>
                        <Link to="#" className='py-7 px-3 inline-block'> Books</Link>

                    </li>
                    <NavLinks />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar2;