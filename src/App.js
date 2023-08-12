import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddPlayersClick = () => {
    setShowAddForm(true);
  };

  const handleBackClick = () => {
    setShowAddForm(false);
  };

  return (
    <div>
      <header>
        <h1>Basketball Players Directory</h1>
        {showAddForm ? (
          <button onClick={handleBackClick}>Back</button>
        ) : (
          <button onClick={handleAddPlayersClick}>Add Players</button>
        )}
      </header>
      <main>
        {showAddForm ? (
          <iframe
            src="https://airtable.com/embed/appThwwv8stVXpfrq/shrODyeVL0HL6pqPb?backgroundColor=purple"
            title="Add Players Form"
            width="100%"
            height="600"
          />
        ) : (
          <div>
            <iframe
              src="https://airtable.com/embed/appThwwv8stVXpfrq/shrn2FCFyeL1R6BVK?backgroundColor=purple"
              title="Basketball Players Table"
              width="100%"
              height="600"
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
