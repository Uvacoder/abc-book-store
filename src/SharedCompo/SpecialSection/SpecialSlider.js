import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {specialSection} from '../../ConstantData/carouselData'

const SpecialSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="ml-2 mr-2 mb-4">
      <div className="divider text-2xl">Special Sections</div>
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
        {specialSection.map((data) => (
          <img
            key={data.id}
            src={data.img}
            alt="Offer images"
            className="h-full w-full"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SpecialSlider;
