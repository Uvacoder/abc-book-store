import React from "react";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";

const Review = () => {
  const url = "https://books-store-server.vercel.app/api/v1/reviews";
  const CardImage = "https://i.ibb.co/ZgRb72c/audi-Books-BG.png";
  const { isLoading, data: reviews } = useQuery("reviews", () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="">
      <h1 className="text-3xl text-center m-4 sm:font-bold">Our clients Reviews</h1>
      <div className="grid bg-none rounded-2xl md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 gap-x-2 gap-y-2">
        {reviews.map((review) => (
          <div key={review._id} className="bg-gray-300 rounded-2xl">
            <div className="shadow-lg transform duration-200 h-full easy-in-out">
              <div className="overflow-hidden">
                <img className="w-full" src={CardImage} alt="" />
              </div>
              <div className="flex justify-center px-5 -mt-12">
                <img
                  className="h-32 w-32 bg-white p-2 rounded-full   "
                  src={review.img}
                  alt="Avatar"
                />
              </div>
              <div className="text-center px-14 pb-3">
                <h2 className="text-gray-800 text-3xl font-bold">
                  {review.name}
                </h2>
                <span className="text-gray-400 mt-2 hover:text-blue-500">
                  {review.userEmail}
                </span>
                <p className="mt-2 text-gray-500 text-sm">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Review;
