/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable eol-last */
import React, { useState } from 'react';

function Carousel({ items, Cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);

  const nextSlide = () => {
    if (activeIndex === items.length - 1) {
      setActiveIndex(0);
      setTranslate(0);
    } else {
      setActiveIndex(activeIndex + 1);
      setTranslate(-100 * (activeIndex + 1));
    }
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(items.length - 1);
      setTranslate(-100 * (items.length - 1));
    } else {
      setActiveIndex(activeIndex - 1);
      setTranslate(-100 * (activeIndex - 1));
    }
  };

  return (
    <div className="relative w-full h-64">
      <div
        className="w-full h-full flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateX(${translate}%)`,
          transition: `transform ease-out ${transition}s`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full h-full absolute bg-gray-800 text-center"
            style={{
              transform: `translateX(${100 * index}%)`,
            }}
          >
            <Cards {...item} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-0 left-0 w-12 h-12 m-4 rounded-full bg-gray-300 hover:bg-gray-400"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-0 right-0 w-12 h-12 m-4 rounded-full bg-gray-300 hover:bg-gray-400"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
