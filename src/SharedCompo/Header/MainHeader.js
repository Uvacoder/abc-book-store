import React from "react";
import SignUp from "./SignUp";
import SearchBar from "./SearchBar";
import TopOffer from "./TopOffer";
import Dropdown from "./Dropdown";
const MainHeader = () => {
  return (
    <>
      <div className="bg-[#3e5962]">
        <div className="w-3/5 my-auto mx-auto">
          <TopOffer />
        </div>
      </div>
      <SignUp />
      <SearchBar />
      <Dropdown />
    </>
  );
};

export default MainHeader;
