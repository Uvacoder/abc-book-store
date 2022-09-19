import React from "react";
import TopThreeSection from "./TopThreeSection";
import ToysCarousel from "./ToysCarousel";

const ToysGamesMain = () => {
  return (
    <div>
      <h1 className="text-3xl text-center m-4">
        This is Toys &#38; Games Books routes
      </h1>
      <ToysCarousel />
      <div className="divider text-3xl font-bold">you may choose</div>

      <TopThreeSection />
    </div>
  );
};

export default ToysGamesMain;
