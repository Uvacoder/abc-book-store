import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub,BsDribbble as BsDribble } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <section className="bg-[#545f89]">
          <div className="text-center">
            <h3 className="text-3xl mb-3 text-gray-50 pt-4"> Download Our App</h3>
            <p className='text-gray-100'>Read at least Three page of a Book every day. </p>
            <div className="flex justify-center my-6">
            <a href='https://play.google.com/store/apps/details?id=bn.ereader&referrer=utm_fiksu_adid%3D698782%26'>
              <div className="flex items-center border sm:w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                  alt="App"
                />
                <div className="text-left ml-3">
                  <p className="text-sm">Download on </p>
                  <p className="text-sm md:text-base">Play Store </p>
                </div>               
              </div>
              </a>
              <a href="https://apps.apple.com/us/app/id373582546">
              <div className="flex items-center border sm:w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                  alt="App"
                />
                <div className="text-left ml-3">
                  <p className="text-sm">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
              </a>
            </div>
          </div>
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-900 hover:text-gray-50">About</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-900 hover:text-gray-50">Blog</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-900 hover:text-gray-50">Team</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-900 hover:text-gray-50">Pricing</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-900 hover:text-gray-50">Terms</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-900 hover:text-gray-50">Contact</Link>
              </div>
            </nav>
            <div className="flex justify-center mt-4 space-x-6">
              <Link to="/" className="text-[#142b0ef1] hover:text-gray-50">
                <BsFacebook className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#142b0ef1] hover:text-gray-50">
                <BsInstagram className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#142b0ef1] hover:text-gray-50">
                <BsTwitter className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#142b0ef1] hover:text-gray-50">
                <BsGithub className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#142b0ef1] hover:text-gray-50">
                <BsDribble className="w-8 h-8" />
              </Link>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-50">
              Copyright &#169; {new Date().getFullYear()} Inc. All right
              reserved.
            </p>
          </div>
        </section>
      </div>
    );
};

export default Footer;