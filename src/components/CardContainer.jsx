import React, { useState } from 'react';
import Card from './Card';
import cardData from '../data/cardData';

const CardContainer = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // Handle next card
  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  // Handle back card
  const handleBack = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const currentCard = cardData[currentCardIndex];

  return (
    <div className="card-container">
      <Card 
        question={currentCard.question} 
        answer={currentCard.answer} 
        image={currentCard.image} 
        color={currentCard.color}
        currentCardIndex={currentCardIndex}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </div>
  );
};

export default CardContainer;