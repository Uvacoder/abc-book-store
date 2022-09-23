import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TopOffer from "./TopOffer";
import "./navbar.css";
import { useForm } from "react-hook-form";
// import SignInModal from "../../Pages/Signin/Signin";
import { Link } from "react-router-dom";
import Register from "../../Pages/UserRegister/Register";

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
            <Link to="/" className="text-2xl ml-8 md:ml-2 font-bold">
              <span className="text-[#54575a]"> House </span>
              <span className="text-[#cdb45d]"> Of </span>
              <span className="text-[#54575a]">Books</span>
            </Link>
          </div>
          {/*------------------------ search bar---------------------*/}
          <div className="grow mx-10 hidden md:block">
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
          <div className="md:flex hidden  flex-row justify-center items-center gap-4 user-section">
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
                      <label
                        htmlFor="my-modal-3"
                        className="modal-button cursor-pointer"
                      >
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
            <div className="items-center mr-4">
              <button type="submit" className="flex row relative">
                <AiOutlineShoppingCart className="text-3xl" />
                <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-[#54575a] rounded-full border-2 border-white dark:border-gray-900">
                  10
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* -----------------Second section of navigation bar-------------------*/}
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact  bg-white dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <div className="group relative">
              <svg
                className="icon h-6 w-6 absolute top-1 mt-2 right-1"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Search"
                type="search"
                className="input w-full"
              />
            </div>
            <Link className="text-lg font-medium" to="/books">
              Books
            </Link>
            <Link className="text-lg font-medium" to="/fiction">
              Fiction
            </Link>
            <Link className="text-lg font-medium" to="/novel">
              Novel
            </Link>
            <Link className="text-lg font-medium" to="/kidBooks">
              Kids
            </Link>
            <Link className="text-lg font-medium" to="/academic">
              Academic
            </Link>
            <Link className="text-lg font-medium" to="/ebooks">
              E-Books
            </Link>
            <Link className="text-lg font-medium" to="/audioBooks">
              Audio Books
            </Link>
            <Link className="text-lg font-medium" to="/toysGames">
              Toys &#38; Games
            </Link>
            <Link className="text-lg font-medium" to="/stationary">
              Stationary &#38; Gifts
            </Link>
            <div className="text-center bg-[#346250]">
              <button type="submit" className="text-white p-1">
                {/* open modal */}
                <label
                  htmlFor="my-modal-3"
                  className="modal-button cursor-pointer"
                >
                  Sign In
                </label>
              </button>
            </div>
          </ul>
        </div>
        <div className="py-5 hidden md:block">
          <nav className="nav-second-part flex justify-center items-cente">
            <ul className="flex justify-self items-center">
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/books">Books</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/fiction">Fiction</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/novel">Novel</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/kidBooks">Kids</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/academic">Academic</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/ebooks">E-Books</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/audioBooks">Audio Books</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/toysGames">Toys &#38; Games</Link>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <Link to="/stationary">Stationary &#38; Gifts</Link>
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
            {/* <SignInModal /> */}
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;