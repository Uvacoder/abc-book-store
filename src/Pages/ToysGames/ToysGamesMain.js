import React from "react";
import TopThreeSection from "./TopThreeSection";
import ToysCarousel from "./ToysCarousel";

const ToysGamesMain = () => {
  return (
    <div>
      <div className="divider text-3xl font-bold">
        This is Toys &#38; Games Books routes
      </div>
      <ToysCarousel />
      <div className="divider text-3xl font-bold">you may choose</div>

      <TopThreeSection />
    </div>
  );
};

export default ToysGamesMain;
