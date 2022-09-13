import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    const links = [{
        name: "Fiction",
        submenu: true,
        sublinks: [
            { head: "New Arrival" },
            { head: "Top rated" },
            { head: "All Books" }
        ]
    },
    {
        name: "Non Fiction",
        submenu: true,
        sublinks: [
            { head: "New Arrival" },
            { head: "Top rated" },
            { head: "All Books" }
        ]
    },
    {
        name: "e-Books",
        submenu: true,
        sublinks: [
            { head: "New Arrival" },
            { head: "Top rated" },
            { head: "All Books" }
        ]
    },
    {
        name: "Audio Books",
        submenu: true,
        sublinks: [
            { head: "New Arrival" },
            { head: "Top rated" },
            { head: "All Books" }
        ]
    },
    {
        name: "Teens & YA",
        submenu: true,
        sublinks: [
            { head: "New Arrival" },
            { head: "Top rated" },
            { head: "All Books" }
        ]
    },
    {
        name: "Kids",
        submenu: true,
        sublinks: [
            { head: "New Arrival" },
            { head: "Top rated" },
            { head: "All Books" }
        ]
    },
    {
        name: "Toys and Games",
        submenu: true,
        sublinks: [
            { head: "New Arrival" },
            { head: "Top rated" },
            { head: "All Books" }
        ]
    }
    ]
    return (
        <>
            {links.map(link => (
                <div key={link.name}>
                    <div className='px-3 text-left md:cursor-pointer group '>
                        <h1 className='py-4 text-lg border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>{link.name}</h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-15 hidden group-hover:block hover:block w-change-auto'>
                                    {/* <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                                    </div> */}
                                    <div className='bg-white p-3.5 grid grid-cols-1 gap-3 rounded'>
                                        {link.sublinks.map((singleSublink) => (
                                            <div>
                                                <h1 className='text-xs uppercase hover:text-green-500 '>{singleSublink.head}</h1>
                                                {/* {singleSublink.sublink.map((slink) => (
                                                    <li className='text-sm text-gray-600 my-2.5'>
                                                        <Link to={"/"} className='hover:text-black'>{slink.name}</Link>
                                                    </li>
                                                ))} */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;