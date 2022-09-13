import React from 'react';

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


                                    {link.sublinks.map((singleSublink) => (

                                        <h1 className='bg-white p-3.5 grid grid-cols-1 gap-3 rounded text-xs uppercase hover:text-green-500 text-left '>{singleSublink.head}</h1>

                                    ))}
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