import React from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { carouselData } from '../../ConstantData/carouselData'

const TopCarousel = () => {
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
    <div className="mb-2 mt-2">
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
        {carouselData.map((data) => (
          <img className="max-h-80 w-full" src={data.img} alt="Banner" key={data.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default TopCarousel;
