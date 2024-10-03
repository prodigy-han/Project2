import React from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import cardData from './data/cardData';

function App() {
  return (
    <div className="app">
      <Header 
        title="Flashcard Study App"
        description="Test your knowledge using these flashcards!"
        total={cardData.length}
      />
      <CardContainer />
    </div>
  );
}

export default App;