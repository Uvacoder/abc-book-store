import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TopOffer from "./TopOffer";
import "./Style/navbar.css";
import { useForm } from "react-hook-form";
import SignInModal from "../../Pages/Signin/Signin";
import { Link } from "react-router-dom";

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
            <Link to="/" className="text-2xl font-bold">
              <span className="text-[#54575a]"> House </span>
              <span className="text-[#cdb45d]"> Of </span>
              <span className="text-[#54575a]">Books</span>
            </Link>
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
          <div className="flex flex-row justify-center items-center gap-4 user-section">
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
        {/* -----------------Second section of navigatio bar-------------------*/}
        <div className="py-5">
          <nav className="nav-second-part">
            <ul className="flex justify-self items-center">
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/books">Books</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/books/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/books/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/books/newArrivals">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/fiction">Fiction</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/fiction/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/fiction/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/fiction/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/novel">Novel</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/novel/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/novel/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/novel/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/crime">Crime</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/crime/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/crime/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/crime/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/kids">Kids</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/kids/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/kids/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/kids/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/academic">Academic</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/academic/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/academic/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/academic/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/ebooks">E-Books</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/ebooks/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/ebooks/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/ebooks/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/audioBooks">Audio Books</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/audioBooks/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/audioBooks/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/audioBooks/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/toysGames">Toys &#38; Games</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/toysGames/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/toysGames/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/toysGames/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second-dropdown border-b-2 border-[#54575a] border-opacity-0 hover:border-opacity-100 hover:text-[#54575a] duration-200 cursor-pointer">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="m-1">
                    <Link to="/stationary">Stationary &#38; Gifts</Link>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 w-[150px]"
                  >
                    <li>
                      <Link to="/stationary/topRated">Top Rated</Link>
                    </li>
                    <li>
                      <Link to="/stationary/allBooks">All Books</Link>
                    </li>
                    <li>
                      <Link to="/stationary/newArrival">New Arrival</Link>
                    </li>
                  </ul>
                </div>
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
            <SignInModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
