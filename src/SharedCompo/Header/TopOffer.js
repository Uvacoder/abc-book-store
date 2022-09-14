import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselOffer } from "../../ConstantData/carouselData";

const TopOffer = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
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
        {carouselOffer.map((data) => (
          <h1 className="h-8 w-full my-auto mx-auto text-gray-50 text-center" alt="Offer Text" key={data.id}>
            {data.tittle}
          </h1>
        ))}
      </Carousel>
    </>
  );
};

export default TopOffer;
