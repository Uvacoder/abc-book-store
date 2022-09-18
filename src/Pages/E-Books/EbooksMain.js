import React from 'react';
import ProductCarousel from '../AudioBooks/ProductCarousel';
import './Ebook.css'

const EbooksMain = () => {
    return (
      <div className="mb-20">
      <h1 className="text-2xl font-semibold text-center my-8"> E-Book Books </h1>

      <section className="top-banner mb-10 ">
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
          30% Off E-Books Bestsellers
        </h1>
        <div className="divider"></div>
        <div className="mx-auto max-w-4xl">
          <ProductCarousel></ProductCarousel>
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
              audiobook narrators bring those stories to life in an immersive
              fashion
            </p>
          </div>

          <ProductCarousel></ProductCarousel>
        </div>
        <div className="text-right px-5 lg:px-20">
          <button className="text-sm font-medium text-pink-800 link">
            See More
          </button>
        </div>
      </section>
      <section>
        <div className="divider mt-10 text-2xl font-semibold px-5 lg:px-20">
          E-Books Coming Soon
        </div>
        <p className="text-center max-w-3xl mx-auto my-10 font-medium">
          E-books are voice recordings of a book being read out loud so that
          you can listen to the story rather than read the text. E-books are
          popular because of the ability to multitask. E-books can be
          listened to while driving, commuting on public transportation,
          exercising, and more.
        </p>
        <div className="mx-auto max-w-5xl">
        <ProductCarousel></ProductCarousel>
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
            If you’re looking for where to buy E-books, you’ve come to the
            right place. Listen to E-books on the free Barnes & Noble NOOK
            app for easy listening wherever you go. Shop thousands of
            bestsellers, new releases, and classics, all in one place. Browse
            E-books read by talented narrators and celebrities including
            Meryl Streep, Adjoa Andoh, and George Newbern. Whether you’re
            cleaning, cooking, exercising, or commuting, you can multitask and
            make the time pass with an audiobook from Barnes & Noble.
          </p>
          <h2 className="text-2xl font-semibold mt-5">What is an E-Book?</h2>
          <p className="text-sm">
            E-books are voice recordings of a book being read out loud so
            that you can listen to the story rather than read the text.
            Audiobooks are popular because of the ability to multitask.
            Audiobooks can be listened to while driving, commuting on public
            transportation, exercising, and more.
          </p>
          <h2 className="text-2xl font-semibold mt-5">
            Is there an app to listen to E-Books for free?
          </h2>
          <p className="text-sm">
            Barnes & Noble audiobooks can be listened to on the free Barnes &
            Noble NOOK app available in the Apple App Store and from Google
            Play. The Barnes & Noble NOOK app can be downloaded to your phone,
            tablet or NOOK eReader for easy listening. Plus, get a free
            audiobook when you sign up for a B&N Audiobooks Subscription at
            Barnes & Noble.
          </p>
        </div>
      </section>
    </div>
    );
};

export default EbooksMain;