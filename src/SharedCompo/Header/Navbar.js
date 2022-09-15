import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TopOffer from "./TopOffer";

import "./Style/navbar.css";
import { useForm } from "react-hook-form";
import SignInModal from "../../Pages/Signin/SignInModal";

const Navbar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <div className="bg-[#3e5962]">
        <div className="w-3/5 my-auto mx-auto">
          <TopOffer />
        </div>
      </div>

      {/*------------------------  Navigation Menu---------------------*/}
      <div className="container mx-auto">
        {/* First section of navigation bar */}
        <div className="flex items-center">
          {/* Brand Logo  */}
          <div className="">
            <h1 className="text-2xl font-bold">
              <span className="text-[#54575a]">House </span>
              <span className="text-[#cdb45d]"> & </span>
              <span className="text-[#54575a]">NOVEL</span>
            </h1>
          </div>

          {/*------------------------ search bar---------------------*/}
          <div className="grow mx-10">
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-row justify-center items-center border border-[#54575a]"
          >
            <div className="flex flex-row justify-center align-center py-2 px-5 bg-[#ddd]">
              <button className="">All</button>
              <div className="text-center">
                <HiOutlineChevronDown className="text-xl" />
              </div>
            </div>

            <input
              className="search-input px-4 p-2 w-full"
              placeholder="Search Your Book"
              {...register("search")}
            />

            <button type="submit" className="py-2 px-4 bg-[#54575a]">
              <AiOutlineSearch className="text-white text-2xl" />
            </button>
          </form>
          </div>

          {/* --------------------Icons--------------------  */}
          <div className="flex flex-row justify-center items-center gap-4">
            {/* userIcon */}
            <div className="dropdown dropdown-hover">
              <label tabIndex="0" className="m-3">
                <button
                  type="submit"
                  className="text-[14px] flex flex-row justify-center items-center gap-2"
                >
                  <BiUserCircle className="text-3xl" />
                  <span>MY ACCOUNT</span>
                  <HiOutlineChevronDown className="text-xl" />
                </button>
              </label>

              <ul
                tabIndex="0"
                className="dropdown-content shadow bg-base-100 mt-[-20px] w-[185px]"
              >
                <div className="p-3">
                  <div className="text-center bg-[#346250]">
                    <button type="submit" className="text-white p-1">
                      {/* open modal */}
                      <label htmlFor="my-modal-3" className="modal-button cursor-pointer">
                        Sign In
                      </label>
                    </button>
                  </div>
                  <div className="text-center ">
                    <button type="submit" className="text-[12px] underline">
                      <a href="#/">Create an account</a>
                    </button>
                  </div>
                </div>
                <hr />
                <li>
                  <a href="#/">Manage Account</a>
                </li>
                <li>
                  <a href="#/">Order Status</a>
                </li>
                <li>
                  <a href="#/">Payment Methods</a>
                </li>
              </ul>
            </div>

            {/* wishlist */}
            <div>
              <button
                type="submit"
                className="text-[14px] flex flex-row justify-center items-center gap-2"
              >
                <FcLikePlaceholder className="text-3xl" />
                WISHLIST
              </button>
            </div>

            {/* shopping cart */}
            <div className="items-cente mr-4">
              <button type="submit" className="flex flex row relative">
                <AiOutlineShoppingCart className="text-3xl" />
                <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-[#54575a] rounded-full border-2 border-white dark:border-gray-900">
                  10
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* -----------------Second section of navigatio bar-------------------*/}
        <div className="py-3 nav-second-part">
          <nav>
            <ul className="flex justify-between items-center text-center">
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Books</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Fiction</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">NonFiction</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Novel</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Crime</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Kids</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Academic</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">eBooks</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Audio Books</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Toys & Games</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Stationary & Gifts</a>
              </li>
              <li className="border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <a href="#/">Music & Movies</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* modal body */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <SignInModal/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
