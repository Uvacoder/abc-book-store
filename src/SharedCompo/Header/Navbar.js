import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TopOffer from "./TopOffer";

import "./Style/navbar.css";
import { useForm } from "react-hook-form";

const Navbar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="bg-[#3e5962]">
        <div className="w-3/5 my-auto mx-auto">
          <TopOffer />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="container mx-auto py-2">
        {/* First section of navigation bar */}
        <div className="my-3 flex justify-between items-center">
          {/* Brand Logo  */}
          <div className="">
            <h1 className="text-2xl font-bold">
              <span className="text-[#54575a]">BARNES</span>
              <span className="text-[#cdb45d]"> & </span>
              <span className="text-[#54575a]">NOVEL</span>
            </h1>
          </div>

          {/* search bar  */}
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
              className="search-input px-4 p-2"
              placeholder="Search Your Book"
              {...register("search")}
            />

            <button type="submit" className="py-2 px-4 bg-[#54575a]">
              <AiOutlineSearch className="text-white text-2xl" />
            </button>
          </form>

          {/* Icons  */}
          <div className="flex flex-row justify-center items-center gap-4">
            {/* userIcon */}
            <div>
              <button
                type="submit"
                className="text-[14px] flex flex-row justify-center items-center gap-2"
              >
                <BiUserCircle className="text-3xl" />
                <span>MY ACCOUNT</span>
                <HiOutlineChevronDown className="text-xl" />
              </button>
            </div>

            {/* wishlist */}
            <div>
              <button
                type="submit"
                className="text-[14px] flex flex-row justify-center items-center gap-2"
              >
                <FcLikePlaceholder className="text-3xl" />
                <span>WISHLIST</span>
              </button>
            </div>

            {/* shopping cart */}
            <div className="items-cente">
              <button type="submit">
                <AiOutlineShoppingCart className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Second section of navigatio bar  */}
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
