import React from "react";
import "./Style/custom.css";
import Logo from "../../Assets/Images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import TopOffer from "./TopOffer";

const Header = () => {
  return (
    <div>
      <div className="bg-[#3e5962]">
        <div className="w-3/5 my-auto mx-auto">
          <TopOffer/>
        </div>
      </div>
      <div className="flex">
        <div className="mx-auto my-auto w-4/12 flex">
          <img
            className="m-2 mr-4 max-h-16 w-auto hover:border-b-green-500 duration-200"
            src={Logo}
            alt="Logo"
          />
          <h1 className="text-2xl my-auto">The House of Books</h1>
        </div>
        <div className="w-1/2 flex mx-auto my-auto">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" className="input w-full" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="ml-2 mx-auto my-auto flex hover:border-b-green-500">
            <CgProfile className="h-8 w-7 text-[#a39e9ee7]" />
            <span className="text-xs w-16 ml-2 mx-auto my-auto">
              My Account
            </span>
          </div>
          <div className=" ml-4 mx-auto my-auto">
            <FaShoppingCart className="h-8 w-7 text-[#a39e9ee7]" />
          </div>
        </div>
      </div>
      <header className="header sticky top-0 bg-white flex items-center justify-between px-8 py-02">
        {/* <!-- navigation --> */}
        <nav className="nav font-semibold mx-auto my-auto text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <a href="#/">New Arrivals</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#/">Kids</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#/">Academic</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#/">Novel</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#/">Fiction</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#/">Crime</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
