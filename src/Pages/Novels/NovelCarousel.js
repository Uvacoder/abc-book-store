import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../SharedCompo/Loader/Loader";
import "../Home/fiction.css"

const NovelCarousel = () => {
  const url = "https://books-store-server.vercel.app/api/v1/books/novels";
  const { isLoading, data: Books } = useQuery('Products', () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loader />
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
          <div className="card mb-3" key={book._id}>
            <div className="card-img">
              <img src={book.img} alt="" className="w-full h-full" />
            </div>
            <div className="card-info">
              <Link to={`/novel/${book._id}`} className="w-full rounded-2xl m-1 text-base text-gray-50 bg-[#0e2f50cb] hover:bg-[#0a6d4c9e]">
                Quick Add
              </Link>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
};

export default NovelCarousel;
