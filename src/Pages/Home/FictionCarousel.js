import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import Loader from "../../SharedCompo/Loader/Loader";
import "./fiction.css"

const FictionCarousel = () => {
  const url = "https://books-store-server.vercel.app/api/v1/books/fictions";
    const { isLoading, data: Books } = useQuery('Products', ()=>fetch(url).then((res)=>res.json()));

    if (isLoading) {
      return <Loader/>
    }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
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
          <div class="card" key={book._id}>
            <div class="card-img">
              <img src={book.img} alt="" />
            </div>
            <div class="card-info">
              <button className="w-full rounded-2xl m-1 text-base text-gray-50 bg-[#0e2f50cb] hover:bg-[#0a6d4c9e]">
                Quick Add
              </button>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
};

export default FictionCarousel;
