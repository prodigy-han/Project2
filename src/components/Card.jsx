import React, { useState } from 'react';
import stringSimilarity from 'string-similarity'; // Import for fuzzy answer matching

const Card = ({ question, answer, image, color, handleNext, handleBack, cardList, setCardList, setCurrentIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);  // Added current streak
  const [longestStreak, setLongestStreak] = useState(0);  // Added longest streak

  // Handle guess submission with fuzzy matching
  const handleSubmit = () => {
    const similarity = stringSimilarity.compareTwoStrings(
      guess.trim().toLowerCase(),
      answer.trim().toLowerCase()
    );
    
    if (similarity > 0.8) { // 80% similarity threshold
      setFeedback('Correct!');
      updateStreak(true);  // Update streak on correct answer
    } else {
      setFeedback(`Incorrect! The correct answer is: ${answer}`);
      updateStreak(false); // Reset streak on incorrect answer
    }
    
    setShowAnswer(true); // Show the answer after submission
  };

  // Function to update current and longest streaks
  const updateStreak = (isCorrect) => {
    if (isCorrect) {
      setCurrentStreak(currentStreak + 1);
      if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);
      }
    } else {
      setCurrentStreak(0); // Reset streak on wrong answer
    }
  };

  // Shuffle the deck of cards
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffleCards = () => {
    setCardList(shuffleArray([...cardList])); // Shuffle and update cardList
    setCurrentIndex(0); // Reset to the first card in shuffled deck
    setShowAnswer(false); // Reset to question side
    setFeedback('');
    setGuess(''); // Clear input
  };

  // Reset state when navigating to a new card
  const handleReset = () => {
    setShowAnswer(false);
    setGuess('');
    setFeedback('');
  };

  return (
    <div>
      <div 
        className="card" 
        style={{ backgroundColor: color }}
        onClick={() => setShowAnswer(!showAnswer)} // Flip the card when clicked
      >
        {image && <img src={image} alt="Card" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }} />}
        
        {!showAnswer ? (
          <div className="question-side">
            <h2>{question}</h2>
          </div>
        ) : (
          <div className="answer-side">
            <h2>{answer}</h2>
            {feedback && <p>{feedback}</p>}
          </div>
        )}
      </div>

      {/* Input and buttons moved outside the card */}
      <div className="card-controls">
        {!showAnswer && (
          <div>
            <input 
              type="text" 
              value={guess} 
              onChange={(e) => setGuess(e.target.value)} 
              placeholder="Your guess..." 
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}

        <div className="card-navigation">
          <button onClick={() => { handleBack(); handleReset(); }} className="nav-button"> ⬅ </button>
          <button onClick={() => { handleNext(); handleReset(); }} className="nav-button"> ➡ </button>
          <button onClick={shuffleCards}>Shuffle</button>
        </div>
      </div>

      {/* Streak information */}
      <div className="streak-info">
        <p>Current Streak: {currentStreak}</p>  {/* Displays the current streak */}
        <p>Longest Streak: {longestStreak}</p>  {/* Displays the longest streak */}
      </div>
    </div>
  );
};

export default Card;