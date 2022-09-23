import React from "react";
import Review from "../../SharedCompo/Review/Review";
import TopCarousel from "./TopCarousel";

const Home = () => {
  const upComing = "https://i.ibb.co/Jngcn6r/upcomming.jpg";
  const offer = "https://i.ibb.co/HrncqqD/single-1.jpg";
  return (
    <div>
      <TopCarousel />
      <div className="m-4 border-4 border-cyan-700"><img src={upComing} alt="Banner"/></div>
      <div className="m-4 border-4 border-cyan-700"><img src={offer} alt="Banner" /></div>
      <Review/>
    </div>
  );
};

export default Home;
