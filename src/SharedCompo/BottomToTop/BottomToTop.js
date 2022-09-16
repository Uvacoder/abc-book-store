import React from 'react';
import { useState, useEffect } from 'react';
import { GiBookStorm } from 'react-icons/gi';

const BottomToTop = () => {
    const [scrollTop, setScrollTop] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 800 ? setScrollTop(true) : setScrollTop(false);
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div>
            {scrollTop && (
                <button onClick={scrollUp} className='fixed bottom-10 right-14 bg-gray-900 w-10 h-10 rounded-full'>
                    <GiBookStorm className='text-white text-xl relative left-2.5' />
                </button>
            )}
        </div>
    );
};

export default BottomToTop;