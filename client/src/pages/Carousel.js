/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import Cards from './Cards';

function Carousel() {
  const [currentCard, setCurrentCard] = useState(0);
  const [cards, setCard] = useState([]);

  useEffect(() => {
    // Fetch data for cards
  const data = [
    { image: 'simu.jpg', caption: 'Im great' },
    { image: 'simu.jpg', caption: 'Im great' },
    { image: 'simu.jpg', caption: 'Im great' },
  ];
const cardElements = data.map((cards, index) => (
<Cards key={index} image={cards.image} caption={cards.caption} />
));
  setCard(cardElements);
}, []);

const handleNextClick = () => {
  setCurrentCard((currentCard + 1) % numCard);
};

return (
  <div>
    {cards.map((cards, index) => {
      return (
        <div
        key={index}
        style={{
          display: index === currentCard ? 'block' : 'none',
        }}
        >
          {cards}
          </div>
      );
    })}
  <button onClick={handleNextClick}>Next</button>
  </div>
  );
}

export default Carousel;
