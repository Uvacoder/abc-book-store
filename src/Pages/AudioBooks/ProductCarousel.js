import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import Loader from "../../SharedCompo/Loader/Loader";
import "../Home/fiction.css"

const ProductCarousel = () => {
  const url = "https://books-store-server.vercel.app/api/v1/books/audioBooks";
    const { isLoading, data: Books } = useQuery('Products', ()=>fetch(url).then((res)=>res.json()));

    if (isLoading) {
      return <Loader/>
    }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    
      <Carousel
      responsive={responsive}
      swipeAble={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {Books.map((book) => (
        <>
          <div className="card mb-3" key={book._id}>
            <div className="card-img">
              <img className="h-full w-full" src={book.img} alt="" />
            </div>
            <div className="card-info">
              <button className="px-10 py-1 rounded-none font-medium rounded-2xl m-1 text-base text-gray-50 bg-[#0e2f50cb] hover:bg-[#0a6d4c9e]">
               Details
              </button>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  
  );
};

export default ProductCarousel;
