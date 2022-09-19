import React from "react";

import { useQuery } from "react-query";
import Loader from "../../SharedCompo/Loader/Loader";
import "../Home/fiction.css";

const TopThreeSection = () => {
  const url = "https://books-store-server.vercel.app/api/v1/books/toys";
  const { isLoading, data: Books } = useQuery("Products", () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center g-4">
      <div
        className="w-1/4 h-ful p-5"
        style={{ borderRight: "1px solid", marginRight: "30px" }}
      >
        These three new holiday-themed Funko Pops are a perfect gift for any fan
        of Marvel or Star Wars!
      </div>
      <div className="flex m-5 ">
        {Books.slice(0, 3).map((book) => (
          <div className="m-5">
            <div className="card mb-3 " key={book._id}>
              <div className="card-img">
                <img className="h-full w-full" src={book.img} alt="" />
              </div>
              <div className="card-info">
                <button className="w-full rounded-2xl m-1 text-base text-gray-50 bg-[#0e2f50cb] hover:bg-[#0a6d4c9e]">
                  Quick Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopThreeSection;
