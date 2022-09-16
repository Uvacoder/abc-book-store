import React from "react";
import BookDetails from "../Books/BookDetails";
import ContactUs from "../ContactUsForm/ContactUs";
import TopCarousel from "./TopCarousel";

const Home = () => {
  return (
    <div>
      <TopCarousel />
      <BookDetails />
      <ContactUs />
    </div>
  );
};

export default Home;
