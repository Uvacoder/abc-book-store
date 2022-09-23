import React, { useState } from "react";
import authorImg from "../../Assets/Images/writter.jpg";
const AboutAuthor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState("overflow-hidden h-[302px]");
  const handleHidden = () => {
    setHidden("overflow-hidden h-[302px]");
    setIsOpen(true);
  };
  const showHidden = () => {
    setHidden(" ");
    setIsOpen(false);
  };
  return (
    <div>
      <h2 className="text-3xl text-center py-5">About the author</h2>
      <div className="flex g-5">
        <div className="w-1/3 px-5 ">
          <img className="w-[200px] ml-[35px]" src={authorImg} alt="" />
        </div>
        <article className={`w-2/3   p-12 ${hidden} transition`}>
          Born and raised in Southern California, Brit Bennett graduated from
          Stanford University and later earned her MFA in fiction at the
          University of Michigan. Her debut novel, The Mothers, was a New York
          Times bestseller and a finalist for both the NBCC John Leonard First
          Novel Prize and the PEN/Robert W. Bingham Prize for Debut Fiction. Her
          second novel, The Vanishing Half, was an instant #1 New York Times
          bestseller, long listed for the National Book Award, a finalist for the
          Women’s Prize, and named one of the ten best books of the year by The
          New York Times. Bennet has been named a National Book Foundation 5
          Under 35 honoree, a NAACP Image Award Finalist, and one of Time’s Next
          100 Influential People. Her essays have been featured in The New
          Yorker, The New York Times Magazine, The Paris Review, and Jezebel.
          <p>
            Influential People. Her essays have been featured in The New Yorker,
            The New York Times Magazine, The Paris Review, and Jezebel
          </p>
        </article>
      </div>
      <div className="text-center text-[#347d56] mt-10">
        {!isOpen ? (
          <button onClick={handleHidden}>see more &dArr;</button>
        ) : (
          <button onClick={showHidden}>see less &uArr;</button>
        )}
      </div>
    </div>
  );
};

export default AboutAuthor;
