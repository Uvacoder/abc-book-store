import React, { useState } from "react";
import AboutAuthor from "./AboutAuthor";
import "./BookDetailsTab.css";
import ProductDetails from "./ProductDetails";

const TabHome = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="w-2/4 mx-auto">
      <ul className="tab-list  ">
        <li
          className={`tabs-item ${getActiveClass(1, "active-tabs")} `}
          onClick={() => toggleTab(1)}
        >
          Product Details
        </li>
        <li
          className={`tabs-item ${getActiveClass(2, "active-tabs")} `}
          onClick={() => toggleTab(2)}
        >
          About Author
        </li>
      </ul>
      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <ProductDetails />
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <AboutAuthor />
        </div>
      </div>
    </div>
  );
};
export default TabHome;
