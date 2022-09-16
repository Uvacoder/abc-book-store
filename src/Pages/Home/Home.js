import React from "react";
import AddIndividualsReview from "../../SharedCompo/Review/AddIndividualsReview";

import Review from "../../SharedCompo/Review/Review";
import TopCarousel from "./TopCarousel";

const Home = () => {
  return (
    <div>
      <TopCarousel />
      <Review></Review>
      <AddIndividualsReview></AddIndividualsReview>
    
    </div>
  );
};

export default Home;
