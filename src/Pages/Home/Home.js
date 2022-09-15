import React from "react";
import BookDetails from "../../components/Books/BookDetails";
import TopCarousel from "./TopCarousel";

const Home = () => {
  return (
    <div>
      <TopCarousel />
      <BookDetails />
    </div>
  );
};

export default Home;
