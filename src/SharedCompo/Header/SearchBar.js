import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 justify-around relative">
        {/* Website logo or title  */}
        <div className="md:absolute left-16">
          <img src={logo} alt="" className="w-10 " />
          <Link
            to="/"
            className=" ml-3 text-gray-600 normal-case text-3xl font-extrabold font-[poppins]"
          >
            The House of Books
          </Link>
        </div>
        {/* input box / search box  */}
        <div className=" absolute ">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className=" w-96 h-10 ring-1 ring-gray-500 border-1 p-2 "
            />
            <button className="w-18 h-10 ring-1 ring-gray-500 focus:ring-gray-500 bg-gray-500">
              <AiOutlineSearch className="w-12 h-6 text-white" />
            </button>
          </div>
        </div>
        {/* Cart button  */}
        <div className="absolute right-20 md:block hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <div className="indicator">
                <FaShoppingCart className="h-8 w-7 text-[#514d4df5]" />
                <span className="badge badge-error indicator-item">{4}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
