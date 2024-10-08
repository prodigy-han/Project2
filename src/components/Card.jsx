import React, { useState } from 'react';

const Card = ({ question, answer, image, color }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div 
      className="card" 
      onClick={() => setShowAnswer(!showAnswer)}
      style={{ backgroundColor: color }}
    >
      {image && <img src={image} alt="Card Image" className="card-image" />}
      <h2 style={{ color: showAnswer ? "#000000" : "#000000" }}>
        {showAnswer ? answer : question}
      </h2>
    </div>
  );
};

export default Card;