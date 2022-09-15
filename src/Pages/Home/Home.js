import React from "react";
import FictionCarousel from "./FictionCarousel";
import TopCarousel from "./TopCarousel";

const Home = () => {
  const upComming = "https://i.ibb.co/Jngcn6r/upcomming.jpg";
  const offer = "https://i.ibb.co/HrncqqD/single-1.jpg";
  return (
    <div>
      <TopCarousel />
      <div className="m-4 border-4 border-cyan-700"><img src={upComming} alt="" className="" /></div>
      <FictionCarousel/>
      <div className="m-4 border-4 border-cyan-700"><img src={offer} alt="" className="" /></div>
    </div>
  );
};

export default Home;
