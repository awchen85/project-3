/* eslint-disable */

import React, { useState, useEffect } from 'react';
import Cards from '../Cards';

function Carousel() {
  const [currentCard, setCurrentCard] = useState(0);
  const [cards, setCard] = useState([]);

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
