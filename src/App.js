import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file

function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddPlayersClick = () => {
    setShowAddForm(true);
  };

  const handleBackClick = () => {
    setShowAddForm(false);
  };

  return (
    <div className="app-container">
      <header>
      <div className="title-container">
          <h1>🏀 ESKA(NA) Players Directory</h1>
          <p className="title-description">Welcome to the world's first local basketball players directory! Click on each player to view details. If you want to add a player in the database, use the Add Player button on the top right. If you have any questions, reach me out at llaliotis@gmail.com</p>
        </div>
      </header>
      <div className="buttons-container">
          {showAddForm ? (
            <button className="back-button" onClick={handleBackClick}>
              Back
            </button>
          ) : (
            <button className="add-players-button" onClick={handleAddPlayersClick}>
              Add Players
            </button>
          )}
        </div>
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
      <footer>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
