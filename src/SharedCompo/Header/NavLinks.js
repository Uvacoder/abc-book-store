import React from 'react';

const NavLinks = () => {
    const links = [
      {
        id: 1,
        name: "Fiction",
        submenu: true,
        sublinks: [
          { head: "New Arrival" },
          { head: "Top rated" },
          { head: "All Books" },
        ],
      },
      {
        id: 2,
        name: "Non Fiction",
        submenu: true,
        sublinks: [
          { head: "New Arrival" },
          { head: "Top rated" },
          { head: "All Books" },
        ],
      },
      {
        id: 3,
        name: "e-Books",
        submenu: true,
        sublinks: [
          { head: "New Arrival" },
          { head: "Top rated" },
          { head: "All Books" },
        ],
      },
      {
        id: 4,
        name: "Audio Books",
        submenu: true,
        sublinks: [
          { head: "New Arrival" },
          { head: "Top rated" },
          { head: "All Books" },
        ],
      },
      {
        id: 5,
        name: "Teens & YA",
        submenu: true,
        sublinks: [
          { head: "New Arrival" },
          { head: "Top rated" },
          { head: "All Books" },
        ],
      },
      {
        id: 6,
        name: "Kids",
        submenu: true,
        sublinks: [
          { head: "New Arrival" },
          { head: "Top rated" },
          { head: "All Books" },
        ],
      },
      {
        id: 7,
        name: "Toys and Games",
        submenu: true,
        sublinks: [
          { head: "New Arrival" },
          { head: "Top rated" },
          { head: "All Books" },
        ],
      },
    ];
    return (
      <>
        {links.map((link) => (
          <div key={link.id}>
            <div className="px-3 text-left md:cursor-pointer group ">
              <h1 className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">
                {link.name}
              </h1>
              {link.submenu && (
                <div>
                  <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
                    {link.sublinks.map((singleSublink) => (
                      <h1 className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">
                        {singleSublink.head}
                      </h1>
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