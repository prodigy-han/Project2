import React, { useState } from 'react';
import Card from './Card';
import cardData from '../data/cardData';

const CardContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * cardData.length);
  };

  const handleNext = () => {
    let newIndex = getRandomIndex();
    while (newIndex === currentIndex && cardData.length > 1) {
      newIndex = getRandomIndex();
    }
    setCurrentIndex(newIndex);
  };

  const currentCard = cardData[currentIndex];

  return (
    <div className="card-container">
      <Card 
        question={currentCard.question} 
        answer={currentCard.answer} 
        image={currentCard.image} 
        color={currentCard.color} 
      />
      <button onClick={handleNext} className="next-button">➡️</button>
    </div>
  );
};

export default CardContainer;