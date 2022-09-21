import React from "react";
import "./AudioBook.css";
import AudioBookCarousel from "./AudioBookCarousel";

const AudioBooksMain = () => {
  
  return (
    <div className="mb-20">
      <h1 className="text-2xl font-semibold text-center my-8"> Audio Books </h1>
      <section className="banner mb-10 ">
        <div className="banner-content flex h-full justify-center items-center relative">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-100 mb-4 ">
              Subscribe and get On month Free
            </h1>
            <button className="text-sm font-medium link px-10 py-3 bg-pink-600 text-white hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className=" mx-auto">
        <h1 className="text-2xl font-semibold text-center">
          30% Off Audio Books Bestsellers
        </h1>
        <div className="divider"></div>
        <div className="mx-auto max-w-4xl">
          <AudioBookCarousel />
          <div className="text-right">
            <button className="text-sm font-medium text-pink-800 link">
              See More
            </button>
          </div>
        </div>
      </section>
      <section className=" mx-auto">
        <div className="divider my-10 text-2xl font-semibold px-20">
          Subscribe Today for Free
        </div>
        <div className="flex flex-col px-5 lg:px-10 lg:flex-row">
          <div className="">
            <p className="">
              Need inspiration on what to read this month? Discover the best
              picks of the month from the book experts at Barnes & Noble. Not
              only do our monthly picks feature spectacular stories, but the
              audio book narrators bring those stories to life in an immersive
              fashion
            </p>
          </div>
          <AudioBookCarousel />
        </div>
        <div className="text-right px-5 lg:px-20">
          <button className="text-sm font-medium text-pink-800 link">
            See More
          </button>
        </div>
      </section>
      <section>
        <div className="divider mt-10 text-2xl font-semibold px-5 lg:px-20">
          Audio books Coming Soon
        </div>
        <p className="text-center max-w-3xl mx-auto my-10 font-medium">
          Audio books are voice recordings of a book being read out loud so that
          you can listen to the story rather than read the text. Audio books are
          popular because of the ability to multitask. Audio books can be
          listened to while driving, commuting on public transportation,
          exercising, and more.
        </p>
        <div className="mx-auto max-w-5xl">
          <AudioBookCarousel />
          <div className="text-right px-5 lg:px-20">
            <button className="text-sm font-medium text-pink-800 link">
              See More
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="border max-w-4xl mx-auto px-5 py-10 mt-20">
          <p className="text-sm">
            If you’re looking for where to buy audio books, you’ve come to the
            right place. Listen to audio books on the free Barnes & Noble NOOK
            app for easy listening wherever you go. Shop thousands of
            bestsellers, new releases, and classics, all in one place. Browse
            audio books read by talented narrators and celebrities including
            Meryl Streep, Adjoa Andoh, and George Newbern. Whether you’re
            cleaning, cooking, exercising, or commuting, you can multitask and
            make the time pass with an audio book from Barnes & Noble.
          </p>
          <h2 className="text-2xl font-semibold mt-5">What is an audio book?</h2>
          <p className="text-sm">
            Audio books are voice recordings of a book being read out loud so
            that you can listen to the story rather than read the text.
            Audio books are popular because of the ability to multitask.
            Audio books can be listened to while driving, commuting on public
            transportation, exercising, and more.
          </p>
          <h2 className="text-2xl font-semibold mt-5">
            Is there an app to listen to audio books for free?
          </h2>
          <p className="text-sm">
            Barnes & Noble audio books can be listened to on the free Barnes &
            Noble NOOK app available in the Apple App Store and from Google
            Play. The Barnes & Noble NOOK app can be downloaded to your phone,
            tablet or NOOK eReader for easy listening. Plus, get a free
            audio book when you sign up for a B&N Audio books Subscription at
            Barnes & Noble.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AudioBooksMain;
