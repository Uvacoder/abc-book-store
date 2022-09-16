import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-lg font-semibold justify-center ">
        <div className="z-50 p-5 md:w-auto w-full flex flex-end h-16">
          <div
            className="text-3xl md:hidden flex flex-end"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden items-center gap-8 font-[poppins] pb-1 ">
          {/* Fiction section  */}
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Fiction</Link>
            <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          {/* E-book section  */}
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">E-Book</Link>
            <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          {/* Audio Section  */}
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">AudioBooks</Link>
            <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          {/* Kids section  */}
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Kids</Link>
            <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          {/* Teen section  */}
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Teens & YA</Link>
            <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          {/* Non Fiction  */}
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">NonFiction</Link>
            <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          {/* Toys and Games  */}
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Toys & Games</Link>
            <div className="absolute bg-[#bab0b3ab] z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
        </ul>
        {/* for mobile  */}
        <ul
          className={`md:hidden bg-white absolute top-28 w-full h-full font-[poppins] py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"
            }`}>
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Fiction</Link>
            <div className="absolute z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36 bg-white">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">E-Books</Link>
            <div className="absolute bg-white z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">AudioBooks</Link>
            <div className="absolute bg-white z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Kids</Link>
            <div className="absolute bg-white z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">NonFiction</Link>
            <div className="absolute bg-white z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Teens & YA</Link>
            <div className="absolute bg-white z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
          <div className=" px-6 text-left md:cursor-pointer group ">
            <Link to="/" className="py-1 text-lg hover:text-[#3e8703f0] duration-200 cursor-pointer">Games& Toys</Link>
            <div className="absolute bg-white z-40 top-15 hidden group-hover:block hover:block w-change-auto w-36">
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">New Arrival</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">Top Rated</Link>
              <Link to='/' className="p-2 grid grid-cols-1 gap-3 rounded text-xs uppercase border-b-2 hover:border-[#3e8703f0] text-center ">All Books</Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default DropDown;