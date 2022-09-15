import React from 'react';
import { useState } from 'react';

const Editorial = () => {
    const [readMoreShown, setReadMoreShown] = useState(false);
    const toggoleButton = () => {
        setReadMoreShown(prevState => !prevState)
    }
    return (
        <>
            <div className='bg-[#BEDFDF] w-auto px-5 mx-12'>
                <div className='text-center'>
                    <h1 className='text-2xl font-[ubuntu] py-3'>Editorial Reviews</h1>
                </div>
                <div className='text-sm text-center'>
                    <div>
                        <p>
                            <span>
                                A New York Times Bestseller <br />
                                An Entertainment Weekly Best YA Book of the Year Selection<br />
                                A Buzzfeed Best YA Book of the Year Selection<br />
                                A New York Public Library's Best Book for Teens Selection<br />
                                A Popcrush Best Young Adult Book of the Year Selection<br />
                                A CBC Teen Choice Book Award Nominee<br />
                                A Bustle Best Young Adult Book of the Month<br />
                                A Goodreads Best Young Adult Book of the Year Nominee<br />
                                A YALSA Top Ten Best Fiction Book Nominee<br />
                                A YALSA Quick Pick for Reluctant Young Adult Readers<br />
                            </span>

                            <span>“Pretty Little Liars meets The Breakfast Club....so make room for One of Us Is Lying in your bags, because this is one carry-on you won’t want to put down." —Entertainment Weekly Online</span>

                            <span>“You’ll tear through this juicy, super-fun (if murder can ever be fun?) thriller."—Bustle</span>

                            <span>
                                "A whodunit with a Breakfast Club twist...following four unique voices on a chase to find the killer, this one will keep you guessing until the very, very end."—Popcrushs
                            </span>
                        </p>
                    </div>
                    <div className={`${readMoreShown ? "block" : "hidden"}`}>
                        <p>
                            <span>
                                "Twisty plotting, breakneck pacing and intriguing characterisation add up to an exciting, single-sitting thrillerish treat."—The Guardian
                            </span>

                            <span>
                                "This is no ordinary whodunit…surprising and relevant."—USA Today</span>

                            <span> "Readers will have a hard time putting this clever page-turner down." —BookPage Online</span>

                            <span>  “An addictive, devour-in-one-sitting thriller with so many twists and turns you'll be wondering until the very end: Who really killed Simon?”—Kara Thomas, author of The Darkest Corners and Little Monsters</span>

                            <span>
                                ★"[As] McManus's intense mystery unfolds...each character becomes more complex and nuanced, adding richness and depth to the suspense." —VOYA, Starred Review
                            </span>

                            <span>"This fast-paced blend of Gossip Girl, Pretty Little Liars, and classic John Hughes will leave readers racing to the finish as the try to unravel the mystery on their own."—Kirkus Reviews</span>

                            <span>
                                "One of Us Is Lying is flat-out addictive...[McManus] weaves an authentic, suspenseful mystery that readers can imagine taking place at their very own high school.”—RT Book Reviews
                            </span>

                            <span>
                                "A smart, twisted, and unpredictable YA mystery that will have readers guessing until the very end."—SLJ
                            </span>

                            <span>"An engaging, enticing look at the pressures of high school and the things that cause a person to lose control."—Booklist
                            </span>
                            From the Publisher
                        </p>
                    </div>

                </div>
                <div className='flex justify-center my-5'>
                    <button className='border border-black px-4 py-1 my-5 absolte hover:bg-black hover:text-white text-sm' onClick={toggoleButton}>{readMoreShown ? "Read less" : "Read More"}</button>
                </div>
            </div>
        </>
    );
};

export default Editorial;