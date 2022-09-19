import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import Loader from "../../SharedCompo/Loader/Loader";
import "./toys.css";

const ToysCarousel = () => {
  const url = "https://books-store-server.vercel.app/api/v1/books/toys";
  const { isLoading, data: Books } = useQuery("Products", () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeAble={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {Books.map((book) => (
        <>
          <div className="card-2  bg-base-100 shadow-xl">
            <figure className="card-image">
              <img
                className="w-[158px] h-[158px] ml-8"
                src={book.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-btn ">
              <button className="w-full rounded-2xl m-1 text-base text-gray-50 bg-[#0e2f50cb] hover:bg-[#0a6d4c9e]">
                Quick Add
              </button>
            </div>
            <div className="card-body">
              <p className="text-sm  hover:underline">
                {book.title.length > 30
                  ? book.title.slice(0, 20) + "..."
                  : book.title}
              </p>
              <p>
                by{" "}
                <span className="text-[#347d56] hover:underline">
                  {book.supplier}
                </span>
              </p>
              <p>{book.rating}</p>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
};

export default ToysCarousel;
